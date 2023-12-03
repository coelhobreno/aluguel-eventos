import { useState, useEffect } from "react"

export const useFetchProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [cancelled, setCancelled] = useState(false)

    const checkIfCancelled = () => {
        if(cancelled){
            return
        }
    }

    const fetchProducts = async(search) => {

        checkIfCancelled()
        setLoading(true)

        try{

            const resp = await fetch(`https://aluguel-eventos.onrender.com/products?search=${search}`) 

            const data = await resp.json()

            setProducts(data)

            setLoading(false)

        }catch(error){

            setLoading(false)

        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { fetchProducts, products, loading }

}