
import NumberBlock from "../model/numberBlocks";
import energyStore from "../store/energyStore";
import fruit from "./../assets/fruit.svg"
import shadow from "./../assets/shadow.png"
import styles from "./styles/fruit.module.scss"

import statsService from "../service/StatsService";
import { useState } from "react";
import { observer } from "mobx-react-lite";

interface FruitProps{
  step: number;
}
const Fruit = observer(({step}:FruitProps) => {

  const [blocks, setBlocks] = useState<NumberBlock[]>([]);
  // const [translateX, setTranslateX] = useState(0);
  // const [translateY, setTranslateY] = useState(0);
  const [deg, setDeg] = useState(0);

  const tap = (event: React.TouchEvent<HTMLDivElement>) => {
    
    let touches = 1;
    if (statsService.getEnergy() > 0){
      touches = event.touches.length;
      
      statsService.setCoins(statsService.getCoins()+step*touches);
      statsService.setEnergy(statsService.getEnergy()-step*touches);
    }
    
    const randomX = Math.random() * window.innerWidth*0.5;
    const randomY = Math.random() * window.innerHeight*0.3;

    const newBlock: NumberBlock = {
      id: Date.now(),
      count: touches,
      x: randomX,
      y: randomY,
    };

    setBlocks((prevBlocks) => [...prevBlocks, newBlock]);

    const parentWidth = event.currentTarget.clientWidth;
    const parentHeight = event.currentTarget.clientHeight;

    // Вычисляем отклонение от центра блока
    const touch = event.changedTouches[0];
    const offsetX = (touch.clientX - parentWidth / 2) / 10; // Делим на 10 для плавности
    // const offsetY = (touch.clientY - parentHeight / 2) / 10;

    setDeg(offsetX > 0 ? -45 : 45)

    setTimeout(() => {
      setDeg(0);
    }, 500);

    setTimeout(() => {
      setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== newBlock.id));
    }, 1000); // Удаляем блок через 1 секунду

    event.stopPropagation();
  };

    return (
      <div className={styles.fruit}>
       <img 
          className={`${styles.fruit__img} ${energyStore.value ? "" : styles.grey}`} 
          onTouchStart={tap} 
          style={{ transform: `translate(skewX(${deg}deg))`, }} 
          src={fruit} 
          alt="fruit" 
       />
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
            <div>
              +{block.count}
            </div>
          </div>
        ))}
      </div>
    )
  }
)
  export default Fruit;
  