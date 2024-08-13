import stats from "./stats";

interface ITransport{
    get(user_id:number):Promise<stats>;
    post(user_id:number, newStats:stats):Promise<void>;
}

export default ITransport;