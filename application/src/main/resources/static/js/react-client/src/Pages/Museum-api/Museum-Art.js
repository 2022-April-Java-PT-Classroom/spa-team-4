import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import style from './style.module.scss';

const Museum = () => {
    
    useEffect(() => {
        const fetchData = async () => {
            const museumArt = await Axios("https://collectionapi.metmuseum.org/public/collection/v1/search");
            
            console.log(museumArt.data.collection.items);
        };
    })
}