
import NumberBlock from "../model/numberBlocks";
import fruit from "./../assets/fruit.svg"
import shadow from "./../assets/shadow.png"
import styles from "./styles/fruit.module.scss"

interface FruitProps{
  callback:(event: React.TouchEvent<HTMLDivElement>)=>void;
  blocks: NumberBlock[];
}

function Fruit({callback, blocks}:FruitProps) {
  

    return (
      <div className={styles.fruit}>
       <img className={styles.fruit__img} onTouchStart={callback} src={fruit} alt="fruit" />
       <img className={styles.fruit__shadow} src={shadow} alt="shadow" />
       
       {blocks.map((block) => (
          <div
            key={block.id}
            className="number-popup"
            style={{
              left: `${block.x}px`,
              top: `${block.y}px`,
            }}
          >
            +{block.count}
          </div>
        ))}
      </div>
    )
  }

  export default Fruit;
  