import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { productos } from '../mocks/ItemMock';
import ItemList from "./ItemList";
import { TailSpin } from 'react-loader-spinner';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        getDocs(itemsCollection).then((snapshot)=> {
            const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProducts(products);
        })

        if (category == "perifericos") {
            const q = query(itemsCollection, where("category", "==", "perifericos"));
            getDocs(q).then((snapshot)=> {
                    const products = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))

                    setProducts(products);
            })
        } else if (category == "placas") {
            const q = query(itemsCollection, where("category", "==", "placas"));
            getDocs(q).then((snapshot)=> {
                    const products = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))

                    setProducts(products);
            })
        }


/*      const itemRef = doc(db, 'productos', '4dY9h69cZLbx0mEdUWox');
        getDoc(itemRef).then((snapshot)=>{
            if(snapshot.exists()) {
                setProducts([{ id: '4dY9h69cZLbx0mEdUWox',...snapshot.data() }]);
            }
        }); */

    },[category])

/*     useEffect(() => {
        new Promise((resolve) => {
          // Reset the state to show the loading spinner
            setProducts([]);

            // Simulation of a call to an api
            return setTimeout(() => {
            resolve(productos);
            }, 2000);
        }).then((data) => {
            // Execute only in the categories views
            if (category) {
            const categories = data.filter(
                (product) => product.category === category
            );

            // Execute only in the home
            setProducts(categories);
            } else {
            setProducts(data);
            }
        });
    }, [category]); */

    if ( products.length === 0 ) {
        return <div className="d-flex justify-content-center align-items-center mt-5">
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

    return(
        <div>
            <h2>Catalogo</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;