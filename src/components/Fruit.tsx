import fruit from "./../assets/fruit.png"

interface FruitProps{
  callback:()=>void;
}

function Fruit({callback}:FruitProps) {


    return (
      <div>
       <img onClick={callback} src={fruit} alt="fruit" />
      </div>
    )
  }
  
  export default Fruit;
  