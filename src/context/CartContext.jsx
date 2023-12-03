import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [productsCart, setProductsCart] = useState([])
    const [isShowCart, setIsShowCart] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isShowMenu, setIsShowMenu] = useState(false)

    const value = {
        productsCart, 
        setProductsCart, 
        loading, 
        isShowCart,
        setIsShowCart,
        setLoading,
        isShowMenu, 
        setIsShowMenu
    }

    return (
        <CartContext.Provider value={ value }>
            {children}
        </CartContext.Provider>
    )

}

export const useCartContextValues = () => {
    return useContext(CartContext)
}