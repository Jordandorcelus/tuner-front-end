import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    const [songs, setSongs] = useState([]);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setSongs(res)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div>
            {songs.map((song) => {
                return(
                    <Link to={`/songs/${song.id}`} key={song.id}>{song.name}</Link>
                )
            })}
        </div>
    );
};

export default Index;