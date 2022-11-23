import Item from './Item'

function ItemList( {products} ){
    return(
        <ul className="list-unstyled d-flex justify-content-center mt-5">
        {products.map((product) => (
            <div className="d-flex flex-column justify-content-evenly align-items-center">
                <Item product={product}/>
                <button className="w-25 mt-1 rounded bg-primary">Añadir a carrito</button>
            </div>
        ))}
        </ul>
    )
}

export default ItemList