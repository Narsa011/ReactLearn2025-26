import Item from "./items";

function FoodyItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={index} foodItem={item} />
      ))}
    </ul>
  );
}

export default FoodyItems;
