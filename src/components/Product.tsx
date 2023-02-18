import React, { useState } from "react";
import { IProduct } from "../models";
interface ProductProps {
  product: IProduct;
}
export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClass = ['py-2 px-4 border',btnClassName]
  return (
    <div className="border py-2 px-4  rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <span className="font-bold">{product.price}</span>
      <div>{product.title}</div>
      {details && <div>
        <p>{product.description}</p>
        <p>Rate:<div style={{fontWeight:'bold'}} >{product.rating?.rate}</div></p>
      
      
      </div>}
      <button
      className={btnClass.join(' ')}
      onClick={() => setDetails(prev=>!prev)}>{!details ? 'show more': 'hide'}</button>
    </div>
  );
}
