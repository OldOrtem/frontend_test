import fruit from "./../assets/fruit.svg"
import styles from "./styles/fruit.module.scss"

interface FruitProps{
  callback:()=>void;
}

function Fruit({callback}:FruitProps) {


    return (
      <div className={styles.fruit}>
       <img className={styles.fruit__img} onClick={callback} src={fruit} alt="fruit" />
      </div>
    )
  }
  
  export default Fruit;
  