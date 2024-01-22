import ItemColor from "./ItemColor";

const Grid = ({ colorArray, dltColor }) => {
  return (
    <section className="py-5">
      <div className="row justify-content-evenly gap-5">
      {colorArray && colorArray.map((color, position) => (
          <ItemColor
            key={position}
            index={position}
            color={color}
            dltColor={dltColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Grid;
