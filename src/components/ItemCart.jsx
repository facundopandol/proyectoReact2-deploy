import React from "react";
import { useCarritoContext } from "../context/CartContext";
import { useCounter } from "../hooks/useCounter";

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)

    return (
        <div className="producto-carrito">
            <img src={`${product.img}`} alt={`Imagen de ${product.title}`} className="img-producto-carrito" />
            <div className="detalles">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
            </div>
            <div className="botones-cart">

                <button className="text-black px-4 py-2 rounded" onClick={async () => {
                    updateItem(product.id, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="text-black px-4 py-2 rounded" onClick={() => {
                    updateItem(product.id, count + 1)
                    increment()
                }}>
                    +
                </button>
                <p className="text-lg font-semibold">Subtotal: ${product.price * count}</p>
                <button className="bg-red-500 text-white px4 py-2 rounded" onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
