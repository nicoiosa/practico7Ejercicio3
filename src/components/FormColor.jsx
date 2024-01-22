import { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Grid from "./Grid";

const FormColor = () => {
  const [color, setColor] = useState("");
  const [colorArray, setColorArray] = useState(
    JSON.parse(localStorage.getItem("colorArray")) || []
  );
  useEffect(() => {
    localStorage.setItem("colorArray", JSON.stringify(colorArray));
  }, [colorArray]);
  const dltColor = (index) => {
    const filteredArray = colorArray.filter((_, i) => i !== index);
    setColorArray(filteredArray);
  };
  return (
    <section className="p-4 border">
      <h1 className="display-5">Administrar Color</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setColorArray([...colorArray, color]);
          setColor("");
        }}
      >
        <Form.Group controlId="input">
          <div
            className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom d-flex flex-column flex-sm-row align-items-center
        "
            style={{ backgroundColor: "lightgrey" }}
          >
            <div
              className="mb-2 mb-sm-0"
              style={{ backgroundColor: "red", height: 100, width: 100 }}
            ></div>
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <FormControl
                style={{ maxHeight: 40, maxWidth: 300 }}
                placeholder="Ingrese un Color, Ej: Blue"
                type="text"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </div>
          </div>
          <div className="d-flex flex-row-reverse">
            <Button type="submit">Guardar</Button>
          </div>
        </Form.Group>
      </Form>
      <Grid colorArray={colorArray} dltColor={dltColor} />
    </section>
  );
};

export default FormColor;
