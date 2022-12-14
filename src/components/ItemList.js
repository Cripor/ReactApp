import Item from './Item'
import '../App.css'

function ItemList( {products} ){
    return(
        <ul className="container list-unstyled d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5 gap-5">
            {products.map((product) => (
                <div className='itemList p-3 d-flex flex-column justify-content-evenly align-items-center'>
                    <Item product={product} />
                </div>
            ))}
        </ul>
    )
}

export default ItemList