import Display from "./camponants/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./camponants/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}
export default App;
