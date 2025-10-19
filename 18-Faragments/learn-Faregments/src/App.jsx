import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const foodItems = [
    "Dal",
    "Salad",
    "Milk",
    "Green Vagitables",
    "Roti",
    "Ghee",
    "Daily Drink Water",
  ];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((fruits) => (
          <li key={fruits} className="list-group-item">
            {fruits}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
