import AddToCartBtn from './AddToCartBtn'

type Dessert = {
    name : string;
    img?: string;
    category: string;
    price: number;
}

const DessertCard = (props: Dessert) => {
  return (
    <div className='dessertCard'>
        <img src={props.img} alt="" />
        <AddToCartBtn/>
        <h2 className='category'>{props.category}</h2>
        <h1 className='dessertName'>{props.name}</h1>
        <h3 className='price'>${props.price}</h3>
    </div>
  )
}

export default DessertCard