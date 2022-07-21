import React,{useEffect, useState} from "react";

import Axios from "axios";
import ImageComponent from "../../Components/ImageDisplay/ImageComponent";
import UserSubmmited from "./FormTest";
import style from './style.module.scss';

const UserArt = ({userArt}) => {

        const [loadingUserArt, setLoadingUserArt] = useState(true),
        [gallery, setGallery] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/gallery');
            setGallery(result.data);
        }

        if (gallery) {
            setLoadingUserArt(false);
        }

        const timer = setTimeout(() => {
            !gallery && fetchData(); 
        }, 1000);
        return () => clearTimeout(timer);

    }, [gallery]);


    

    return (
        <div>
          
            <div className={style.form__container}>
                
              <UserSubmmited/>

            </div>
            {loadingUserArt ? <h3>Loading Gallery ...</h3> :
                <>
                    <h2>Here Is Our Gallery Selection</h2>
                    <ul>
                        {gallery.map(userArt => (
                            <div key={userArt.id}>
                                <p>Artist Name: {userArt.artistName}</p>
                                <p>Art Description: {userArt.artDesc}</p>
                                <p><ImageComponent url={userArt.artUrl}/></p>
                            </div>
                        ))}
                    </ul>
                </>
            }

        </div>
    );
}

export default UserArt;