import SliderRadio from "./SliderRadio";

export default function SliderContainer() {
    return (
        <div className="">
          <span className="text-light p-1 w-25">Distancia deseada: </span>
                            <SliderRadio />
        </div>
      );
}