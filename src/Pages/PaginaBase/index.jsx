import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header/Header";
import FavoritoProvider from "../../context/Favoritos";
import Footer from "../../components/Footer/Footer";

function PaginaBase () {
    return (
        <main>
            <Header/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase;