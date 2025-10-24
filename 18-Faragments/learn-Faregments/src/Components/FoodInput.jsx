import styles from "./FoodInput.module.css";
const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter food item here.."
      className={styles.FoodInput}
      onClick={(event) => console.log(event.target.value)}
    />
  );
};
export default FoodInput;
