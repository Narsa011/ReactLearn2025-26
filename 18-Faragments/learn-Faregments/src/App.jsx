import FoodyItems from "./Components/foodItems";
import Container from "./Components/Container";
import ErrorMSg from "./Components/errorMessage";
import FoodInput from "./Components/FoodInput";
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
      <Container>
        <h1 className="foodHeading">Healthy Food.</h1>
        <FoodInput />
        <ErrorMSg items={foodItems} />
        <FoodyItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
