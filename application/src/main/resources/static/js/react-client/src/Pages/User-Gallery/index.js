import React,{useEffect, useState} from "react";

import Axios from "axios";
import ImageComponent from "../../Components/ImageDisplay/ImageComponent";
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


    
    const [userArtState, setUserArtState] = useState({
        artistName: "",
        artTitle: "",
        artDesc: "",
        artUrl: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUserArtState({
            ...userArtState,
            [e.target.name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const artistData = {
            artistName: userArtState.artistName,
            artTitle: userArtState.artTitle,
            artDesc: userArtState.artDesc,
            artUrl: userArtState.artUrl
        };

        
        Axios.post('http://localhost:8080/api/gallery/add-art', artistData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUserArtState(response.data);
        });
    };


    return (
        <div>
            {/* <p className={style.showform}  onClick={() => handleShowForm()}>Show form Add item in Gallery </p> */}
            <div className={style.form__container}>
                {/* String artistName, String artTitle, String artDesc, String artUrl */}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="artistName" value={userArtState.artistName} onChange={handleChange} placeholder='Enter the artist Name' />
                    <input type="text" name="artTitle" value={userArtState.artTitle} onChange={handleChange} placeholder='Enter the art Title' />
                    <textarea name="artDesc" value={userArtState.artDesc} onChange={handleChange} placeholder='Enter the art Description' />
                    <input type="text" name="artUrl" value={userArtState.artUrl} onChange={handleChange} placeholder='Enter the art Url picture' />
                    <button type="submit">Add item in Gallery</button>
                </form>

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