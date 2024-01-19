import { Button } from "react-bootstrap";

const ItemColor = () => {
  return (
    <div className="p-4 border col-3">
      <p className="lead">Nombre Color</p>
      <div
        className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom d-flex flex-column flex-sm-row align-items-center
    "
        style={{ backgroundColor: "lightgrey" }}
      >
        <div
          className="mb-2 mb-sm-0"
          style={{ backgroundColor: "red", height: 100, width: 100 }}
        ></div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-center"></div>
      </div>
      <div className="d-flex flex-row-reverse">
        <Button className="btn-danger">Borrar</Button>
      </div>
    </div>
  );
};

export default ItemColor;
