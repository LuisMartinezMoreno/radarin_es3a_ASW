import { Button } from "@material-ui/core";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { getUserByWebId, getUsers } from "../api/api";
import {notify} from "../services/notify";
import "./UsersLocation.css";

class UsersLocation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {users:[]};
      }

    componentDidMount(){
        this.fetchUsers();
    }

    async fetchUsers() {
        try{
            let users = await getUsers();
            let usersFiltrados = [];
            for (let index in users) {
                if(index) {
                    getUserByWebId(users[index].webId).then((user) => {
                        if (!(user === "radarin")) {
                            usersFiltrados.push(users[index]);
                        }
                    });
                }
            }
            this.setState({users});
        }
        catch(error)
        {
            return;
        }
    }

    render() {
        return (
            <div className="UserList container">
                <h2 className="text-light display-4 p-3">Lista de localizaciones de usuarios registrados</h2>
                <ListGroup>
                    {this.state.users.map(function(user, i){
                        return <ListGroup.Item id={i} key={i}>{user.webId +  (user.location ? " (" + user.location.lat 
                            + ", " + user.location.lng + ")" : "")} 
                                <Button onClick={() => notify(user.webId)} >Enviar notificación</Button>
                            </ListGroup.Item>;
                    })}
                </ListGroup>
           </div>
        );
    }
}

export default UsersLocation;