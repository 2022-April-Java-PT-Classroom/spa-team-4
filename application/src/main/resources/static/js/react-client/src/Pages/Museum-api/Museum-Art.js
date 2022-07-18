import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import style from './style.module.scss';

const Museum = () => {
    const [artWork, setArtWork] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        const fetchData = async () => {
            const museumArt = await Axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/40");

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

    return (
        loading ? <h3>Loading Art...</h3> :
        <div>
            <h2>The Metropolitan Museum of Art</h2>
            <section>
                <p>{artWork.department}</p>
                <p>{artWork.title}</p>
                <p>{artWork.artistDisplayName}</p>
                <p>{artWork.objectDate}</p>
                <img src={artWork.primaryImage}></img>
            </section>
        </div>
    );
}

export default Museum;