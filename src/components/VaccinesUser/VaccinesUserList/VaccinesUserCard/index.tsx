import React from 'react'
import { IProductsProps } from '../../../../providers/CartContext/@typesCart'

const VaccinesUserCard= ({ product }: IProductsProps) => {
  return (
    <li className="w-90 bg-slate-50  ml-10 mr-10 mb-10 rounded  outline-gray-600 shadow-2xl" >
        <div>
        <img src={`${product.img}`} alt="Vacinas"  className="w-40 center"/>
        </div>
        <div>
            <h3 className="text-base text-green-600 font-medium text-center">{product.name}</h3>
            <p className='text-green-700 font-medium text-center'>Vacina Reservada</p>   
               <div className='divide-y divide-dashed'></div>     
        </div>

    </li>
  )
}

export default VaccinesUserCard