import { useInitData } from "@telegram-apps/sdk-react";
import { useLayoutEffect, useState } from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import styles from "./styles/tappingPage.module.scss"
import Coins from "./Coins";
import Fruit from "./Fruit";
import Energy from "./Energy";
import NumberBlock from "../model/numberBlocks";



const TappingPage = observer(() => {
  const [step, setStep] = useState<number>(1); 
  const [userId, setUserId] = useState<number>(0);
  const initData = useInitData();
  const [blocks, setBlocks] = useState<NumberBlock[]>([]);

  useLayoutEffect(()=>{
    setStep(1);
    setUserId(initData?.user?.id as number);
    statsService.loadStats(Number(userId));

    const interval = setInterval(() => {
      if(statsService.getEnergy() < 1000){
        statsService.setEnergy(statsService.getEnergy()+step);
        
      }
      statsService.setCoins(statsService.getCoins()+step);
      statsService.saveStats(userId);
      
    }, 1000);


    return () => {
      clearInterval(interval);
      statsService.saveStats(userId);
    }
  }, [])

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

    setTimeout(() => {
      setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== newBlock.id));
    }, 1000); // Удаляем блок через 1 секунду
    event.stopPropagation();
  };

  return (
    
     <div className={styles.tappingPage}>
      {/* id: {userId} */}
      <Coins/>
      <Fruit callback={tap} blocks={blocks} />
      <Energy/>
    </div>
    
  )
})

export default TappingPage;
