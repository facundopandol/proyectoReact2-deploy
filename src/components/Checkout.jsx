import React, { useRef } from "react";
import { useCarritoContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js";

export const Checkout = () => {
    const formRef = useRef();
    const navigate = useNavigate(); // devuelve la locación actual de mi componente (ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current); // formulario HTML a objeto iterator
        const cliente = Object.fromEntries(datForm); // objeto iterator a objeto simple

        //modificar stock
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) // elimino el producto del carrito al no tener stock suficiente
                }
            })
        })

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar el envío`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })
    };
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className="text-black px-4 py-2 rounded">
                                Volver al inicio
                            </button>
                        </Link>
                    </>
                    :
                    <div className="flex justify-center items-center h-screen bg-gray-100">
                        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                            <form action="" onSubmit={handleSubmit} ref={formRef}>
                                <div className="mb-3">
                                    <label className="block text-gray-700 mb-1">Nombre:</label>
                                    <input type="text" className="w-full p-2 border rounded-md" name="nombre" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 mb-1">Apellido:</label>
                                    <input type="text" className="w-full p-2 border rounded-md" name="apellido" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 mb-1">Dirección:</label>
                                    <input type="text" className="w-full p-2 border rounded-md" name="direccion" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 mb-1">DNI:</label>
                                    <input type="text" className="w-full p-2 border rounded-md" name="dni" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 mb-1">Email:</label>
                                    <input type="text" className="w-full p-2 border rounded-md" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 mb-1">Telefono:</label>
                                    <input type="text" className="w-full p-2 border rounded-md" name="telefono" />
                                </div>
                                <button type="submit" className="w-full p-2 bg-blue-500 text-black rounded-md">Confirmar Compra</button>
                            </form>
                        </div>
                    </div>
            }
        </>
    );
}
