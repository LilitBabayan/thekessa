import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, {useState} from 'react';

function Shop() {

    const [products, setProducts] = useState([]);

    axios.get('/products').then((data) => {
        if (data.data.products.length) {
            setProducts(data.data.products)
        }
    })

    return (
        <div>
            <Header/>
            <div className={`container`}>
                <div className={`row flex justify-content-between`}>
                    {products.map((product, index) => {
                        return (
                            <div className={`col-5 my-5`} key={index}>
                                <img src={'/images/products/' + product.images[0].path} className={`img-fluid w-100`}
                                     alt={product.images[0].path}/>
                                <div className={`flex justify-content-between mt-3`}>
                                    <p className={`fw-bold`}>{product.name}</p>
                                    <p className={`fw-bold`}>{product.price} AMD</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Shop
