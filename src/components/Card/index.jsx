import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Card.module.css"
import iconFavorito from "./heart_fill.svg"
import iconFavVacio from "./heart.svg"
import { Link } from "react-router-dom";

function Card({id, capa, titulo, link}) {

    const {favorito, agregarFavorito } = useFavoritosContext()
    const isFavorito = favorito.some(fav => fav.id === id)
    const icon = isFavorito ? iconFavorito : iconFavVacio;
    
    return (
        <div className={styles.container}>
            <Link to={link} target="_blank">
            <img src={capa} alt={titulo} className={styles.capa}/>
            </Link>
            <div>
                <Link className={styles.link} to={link} target="_blank">
                <h2>{titulo}</h2>
                </Link>
                <img src={icon}
                    alt="Icono Favorito"
                    className={styles.favorito}
                    onClick={() => agregarFavorito ({id, capa, titulo})}/>
            </div>
        </div>
    )
}

export default Card;