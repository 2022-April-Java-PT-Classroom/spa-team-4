import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import style from './style.module.scss';

const Museum = () => {
    const [artWork, setArtWork] = useState(null);
    const [artWorkNumTwo, setArtWorkNumTwo] = useState(null);
    const [artWorkNumThree, setArtWorkNumThree] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        const fetchData = async () => {
            const museumArt = await Axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/500");

            setArtWork(museumArt.data);
            
        };

        if (artWork) {
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !artWork && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [artWork]);

    useEffect(() => {
        const fetchData = async () => {
            const museumArt = await Axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/527");

            setArtWorkNumTwo(museumArt.data);
        };

        if (artWorkNumTwo) {
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !artWorkNumTwo && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [artWorkNumTwo]);

    useEffect(() => {
        const fetchData = async () => {
            const museumArt = await Axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/40");

            setArtWorkNumThree(museumArt.data);
        };

        if (artWorkNumThree) {
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !artWorkNumThree && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [artWorkNumThree]);
    

    return (
        loading ? <h3>Loading Art...</h3> :
        <div className={style.singlePage}>
            <h2 className={style.metroHeader}>The Metropolitan Museum of Art</h2>
            <section className={style.art}>
                <p>{artWork.department}</p>
                <p>{artWork.title}</p>
                <p>{artWork.artistDisplayName}</p>
                <p>{artWork.objectDate}</p>
                <p>{artWork.repository}</p>
                <div className={style.artImg}>
                <img src={artWork.primaryImage} height="500" width="500"></img>
                </div>
                <p>{artWorkNumTwo.department}</p>
                <p>{artWorkNumTwo.title}</p>
                <p>{artWorkNumTwo.artistDisplayName}</p>
                <p>{artWorkNumTwo.objectDate}</p>
                <p>{artWorkNumTwo.repository}</p>
                <div className={style.artImg}>
                <img src={artWorkNumTwo.primaryImage} height="500" width="500"></img>
                </div>
                <p>{artWorkNumThree.department}</p>
                <p>{artWorkNumThree.title}</p>
                <p>{artWorkNumThree.artistDisplayName}</p>
                <p>{artWorkNumThree.objectDate}</p>
                <p>{artWorkNumThree.repository}</p>
                <div className={style.artImg}>
                <img src={artWorkNumThree.primaryImage} height="500" width="500"></img>
                </div>
            </section>
        </div>
    );
}

export default Museum;