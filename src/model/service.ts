import stats from "./stats";

interface IService{
    loadStats(userId:number):Promise<stats>;
    saveStats(userId:number):Promise<void>;
    setCoins(val:number):void;
    setEnergy(val:number):void;
}

export default IService;