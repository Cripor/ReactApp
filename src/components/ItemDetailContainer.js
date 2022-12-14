import { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

/* const db = getFirestore();
const itemsCollection = collection(db, "productos");
getDocs(itemsCollection).then((snapshot)=> {
    const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    setProducts(products);
})
 */
const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        const database = getFirestore();
        const itemCollection = collection(database, "productos");
        getDocs(itemCollection).then((snapshot)=> {
            const productosdb = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            const itemDbFiltered = productosdb.find((item) => item.id == id);
            setItem(itemDbFiltered);
        })
    })

    if (!item) {
        return <div className="d-flex justify-content-center mt-5 min-vh-100">
            <TailSpin
                height="80"
                width="80"
                color="#5bc0de"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>;
    }

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer