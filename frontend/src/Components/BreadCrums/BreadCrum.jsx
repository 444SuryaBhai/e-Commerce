import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const BreadCrum = (props) => {
    const { products } = props;
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {products.category} <img src={arrow_icon} alt="" /> {products.name}
        </div>
    )
}
