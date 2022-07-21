import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import style from './style.module.scss';
import noImage from '../../assets/images/noimages.jpg';



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
        var museum = [7000, 400000, 450000, 460000, 4500, 4501, 12000]
        var museumIndex = Math.floor(Math.random() * (museum.length));
    

        const fetchData = async () => {
            const museumArt = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${museum[museumIndex]}`);

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
                <div>
                    <h1>Welcome to our Mystery Educator</h1>
                    <p>Our mission here at Jac Enterprises is to educaute our clients and provide
                        great adventures. The Jac Mystery Educator does just that!
                    </p>
                    <p>Have fun exploring our endless images and when you've had enough insperation
                    create your own masterpiece on the "Create Your Own Art" page!
                    </p>
                </div>
                <div className={style.titles}>
                <h2>NASA</h2>
                <h2>  MET</h2>
                <h2>User Gallery</h2>
                </div>
            <div className={style.container}>

                <div className = {style.item}>
                    <div style = {{width:"300px"}}>
                        { loadingnasaImage ? <h3>Loading ...</h3> :
                        <div className={style.picCtn}>
                            {nasaImage.map(nasaImg => (
                                <div className={style.pic}>
                                    <a href="/nasa-api" key={nasaImg.id}>
                                        <table width='100%' height='300' cellPadding='0' cellSpacing='0'>
                                            <tr style={{background:'#000'}}>
                                                <td height='275' className={style.img} style={{background:`url(${nasaImg.image})no-repeat`, backgroundSize: '300px', backgroundPosition:'middle' }}></td>
                                            </tr>
                                            <tr>
                                                <td><p className={style.title}>{nasaImg.title}</p></td>
                                            </tr>
                                        </table>
                                    </a>
                             </div> 
                            ))}
                        </div>
                        }
                    </div>
                
                    
                </div>

                <div className = {style.item}>
                    {loading ? <h3>Loading ...</h3> :
                    <a href="/Museum-api">
                        <table width='100%' height='300' cellPadding='0' cellSpacing='0'>
                            <tr style={{background:'#000'}}>
                                <td height='275' className={style.img} style={{background:`url(${artWork.primaryImage!=="" ? artWork.primaryImage :noImage})no-repeat 0 -30px`, backgroundSize: '320px', backgroundPosition:'top' }}></td>
                            </tr>
                            <tr>
                                <td><p className={style.title}>{artWork.title}</p></td>
                            </tr>
                        </table>
                    </a>
                    }
                </div>

                <div className = {style.item}>
                    {loadingUserArt ?  <h3>Loading ...</h3> :
                    <a href="/User-Gallery">
                        <table width='100%' height='300' cellPadding='0' cellSpacing='0'>
                            <tr style={{background:'#000'}}>
                                <td height='275' className={style.img} style={{background:`url(${gallery.artUrl!=="" ? gallery.artUrl :noImage})no-repeat 0 -30px`, backgroundSize: '320px', backgroundPosition:'center' }}></td>
                            </tr>
                            <tr>
                                 <td><p className={style.title}>{gallery.artDesc}</p></td>
                            </tr>
                        </table>  
                    </a>
                    }
                </div>
            </div>
        </div>
    );
    
}


export default HomeScreen;