import React, { useState } from 'react';

import UserArt from '.';
import axios from 'axios';
import style from './style.module.scss';

const UserSubmmited = ({userSubmmited}) => {

    

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

        axios.post('http://localhost:8080/api/gallery/add-art', artistData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUserArtState(response.data);
        });
        window.location.reload();
    };


    return (
        <div className={style.form__container}>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="artistName" value={UserArt.artistName} onChange={handleChange} placeholder='Enter the artist Name' />
                    <input type="text" name="artTitle" value={UserArt.artTitle} onChange={handleChange} placeholder='Enter the art Title' />
                    <textarea name="artDesc" value={UserArt.artDesc} onChange={handleChange} placeholder='Enter the art Description' />
                    <input type="text" name="artUrl" value={UserArt.artUrl} onChange={handleChange} placeholder='Enter the art Url picture' />
                    <div className={style.centerButton}>
                    <button type="submit">Add item in Gallery</button>

                    </div>
            </form>          
           
        </div>

    );
}

export default UserSubmmited;