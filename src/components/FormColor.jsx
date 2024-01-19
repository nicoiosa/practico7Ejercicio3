import { Button, FormControl } from "react-bootstrap";

const FormColor = () => {
  return (
    <section className="p-4 border">
      <h1 className="display-5">Administrar Color</h1>
      <div
        className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom d-flex flex-column flex-sm-row align-items-center
        "
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="mb-2 mb-sm-0" style={{ backgroundColor: "red", height: 100, width: 100 }}></div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <FormControl
            style={{ maxHeight: 40, maxWidth: 300 }}
            placeholder="Ingrese un Color, Ej: Blue"
          />
        </div>
      </div>
      <div className="d-flex flex-row-reverse">
        <Button>Guardar</Button>
      </div>
    </section>
  );
};

export default FormColor;
