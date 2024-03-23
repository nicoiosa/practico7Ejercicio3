import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { dltColorAPI, readColorsAPI } from "../helpers/queries";

const ItemColor = ({ color, setColors }) => {
  const dltColor = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres borrar el color?",
      text: "No podras vovler atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrarlo!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await dltColorAPI(color._id);
        if (response.status === 200) {
          Swal.fire({
            title: "Borrado!",
            text: `El color fue borrado.`,
            icon: "success",
          });
          const answer = await readColorsAPI();
          if (answer.status === 200) {
            const data = await answer.json();
            setColors(data);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error!",
            text: `El color no fue borrado correctamente. Intente de nuevo mas tarde`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="p-4 border col-3">
      <p className="lead">{color.color}</p>
      <div
        className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom d-flex flex-column flex-sm-row align-items-center"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div
          className="mb-2 mb-sm-0"
          style={{ backgroundColor: color.color, height: 100, width: 100 }}
        ></div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-center"></div>
      </div>
      <div className="d-flex flex-row-reverse">
        <Button onClick={dltColor} className="btn-danger">
          Borrar
        </Button>
      </div>
    </div>
  );
};

export default ItemColor;
