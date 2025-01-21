import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from "./logo.png"
import HeaderLink from "../HeaderLink/HeaderLink";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoHeader}>
                    <img src={logo} alt="Logo Spotyflix"></img>
                </section>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./Favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header> 
    )
}

export default Header;
