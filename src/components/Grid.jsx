import { useEffect, useState } from "react";
import ItemColor from "./ItemColor";
import { readColorsAPI } from "../helpers/queries";
import { Alert } from "react-bootstrap";

const Grid = ({ reload }) => {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    obtainColors();
  }, [reload]);
  const obtainColors = async () => {
    try {
      const answer = await readColorsAPI();
      if (answer.status === 200) {
        const data = await answer.json();
        setColors(data);
      }
    } catch (error) {
      console.error();
      setError(
        "Hubo un error tratando de cargar los colores. Intentelo nuevamente mas tarde."
      );
    }
  };
  return (
    <section className="py-5">
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && (
        <div className="row justify-content-evenly gap-5">
          {colors.map((color) => (
            <ItemColor key={color._id} color={color} setColors={setColors} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Grid;
