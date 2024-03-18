import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";


export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();
    return (
        <>{
            carrito.length === 0 ?
                <>
                    <h1>Carrito vacío</h1>
                    <button className="text-black px-4 py-2 rounded">
                        <Link to={'/'}>
                            Volver al inicio
                        </Link>
                    </button>
                </>
                :
                <>
                    <div>
                        <ItemList products={carrito} plantilla="ItemCart" />
                        <div>
                            <p>Resumen de la compra: ${totalPrice()}</p>
                            <div className="botones-cart">
                                <button className="text-black px-4 py-2 rounded" onClick={emptyCart}>
                                    Vaciar carrito
                                </button>
                                <button className="text-black px-4 py-2 rounded">
                                    <Link to={'/'}>
                                        Continuar comprando
                                    </Link>
                                </button>
                                <button className="text-black px-4 py-2 rounded">
                                    <Link to={'/checkout'}>
                                        Finalizar Compra
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
        }
        </>
    )
};
