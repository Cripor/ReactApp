import { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";

import { productos } from '../mocks/ItemMock'

function ItemDetailContainer() {
    const [item, setItem] = useState(null);

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve( productos[0] ), 2000)).then(
            (data) => setItem(data)
        );
    }, []);

    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <ItemDetail itemFromDetail={item} />
    )
}

export default ItemDetailContainer