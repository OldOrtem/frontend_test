import energyStore from "../store/energyStore"

function Energy() {
  

    return (
      <div>
        Your Energy: {energyStore.value/10}%
        <div>
          <div>
            {energyStore.value}
          </div>
        </div>
      </div>
    )
  }
  
  export default Energy
  