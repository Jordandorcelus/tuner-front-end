import React, { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';

const Show = () => {
    const{ id } = useParams();
    const [ songs, setSongs] = useState();
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then(res => res.json())
            .then(res => setSongs(res))
            .catch(err => console.log(err));
    })

    return (
        <div>
            Show Page!
        </div>
    );
};

export default Show;