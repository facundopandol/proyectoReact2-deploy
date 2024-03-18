import React from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
    return (
        <div className="max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md border-4 my-4 card">
            <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
            <h2 className="text-xs font-bold mb-2">{product.title} </h2>
            <p className="text-xs font-bold xs-1">{product.description}</p>
            <p className="text-xl mb-2">Precio: ${product.price}</p>
            <div className="text-center">
                <Link to={`/product/${product.id}`}>
                    <button className="text-black px-4 py-2 rounded-md">
                        Ver producto
                    </button>
                </Link>
            </div>
        </div>
    );
};
