import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove, removeAll } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';
import Header from '../layout/Header/Header';
import { decreament, increment } from '../store/quantitySlice';

function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const count = useSelector((state) => state.counter)
    console.log(count)
    let arr = [];


    function handleRemove(id) {
        dispatch(remove(id))
    }
    function handleRemoveAll(product) {
        console.log(product)
        // console.log("removedall")
        dispatch(removeAll(product))
        //   dispatch ({type: 'cart/removeAll', payload: product} )
    }
    {
        products.map((product, id) => {
            arr.push(product)
        })
        function removeDuplicateObjects(arr) {
            let unique_array = arr.filter(function (elem, index, self) {
                return index === self.findIndex(function (t) {
                    return JSON.stringify(t) === JSON.stringify(elem);
                });
            });
            return unique_array;
        }

        let uniqueArr = removeDuplicateObjects(arr);
        console.log(uniqueArr)
        return (
            <div>

                <div className='Cart' >
                    <div className='CartLeft' >
                        <img src='https://bit.ly/3VppGpu' className='CartAdd' alt='' />
                    </div>
                </div>


                <h1 className='cartItems'>Cart Items</h1>
                <button type='button' className='Removeall' onClick={handleRemoveAll} >Remove All</button>

                <div className='productsWrapper'>
                    {uniqueArr.map((item, id) => {
                        console.log(item.id, item.title)
                        return (

                            <div className="Products" key={id}>

                                {/* {console.log(id)}
                        {console.log(uniqueArr)} */}
                                <img src={item.image} />

                                <div className='ProductInformation' >
                                    <Link to={`Checkout/${item.id} `} >
                                        <h4>{item.title}</h4>

                                        {/* <p>{product.description}</p> */}
                                        <div className='ProdcutsGroup'  >
                                            <p className='ProductPrice' >
                                                <small>$</small>
                                                <strong >{item.price * count}</strong>
                                            </p>
                                            {/* For the rating*/}
                                            <div className='ProductRating' >
                                                <p>{item.rating.rate}/5.0</p>
                                            </div>
                                            <p>{item.category}</p>
                                        </div>
                                    </Link>
                                </div>
                                <button className='btn' onClick={() => handleRemove(item.id)} >Remove</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default Cart;
