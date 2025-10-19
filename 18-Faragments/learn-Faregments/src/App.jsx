import FoodyItems from "./Camponanat/foodItems";
import ErrorMSg from "./Camponanat/errorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const foodItems = [
    "Dal",
    "Salad",
    "Milk",
    "Green Vegetables",
    "Roti",
    "Ghee",
    "Daily Drink Water",
    "Fruits",
  ];

  return (
    <>
      <h1 className="foodHeading">Healthy Food.</h1>
      <ErrorMSg items={foodItems} />
      <FoodyItems items={foodItems} />
    </>
  );
}

export default App;
