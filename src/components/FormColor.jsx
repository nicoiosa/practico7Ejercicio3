import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Grid from "./Grid";
import { useForm } from "react-hook-form";
import { createColorAPI } from "../helpers/queries";

const FormColor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [reload, setReload] = useState(false);
  const onSubmit = async (color) => {
    const answer = await createColorAPI(color);
    setReload(!reload);
    reset();
  };
  return (
    <>
      <section className="p-4 border">
        <h2 className="display-5">Administrar Color</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="input">
            <div
              className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom d-flex flex-column flex-sm-row align-items-center"
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
                  {...register("color", {
                    required: "Tienes que escribir el color",
                    maxLength: {
                      value: 25,
                      message: "Debe tener como maximo 25 caracteres",
                    },
                  })}
                />
              </div>
            </div>
            <Form.Text className="text-danger">
              {errors.color?.message}
            </Form.Text>
            <div className="d-flex flex-row-reverse">
              <Button type="submit">Guardar</Button>
            </div>
          </Form.Group>
        </Form>
      </section>
      <Grid reload={reload} />
    </>
  );
};

export default FormColor;
