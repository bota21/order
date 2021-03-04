import Product from '../../components/Product/Product';
import './OrderProducts.css';

const OrderProducts = () => {
    return <div className='OrderProducts'>
        <Product
        image="https://sugarfreelondoner.com/wp-content/uploads/2020/09/keto-focaccia-1200.jpg"
        title='focaccia'
        price='50'
        />
    </div>
}

export default OrderProducts;