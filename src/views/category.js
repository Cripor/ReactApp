import { Layout } from '../components/Layout';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import {productos} from '../mocks/ItemMock';

const CategoryView = () => {
    const {category} = useParams();
    const categories = productos.filter( product => product.category === category )
    return (
        <Layout>
            <div className="container d-flex">
                {categories.map((product) => (
                    <Item product={product} />
                ))}
            </div>
        </Layout>
    )
}

export default CategoryView;