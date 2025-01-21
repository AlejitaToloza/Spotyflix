import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { useFavoritosContext } from '../../context/Favoritos';
import styles from './Favoritos.module.css';
import favoritoImg from '../Favoritos/favoritos.png';
function Favoritos() {
    const {favorito} = useFavoritosContext()

    return(
        <>
            <Banner img={favoritoImg} color="#0707090"/>
            <section className = {styles.container}>
                {favorito.map(fav => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>
    );
}

export default Favoritos;