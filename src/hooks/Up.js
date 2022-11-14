import { useLocation } from "react-router-dom"
function Up() {
    const dato = useLocation();
    return (ubicacion) => {
        if (dato.pathname === ubicacion) {
            document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            return null
        }
    }
}

export default Up