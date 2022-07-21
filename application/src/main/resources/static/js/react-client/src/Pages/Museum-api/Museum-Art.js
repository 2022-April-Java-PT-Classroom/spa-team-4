import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import style from './style.module.scss';

const Museum = () => {
    const [artWork, setArtWork] = useState(null);
    const [artWorkNumTwo, setArtWorkNumTwo] = useState(null);
    const [loadingOne, setLoadingOne] = useState(true);
    const [loadingTwo, setLoadingTwo] = useState(true);

    const randomNum = Math.floor((Math.random() * 100));

    const randomNum2 = Math.floor((Math.random() * 100));

    useEffect(() => {

        const fetchData = async () => {
            const museumArt = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNum}`);

            setArtWork(museumArt.data);

        };

        if (artWork) {
            setLoadingOne(false);
        }

        const timer = setTimeout(() => {
            !artWork && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [artWork, randomNum]);

    useEffect(() => {

        const fetchData = async () => {
            const museumArt = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNum2}`);
            setArtWorkNumTwo(museumArt.data);
        }
        if (artWorkNumTwo) {
            setLoadingTwo(false);
        }

        const timer = setTimeout(() => {
            !artWorkNumTwo && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [artWorkNumTwo, randomNum2]);


    return (
        loadingOne || loadingTwo ? <h3>Loading Art...</h3> :
            <div className={style.singlePage}>
                <h2 className={style.metroHeader}>The Metropolitan Museum of Art</h2>
                <section className={style.art}>
                    <p>{artWork.title}</p>
                    <p>{artWork.artistDisplayName}</p>
                    <p>{artWork.department}</p>
                    <p>{artWork.objectDate}</p>
                    <p>{artWork.repository}</p>
                    <div className={style.artImg}>
                        <img src={artWork.primaryImage || "data:image/png;base64,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"} alt="" height="500" width="500"></img>
                    </div>
                </section>
                <section className={style.art}>
                    <p>{artWorkNumTwo.title}</p>
                    <p>{artWorkNumTwo.artistDisplayName}</p>
                    <p>{artWorkNumTwo.department}</p>
                    <p>{artWorkNumTwo.objectDate}</p>
                    <p>{artWorkNumTwo.repository}</p>
                    <div className={style.artImg}>
                        <img src={artWorkNumTwo.primaryImage || "data:image/png;base64,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"} alt="" height="500" width="500"></img>
                    </div>
                </section>

            </div>
    );
}

export default Museum;

// import React, {useEffect, useState} from 'react';
// import Axios from 'axios';
// import style from './style.module.scss';

// const Museum = () => {
//     const [artWork, setArtWork] = useState(null);
//     const [loading, setLoading] = useState(true);

    
//     useEffect(() => {

//         const fetchData = async () => {
//             const museumArt = await Axios('https://collectionapi.metmuseum.org/public/collection/v1/objects/537');

//             setArtWork(museumArt.data);
            
//         };

//         if (artWork) {
//             setLoading(false);
//         }

//         const timer = setTimeout(() =>{
//             !artWork && fetchData();
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, [artWork]);

//     return (
//         loading ? <h3>Loading Art...</h3> :
//         <div className={style.singlePage}>
//             <h2 className={style.metroHeader}>The Metropolitan Museum of Art</h2>
//             <section className={style.art}>
//                 <p>{artWork.title}</p>
//                 <p>{artWork.artistDisplayName}</p>
//                 <p>{artWork.department}</p>
//                 <p>{artWork.objectDate}</p>
//                 <p>{artWork.repository}</p>
//                 <div className={style.artImg}>
//                     <img src={artWork.primaryImage} height="500" width="500"></img>
//                 </div>
//             </section> 

//         </div>
//     );
// }

// export default Museum;