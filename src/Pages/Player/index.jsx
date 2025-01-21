import Banner from "../../components/Banner";
import styles from "./Player.module.css";
import Titulo from "../../components/Titulo";
import { useParams } from "react-router-dom";
import videos from "../../data/db.json";
import NotFound from "../NotFound";
import playerImg from "./player.png";

function Player() {
    const { id } = useParams();
    const video = videos.find(video => video.id === Number(id));

    if (!video) return <NotFound />;

    // Modificar la URL para incrustar el video de YouTube
    const embedUrl = video.link.replace("watch?v=", "embed/");

    return (
        <>
            <Banner img={playerImg} color="#0707090" />
            <Titulo>
                <h1>{video.titulo}</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width = "100%"
                    height = "100%"
                    src = {embedUrl}
                    title = {video.titulo}
                    frameBorder = "0"
                    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    );
}

export default Player;
