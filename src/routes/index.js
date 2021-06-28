import Header from "../templates/Header"
import Character from "../pages/Character"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"

const routes = {
    "/": Home,
    "/:id": Character,
    "/contact": "Contact"
}

const router = async () => {
    const header = null || document.getElementById("header");
    const contend = null || document.getElementById("contend");

    header.innerHTML = await Header();
}

export default router