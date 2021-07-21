import Markers, { updateUserMarker, changeRadius} from "./Markers";
import { render, fireEvent, getByText } from "@testing-library/react";


// No cambia el radio si se le pasa un radio errorneo
    it("changeRadius no cambia el radio con parametros errorneos", () => {
        return expect(changeRadius("none1")).toBe(50);
    });
// Cambia el radio si se le pasa un radio correcto
    it("changeRadius() cambia el radio", () => {
        return expect(changeRadius(100)).toBe(100);
    });

test("check that the dont throw error markers", async () => {
    const radius = 50;
    const markers = render(<Markers rad={radius} />);
    expect(markers).toBeDefined();
  });