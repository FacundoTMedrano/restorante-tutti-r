import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Wrapper = ({ children }) => {
    const ubicacion = useLocation()
    useEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [ubicacion.pathname])
    return children
};
export default Wrapper;