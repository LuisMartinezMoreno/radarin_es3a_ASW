import React from "react";
import { Marker } from "@react-google-maps/api";
import solidAuth from "solid-auth-client";
import { getUserByWebId } from "../../api/api";
import { fetchFriends } from "../../services/fetchFriends";
import { notifyNearbyFriend } from "../../services/notify";
import { fetchName } from "../../services/fetchProfile";
import { setUser } from "./MapComponent";
import { saveUserLocation } from "../../services/updateUserData";

let radius = 50;
let updateMarker = (location) => { return; };

export function changeRadius(newRadius) {
    if(!isNaN(newRadius)) {radius = newRadius;}return radius;
}function degreesToRadians(degrees) {return degrees * Math.PI / 180;}function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {var earthRadiusKm = 6371;var dLat = degreesToRadians(lat2-lat1);var dLon = degreesToRadians(lon2-lon1);lat1 = degreesToRadians(lat1);lat2 = degreesToRadians(lat2);var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));return earthRadiusKm * c; }class Markers extends React.Component {constructor(props) {super(props);this.state = { friends: [], users: []};radius = this.props.rad;}
    componentDidMount() {this.fetchFriends();let users = this.state.users;let that = this; updateMarker = (location) => {that.userLoggedIn.location = location;users[0] = that.userLoggedIn;that.setState({ users }); };this.userLoggedIn = {name: "Yo",location: { }};}componentWillUnmount() {clearInterval(this.timer);saveUserLocation(); // Limpiar localización
}async fetchFriends() {const currentSession = await solidAuth.currentSession(); if (!currentSession) {return;} this.userLoggedIn = {name: "Yo",webId: currentSession.webId,location: { }};this.state.users.push(this.userLoggedIn);this.setState({ users: this.state.users });let friends = await fetchFriends();friends = friends.map((friend) => {return {name: friend,webId: friend,location: {lat: 0,lng: 0 }};});this.setState({friends});this.fetchUsers();}async fetchUsers() {try {let users = this.state.users;const currentSession = await solidAuth.currentSession();if (!currentSession) {return;}this.userLoggedIn = await getUserByWebId(currentSession.webId);if(!this.userLoggedIn || !this.userLoggedIn.location) {return;}users[0] = this.userLoggedIn; this.setState({ users });var friends = this.state.friends;var that = this;friends.forEach((friend) => {getUserByWebId(friend.webId).then((user) => {if (user){
 fetchName(user.webId).then((name) => {user.name = name;friend.name = name;if(!user.location) {return;}friend.location = user.location;if (distanceInKmBetweenEarthCoordinates(that.userLoggedIn.location.lat, that.userLoggedIn.location.lng,user.location.lat,user.location.lng) < radius) {users.push(user);that.setState({ users: users });}});} });});this.timer = setInterval(() => that.update(), 3000);}catch (error) {return;}}update() {if(!this.userLoggedIn.location) {return;}let friends = this.state.friends;let users = this.state.users;let that = this;friends.forEach((friend) => { getUserByWebId(friend.webId).then((newUser) => {if(!newUser) { return;}newUser.name = friend.name;let index = users.findIndex(user => user.webId === newUser.webId);if(!newUser.location) {if(index !== -1) { // Está en el mapa y se ha desconectado
users.splice(index, 1);}return;}friend.location = newUser.location;let inRadius = distanceInKmBetweenEarthCoordinates(that.userLoggedIn.location.lat, that.userLoggedIn.location.lng,newUser.location.lat, newUser.location.lng) < radius;if(index !== -1) {if(newUser.location !== users[index].location) {if(inRadius) {users[index] = newUser;}else {users.splice(index, 1);}}} else if(inRadius) {notifyNearbyFriend(newUser.webId);users.push(newUser);}that.setState({ users: users });});})}render() {return (this.state.users.map((item) => {return (<Marker key={item.webId}position={item.location}icon={{url: "/iconLogo.svg",scaledSize: new window.google.maps.Size(100, 100)}}onClick = {() => setUser(item)}/>);}));}}

export function updateUserMarker(location) { updateMarker(location); }
export default Markers;