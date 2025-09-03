import { useState } from "react"


const AddToCartBtn = () => {
  
  const [count, setCount] = useState(0)

  return (
    <>
    {
        count == 0 ?
        <div onClick={()=>setCount(count + 1)}>
            🛒 Add to Cart 
        </div> :
        <div>
            <button onClick={()=>setCount(count - 1)}>-</button>
            {count}
            <button onClick={()=>setCount(count + 1)}>+</button>
        </div>
    }
    </>
  )
}

export default AddToCartBtn