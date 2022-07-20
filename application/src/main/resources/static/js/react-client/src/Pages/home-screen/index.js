import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import style from './style.module.scss';
import noImage from '../../assets/images/no-image.jpg';



const HomeScreen = () => {
    const  [loadingnasaImage, setLoadingNasaImage] = useState(true),
    [nasaImage, setNasaImage] = useState();
    var searchValues = ['Milky%20Way','Sun','Jupiter','Saturne','Earth','Mercuris','Neptune', 'Europa','Titan','Uranus','Galaxies','Venus','Nebula','Constellation'];
    const x = Math.floor(Math.random() * (searchValues.length-1));
    const searchValue = searchValues[x]; 

    
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`https://images-api.nasa.gov/search?q=${searchValue}`);
            var long = Math.floor(Math.random() * 95);
            var i = long;
            var z;
            const obj = [];
            while(i<long+5){
             z = {id: i, image:result.data.collection.items[i].links[0].href, 
                description:result.data.collection.items[i].data[0].description,
                title:result.data.collection.items[i].data[0].title,
                link:result.data.collection.items[i].href,
                nasaId:result.data.collection.items[i].data[0].nasa_id,
                photographer:result.data.collection.items[i].data[0].photographer};
             obj.push(z); 
             i++;
            }
            setNasaImage(obj);    
            //console.log(result.data);
        }
        //if nasaImage is no longer null loading becomes false
        if (nasaImage) {
            setLoadingNasaImage(false);
        }

        //delay by one second and ONLY fetch when nasaImage are null
        const timer = setTimeout(() => {
            !nasaImage && fetchData(); //if nasaImage is NULL fetch the data 
        }, 1000);
        return () => clearTimeout(timer);

        // eslint-disable-next-line
    }, [nasaImage]);

    
    
    const [artWork, setArtWork] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        var museumIndex = Math.floor(Math.random() * 700001);
    

        const fetchData = async () => {
            const museumArt = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${museumIndex}`);

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


    const [loadingUserArt, setLoadingUserArt] = useState(true),
    [gallery, setGallery] = useState(null);

    var galleryIndex = Math.floor(Math.random() * 2);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/gallery');
            setGallery(result.data[galleryIndex]);
        }

        if (gallery) {
            setLoadingUserArt(false);
        }

        const timer = setTimeout(() => {
            !gallery && fetchData(); 
        }, 1000);
        return () => clearTimeout(timer);

    }, [gallery]);


    if(nasaImage!=null)
    return (
        <div className={style.home}>
            <div className={style.container}>
                <div className = {style.item}>
                    <div style = {{width:"300px"}}>
                        <div className={style.picCtn}>
                            {nasaImage.map(nasaImg => (
                                <div className={style.pic}>
                                    <a href="/nasa-api" key={nasaImg.id}>
                                        <table width='100%' height='300' cellPadding='0' cellSpacing='0'>
                                            <tr>
                                                <td height='275' className={style.img}><img src={nasaImg.image} alt='' title={nasaImg.title} className={style.image} /></td>
                                                <td><p className={style.title}>{nasaImg.title}</p></td>
                                            </tr>
                                        </table>
                                    </a>
                             </div>   
                                
                            ))}
                        </div>
                    </div>
                     
                </div>

                <div className = {style.item}>
                    <a href="/Museum-api">
                        <table width='100%' height='300' cellPadding='0' cellSpacing='0'>
                            <tr>
                                <td height='275' className={style.img}><img src={artWork.primaryImage!="" ? artWork.primaryImage :noImage} className={style.image} /></td>
                                <td><p className={style.title}>{artWork.title}</p></td>
                            </tr>
                        </table>
                    </a>
                </div>

                <div className = {style.item}>
                    <a href="/Museum-api">
                    <table width='100%' height='300' cellPadding='0' cellSpacing='0'>
                            <tr>
                                <td height='275' className={style.img}><img src={gallery.artUrl!="" ? gallery.artUrl :noImage} className={style.image} /></td>
                                <td><p className={style.title}>{gallery.artDesc}</p></td>
                            </tr>
                        </table>  
                    </a>
                </div>
            </div>
        </div>
    );
    
}


export default HomeScreen;