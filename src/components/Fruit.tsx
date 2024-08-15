
import fruit from "./../assets/fruit.svg"
import shadow from "./../assets/shadow.png"
import styles from "./styles/fruit.module.scss"

interface FruitProps{
  callback:(event: React.TouchEvent<HTMLDivElement>)=>void;
}

function Fruit({callback}:FruitProps) {
  

    return (
      <div className={styles.fruit}>
       <img className={styles.fruit__img} onTouchStart={callback} src={fruit} alt="fruit" />
       <img className={styles.fruit__shadow} src={shadow} alt="shadow" />
      </div>
    )
  }

  export default Fruit;
  