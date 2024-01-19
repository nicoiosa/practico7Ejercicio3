import ItemColor from "./ItemColor";

const Grid = () => {
  return (
    <section className="py-5">
      <div className="row justify-content-evenly gap-5">
        <ItemColor />
        <ItemColor />
        <ItemColor />
        <ItemColor />
      </div>
    </section>
  );
};

export default Grid;
