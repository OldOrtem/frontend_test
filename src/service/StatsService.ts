import IService from "../model/service";
import stats from "../model/stats";
import IStore from "../model/store";
import ITransport from "../model/transport";
import coinStore from "../store/coinStore";
import energyStore from "../store/energyStore";
import statsTransport from "../transport/statsTransport";


class StatsService implements IService{
    
    private static instance:StatsService;
    private coinStore:IStore;
    private energyStore:IStore;
    private transport:ITransport;
    
    private constructor(coinStore:IStore, energyStore:IStore, transport: ITransport){
        this.coinStore = coinStore;
        this.energyStore = energyStore;
        this.transport = transport;
    }

    public static getInstance(coinStore:IStore, energyStore:IStore, transport: ITransport): StatsService {
        if (!StatsService.instance) {
            StatsService.instance = new StatsService(coinStore, energyStore, transport);
        }
        return StatsService.instance;
    }

    public async loadStats(userId:number):Promise<stats>{
        const stats: stats = await this.transport.get(userId);
        this.coinStore.set(stats.coins);
        this.energyStore.set(stats.energy);
        return stats;
    }

    public async saveStats(userId:number):Promise<void>{
        const stats:stats = {
            coins: this.coinStore.get(),
            energy: this.energyStore.get(),
        }
        await this.transport.post(userId, stats)
    }
    
    public setCoins(val:number):void{
        this.coinStore.set(val);
    }

    public setEnergy(val:number):void{
        this.energyStore.set(val);
    }
   
}

export default StatsService.getInstance(coinStore, energyStore, statsTransport);
