
interface FruitProps{
  callback:()=>void;
}

function Fruit({callback}:FruitProps) {


    return (
      <div>
       <img onClick={callback} src="../assets/fruit.png" alt="fruit" />
      </div>
    )
  }
  
  export default Fruit;
  