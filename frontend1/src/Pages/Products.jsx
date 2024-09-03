import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Components/BreadCrums/BreadCrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Products = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const products = all_product?.find((e) => e.id === Number(productId));
    return (
        <div>
            <BreadCrum products={products} />
            <ProductDisplay products={products} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}
