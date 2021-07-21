import React from "react";
import "./AboutUs.css";


class AboutUs extends React.Component {

    state = {
        integrantes: [
            {
                Nombre: "Adolfo Rodríguez Sánchez",
                UO: "UO271620",
                GitHubName: "uo271620",
                GitHub: "https://github.com/uo271620",
                PODName: "adakrs",
                POD: "https://adakrs.inrupt.net/profile/card#me"
            }
            , {
                Nombre: "Raúl Mínguez Rodríguez",
                UO: "UO252192",
                GitHubName: "Error404UsernameNotFound",
                GitHub: "https://github.com/Error404UsernameNotFound",
                PODName: "",
                POD: "https://error404usernamenotfound.inrupt.net/profile/card#me"
            },
            {
                Nombre: "Pablo Diaz Rubio",
                UO: "UO271245",
                GitHubName: "UO271245",
                GitHub: "https://github.com/UO271245",
                PODName: "uo271245",
                POD: "https://uo271245.inrupt.net/profile/card#me"
            },
            {
                Nombre: "Juan Mencía Menéndez",
                UO: "UO264197",
                GitHubName: "uo264197",
                GitHub: "https://github.com/uo264197",
                PODName: "uo264197",
                POD: "https://uo264197.inrupt.net/profile/card#me"
            },
            {
                Nombre: "Thalía Cuetos Fernández",
                UO: "UO264545",
                GitHubName: "UO264545",
                GitHub: "https://github.com/UO264545",
                PODName: "tcuetosf",
                POD: "https://tcuetosf.inrupt.net/profile/card#me"
            },
            {
                Nombre: "Luis Martínez Moreno",
                UO: "UO258273",
                GitHubName: "UO258273",
                GitHub: "https://github.com/UO258273",
                PODName: "uo258273",
                POD: "https://uo258273.inrupt.net/profile/card#me"
            }
        ]
    };

    render() {
        return (
            <div className="about-us-container">
                <div className="container">
                    <h1 className="display-5 text-light">Radarin Es3a</h1>
                    <div>
                        <h2 className="display-6 text-light">Colaboradores: </h2>
                        {this.state.integrantes.map((integrante) => (
                            <>
                                <div className="card mb-3 bg-dark " >
                                    <div className="row g-0 ">
                                        <div className="col-md-3 bg-image hover-overlay ripple">
                                            <img className="mx-auto d-block imagenCard p-0 m-0"  src="../../LogoR.png" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-light">{integrante.Nombre}</h5>
                                                <p className="card-text text-light">{integrante.UO}</p>
                                                <a href={integrante.GitHub} className="btn btn-primary p-3 m-3">GitHub</a>
                                                <a href={integrante.POD} className="btn btn-primary p-3 m-3 ">POD</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutUs;