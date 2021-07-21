import MapComponent from "./MapComponent";
import { useState } from "react";
import MapOff from "./MapOff";
import { Button } from "@material-ui/core";
import SliderContainer from "./SliderContainer";
import MutedComponent from "./MutedComponent";
import "./MapContainer.css";

export default function MapContainer() {

    const [on, setOn] = useState(false);

    function switchOnOff() {
        setOn(!on);
    }

    return (
        <div className="contenedorMapContainer container-fluid  p-0 m-0">
            <div className="row">
                <div className="col md-12">

                    <div className="container-fluid p-0 m-0">
                        <div className="row sliderRow">
                            <div className="col md-6 ">
                                <div className="d-flex justify-content-right  flex-row-reverse">
                                    {on
                                        ? <SliderContainer />
                                        : <MutedComponent />}
                                </div>
                            </div>
                            <div className="col md-6 d-flex flex-row-reverse">
                                <Button className="botonEncenderApagar d-flex justify-content-end" onClick={() => switchOnOff()}>{on ? "Apagar" : "Encender"}</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col md-6">
                                <div className="container-fluid p-0 mr-0">
                                    {on
                                        ? <MapComponent></MapComponent>
                                        : <MapOff></MapOff>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}