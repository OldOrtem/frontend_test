import axios from "axios";
import ITransport from "../model/transport";
import stats from "../model/stats";

class StatsTransport implements ITransport{
    private static instance:StatsTransport;
    private apiUrl:string;
    // http://127.0.0.1:8002/test/user_entry_check/{user_id}
    private constructor(url:string){
        this.apiUrl = url;
    }

    public static getInstance(url:string): StatsTransport {
        if (!StatsTransport.instance) {
            StatsTransport.instance = new StatsTransport(url);
        }
        return StatsTransport.instance;
    }

    public async get(user_id:number):Promise<stats> {
        try {
            const response = await axios.get(`${this.apiUrl}/test/user_entry_check/${user_id}`);
            const data: stats = response.data;
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`transport.get: Error fetching data from API: ${error.response?.status} ${error.response?.statusText}`);
            } else {
                const err = error as Error;
                throw new Error(`transport.get: An unexpected error occurred: ${err.message}`);
            }
        }
    }

    public async post(user_id:number, newStats:stats):Promise<void> {
        try {
            const response = await axios.post(`${this.apiUrl}/test/user_exit/${user_id}?coins=${newStats.coins}&energy=${newStats.energy}`)
            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`transport.post: Error fetching data from API: ${error.response?.status} ${error.response?.statusText}`);
            } else {
                const err = error as Error;
                throw new Error(`transport.post: An unexpected error occurred: ${err.message}`);
            }
        }
    }
}

export default StatsTransport.getInstance('http://127.0.0.1:8002')
