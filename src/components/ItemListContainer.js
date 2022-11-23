import {useState} from 'react'
import { productos } from '../mocks/ItemMock'
import ItemList from "./ItemList";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const productList = new Promise((resolve)=> 
        setTimeout(()=>{
            resolve(productos);
        },2000))

    productList.then((data) => setProducts(data))

    return(
        <div>
            <h2>Catalogo</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;