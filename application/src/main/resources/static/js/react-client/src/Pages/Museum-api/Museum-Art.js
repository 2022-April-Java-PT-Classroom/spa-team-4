import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import style from './style.module.scss';

const Museum = () => {
    const [artMuseum, setImages] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        const fetchData = async () => {
            const museumArt = await Axios("https://collectionapi.metmuseum.org/public/collection/v1/objects/[437133]");

            setImages(museumArt.data.collection.items);
            
        };

        if (artMuseum) {
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !artMuseum && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [artMuseum]);

    return (
        <div>
            <h2>The Metropolitan Museum of Art</h2>
            <section>
                {loading ? <h3>Loading Art...</h3> : <artMuseum images={artMuseum}/>}
            </section>
        </div>
    );
}

export default Museum;