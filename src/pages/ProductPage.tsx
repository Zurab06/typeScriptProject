import React from 'react'
import { Loader } from '../components/Loader';
import { Product } from '../components/Product';
import { Error } from '../components/Error'
import { useProducts } from '../hooks/products'
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';



export const ProductPage = () => {
  
 
    const { products, loading, error,addProduct } = useProducts()
    const {modal,open,close} = useContext(ModalContext)
     const createHandler = (product:IProduct)=>{
     close()
     addProduct(product)
     }
   
     return (
       <div className="container mx-auto max-w-2xl pt-5">
   
         {loading && <Loader />}
         {error && <Error error={error} />}
         {products.map(product => <Product product={product} key={product.id} />)}
   
         {modal && <Modal title='enter text' onClose={close}>
           <CreateProduct onCreate={createHandler} />
   
         </Modal>
         }  
         <button onClick={open} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6'>+</button>
           </div>
   
   
     );
  
}
