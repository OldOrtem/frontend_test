import { useLayoutEffect} from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import energyStore from "../store/energyStore";
import coinStore from "../store/coinStore";


const Test = observer(() => {
    useLayoutEffect(()=>{
        tap();
      },[])
    
      async function tap(){
        await statsService.loadStats(Number(573180561));
        // statsService.setCoins(statsService.getCoins()+20);
        // statsService.setEnergy(statsService.getEnergy()-20);
        await statsService.saveStats(573180561);
      }
  return (
    <div>
      {coinStore.value}
      <br />
      {energyStore.value}
    </div>
    
  )
})

export default Test;
