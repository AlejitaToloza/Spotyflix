import React from 'react';
import Banner from '../../components/Banner/index.jsx';
import Titulo from '../../components/Titulo/index.jsx';
import videos from "../../data/db.json"
import Card from '../../components/Card/index.jsx';
import styles from "./index.module.css"
import bannerImage from "../../components/Banner/banner.png";

function Inicio() {
    return (
        <>
            <Banner img={bannerImage} color="#154580"/>
            <Titulo>
                <h1>Disfruta de tus videos musicales preferidos</h1>
            </Titulo>

            <section className={styles.container}>
                {videos.map((video)=>{
                    return <Card {...video} key={video.id} />  // Agregar el video a la lista de Card
                })}
            </section>
        </>
    );
}

export default Inicio;