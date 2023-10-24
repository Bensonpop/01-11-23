import React from 'react'
import './Product.css'
const Product = () => {
    return (
        <div className='container'>
            <h1 className='headline'>Product page</h1>

            <form >

                <div className='inputsection'>
                    <label htmlFor="">Product id</label>
                    <input className='section' type='text' />
                </div>

               

                 <div className='inputsection'>
                    <label htmlFor="">Product Name</label>
                    <input className='section' type='text' />
                </div>

                 <div className='inputsection'>
                    <label htmlFor="">Product Detail</label>
                    <input className='section' type='text' />
                </div>


                <div className='inputsection'>
                    <label htmlFor="">Product Quality</label>
                    <input className='section' type='text' />
                </div>


                 <div className='inputsection'>
                    <label htmlFor="">Product price</label>
                    <input className='section' type='text' />
                </div>

                <div >
                <input className='section' type='submit' />
                </div>
                
            </form>
        </div>
    )
}

export default Product
