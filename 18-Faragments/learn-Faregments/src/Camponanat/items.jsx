import styles from "./item.module.css";

function Item({ foodItem }) {
  return (
    <li className={`${styles["nsc"]}`}>
      <span className={styles["nscspan"]}>{foodItem}</span>
    </li>
  );
}

export default Item;
