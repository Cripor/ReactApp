import { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'

import { productos } from '../mocks/ItemMock';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) =>
          // Simulation of a call to an api
            setTimeout(() => {
            const itemFiltered = productos.find((item) => item.id == id);
            resolve(itemFiltered);
            }, 2000)
        ).then((data) => setItem(data));
        }, [id]);

    if (!item) {
        return <div className="d-flex justify-content-center mt-5">
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