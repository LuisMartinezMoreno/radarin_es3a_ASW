import React from "react";
import { fetchName } from "../../services/fetchProfile";
import "./Admin.css";
import { getUsers } from "../../api/api";
import { deleteUser } from "../../services/deleteFromDB";
import { Button } from "react-bootstrap";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    async fetchUsers() {
        try {
            getUsers().then((users) => {
                let usersFiltrados = [];
                users.forEach((index) => {
                    try {
                        fetchName(index.webId).then((user) => {
                            if(!user) {
                                return;
                            }
                            if (!(user === "radarin")) {
                                usersFiltrados.push(user);
                                this.setState({ users: usersFiltrados });
                            }
                        });
                    } catch (error) {
                        return;
                    }
                });
                this.setState({ users: usersFiltrados });
                //this.setState({ users: todosLosUsers });
            });
        }
        catch (error) {
            return;
        }
    }

    render() {
        const handleClickOnDelete = (user, index) => {
            deleteUser(user);
            let users = this.state.users;
            this.state.users.splice(index,1);
            this.setState({users});
        };
        return (
            <>
                <div className="container adminContainer">
                    <h1 className="display-5 text-light">Zona del Administrador</h1>
                    <div className="row">
                        <div className="col-md-auto p-3 border border-light rounded">
                            <h2 className="display-6 text-light">Manejo Usuarios</h2>

                            {this.state.users.map(function (user, i) {
                                return (
                                    <div className="card w-100 text-white bg-dark">
                                        <div className="card-body ">
                                            <h5 className="card-title">{user}</h5>
                                            {<Button type="button" className="btn btn-danger" onClick={() => handleClickOnDelete(user,i)} >Eliminar usuario</Button>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="col-md-auto  p-3 border border-light rounded">
                            <h2 className="display-6 text-light">Usuarios Conectados</h2>
                            {this.state.users.map(function (user, i) {
                                return (
                                    <div className="card w-100 text-white bg-dark">
                                        <div className="card-body ">
                                            <h5 className="card-title">{user}</h5>
                                            <span className="badge badge-pill badge-success">Success</span>
                                            <span className="badge badge-pill badge-danger">Danger</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Admin;