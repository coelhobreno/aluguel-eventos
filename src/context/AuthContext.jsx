import { useContext, createContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children, value }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)

export const AuthValue = () => {
    return useContext(AuthContext)
}