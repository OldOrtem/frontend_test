import statsService from "../service/StatsService";
import fruit from "./../assets/fruit.svg"
import styles from "./styles/fruit.module.scss"

interface FruitProps{
  callback:()=>void;
}

function Fruit({callback}:FruitProps) {
    
  function tap(){
    if (statsService.getEnergy() > 0){
      callback();
    }
    
  }

    return (
      <div className={styles.fruit}>
       <img className={styles.fruit__img} onClick={tap} src={fruit} alt="fruit" />
      </div>
    )
  }

  export default Fruit;
  