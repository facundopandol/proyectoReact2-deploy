
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0Dr7srCr4_u6VIMC0MWETBCu_9t23uBo",
    authDomain: "react-js-c32a4.firebaseapp.com",
    projectId: "react-js-c32a4",
    storageBucket: "react-js-c32a4.appspot.com",
    messagingSenderId: "70569488546",
    appId: "1:70569488546:web:bcd5d5958f8248cf1a67fb"
};

const app = initializeApp(firebaseConfig);

// consultar a la BDD

const bdd = getFirestore()

/* CRUD DE BASE DE DATOS
    Create
    Read
    Update
    Delete

*/
const prods = [
    {
        "title": "Sahumerio Vainilla",
        "description": "Aroma a vainilla que ayuda a la concentración y al trabajo.",
        "price": 150,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/1.jpg?alt=media&token=8cc8d1cc-c168-42b3-b1b1-17e76bcbc13a",
        "category": "sahumerio"
    },
    {
        "title": "Sahumerio Canela",
        "description": "Aroma a canela para la inspiraciòn y la alegria.",
        "price": 150,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/2.jpg?alt=media&token=db0b1f6e-45f8-44ab-9c53-56af8045dd5d",
        "category": "sahumerio"
    },
    {
        "title": "Sahumerio Sandalo",
        "description": "Ayuda a las buenas energias y a limpieza del ambiente.",
        "price": 150,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/3.jpg?alt=media&token=d296f288-9be9-40d7-a7dc-097508a8bc3c",
        "category": "sahumerio"
    },
    {
        "title": "Sahumerio Jazmin",
        "description": "Aroma a flores de jazmin que brinda paz y tranquilidad.",
        "price": 150,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/4.jpg?alt=media&token=042c8cdf-82c6-4c94-ba01-a31d9c94cc21",
        "category": "sahumerio"
    },
    {
        "title": "Sahumerio Coco y Vainilla",
        "description": "Aroma a coco con notas de vainilla para la paz interior.",
        "price": 150,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/5.jpg?alt=media&token=d8855f27-ce57-4b50-ade1-88d09273c770",
        "category": "sahumerio"
    },
    {
        "title": "Sahumerio Lavanda",
        "description": "Aroma a flores de lavanda para la armonia y la calma.",
        "price": 150,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/6.jpg?alt=media&token=0ea1076b-ad4e-475e-ac01-92448eb44594",
        "category": "sahumerio"
    },
    {
        "title": "Vela Vainilla",
        "description": "Vela con aroma a vainilla para el trabajo y la claridad mental.",
        "price": 150,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/7.jpg?alt=media&token=f0a92e34-55de-4966-a0b1-f56dcc06af4f",
        "category": "vela"
    },
    {
        "title": "Vela Uva",
        "description": "Vela con aroma a uva para la cordialidad y la templanza.",
        "price": 150,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/8.jpg?alt=media&token=fda8b51f-70a6-481f-a923-738543b3d951",
        "category": "vela"
    },
    {
        "title": "Vela Cedron",
        "description": "Vela con aroma a cedron para limpieza de malas energias.",
        "price": 150,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/9.jpg?alt=media&token=68783f80-0b30-4ea6-8e5b-5dd2900c26e8",
        "category": "vela"
    },
    {
        "title": "Vela Eucalipto",
        "description": "Vela con aroma a eucalipto que transmite paz y tranquilidad.",
        "price": 150,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/10.jpg?alt=media&token=cdbb22b6-abb3-4435-b893-7062e1031634",
        "category": "vela"
    },
    {
        "title": "Vela Bamboo",
        "description": "Vela con aroma al bamboo para las buenas energias y la salud.",
        "price": 150,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/11.jpg?alt=media&token=883b39b9-a913-4e6c-8b9c-1ddd5df71eab",
        "category": "vela"
    },
    {
        "title": "Vela Citronella",
        "description": "Vela con aroma a citronella para atraer armonia y paz.",
        "price": 150,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-js-c32a4.appspot.com/o/12.jpg?alt=media&token=87d34dad-7988-428d-b7e8-0bddbed31c75",
        "category": "vela"
    }

]

//crear productos
export const createProducts = async () => {

    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            description: prod.description,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })
}

//consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar productos

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}


// eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}


//CREATE AND READ Ordenes de compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
const ordenCompra= await addDoc(collection(bdd, "ordenesCompra"), {
    cliente: cliente,
    items: carrito,
    precioTotal: precioTotal,
    fecha: fecha
})

return ordenCompra

}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}