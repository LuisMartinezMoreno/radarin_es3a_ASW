import React from "react";
import { fetchFriends } from "../../services/fetchFriends";
import { fetchName, fetchPhoto } from "../../services/fetchProfile";
import "./FriendList.css";
import solidAuth from "solid-auth-client";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    async fetchUsers() {
        const currentSession = await solidAuth.currentSession();
        if (!currentSession) {
            return null;
        }

        let that = this;
        let users = await fetchFriends();
        users = users.map(function (u, i) {
            let user = {
                webId: u,
                photo: "./user.png",
                name: ""
            };
            fetchPhoto(user.webId).then((photo) => {
                if (!photo) {
                    return;
                }
                users[i].photo = photo;
                that.setState({ users });
            });
            fetchName(user.webId).then((name) => {
                if (!name) {
                    name = users[i].webId;
                }
                users[i].name = name;
                that.setState({ users: users });
            });

            return user;
        });
        this.setState({ users });
    }

    render() {
        return (
            <div className="friendlistContainer">
                <h1 className="text-light">Lista de amigos</h1>
                <div id="list-test">
                    {this.state.users.map(function (user, i) {
                        return (
                            <List key= {i}>
                                <ListItem alignItems="flex-start" id={i} key={i}>
                                    <ListItemAvatar >
                                        <Avatar style={{
                                            width: 75,
                                            height: 75
                                        }} className="friend-img" alt="Profile Photo" src={user.photo} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography  className="text-light"
                                                    style={{
                                                        fontWeight: 600,
                                                        fontSize: 18
                                                    }}>
                                                    {user.name}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    style={{
                                                        fontWeight: 200,
                                                        fontSize: 14,
                                                        color: "whitesmoke"
                                                    }}>
                                                    {user.webId}
                                                </Typography>
                                            </React.Fragment>
                                        }

                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>

                        );
                    })}
                </div>
                <div className="box-test">
                    <Box style={{
                        width: "100%",
                        height: "6em",
                    }}>
                    </Box>
                </div>
            </div>
        );
    }
}

export default FriendList;