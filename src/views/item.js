import { Layout } from '../components/Layout';
import ItemDetailContainer from '../components/ItemDetailContainer';
import {useParams} from 'react-router-dom';
import {productos} from '../mocks/ItemMock';

const ItemView = () => {
    const {theItem} = useParams();
    const items = productos.filter( product => product.id === theItem )
    return (
        <Layout>
            <div className="container d-flex justify-content-center">
                <ItemDetailContainer itemFromDetail={items} />
            </div>
        </Layout>
    )
}

export default ItemView;