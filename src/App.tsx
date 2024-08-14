import React, { useEffect } from 'react';
// import { SDKProvider} from '@telegram-apps/sdk-react';
// import TappingPage from './components/TappingPage';
import './App.css'
import statsService from "./service/StatsService";

const App: React.FC = () => {
  // const [userId, setUserId] = useState<string | null>(null);
  
  useEffect(()=>{
    statsService.setCoins(statsService.getCoins()+5);
    statsService.setEnergy(statsService.getEnergy()-5);
    statsService.saveStats(Number(5));
  },[])
  return (
    <>
    </>
    // <SDKProvider acceptCustomStyles >
      
    //   <TappingPage/>
    // </SDKProvider>
  );
};

export default App;
