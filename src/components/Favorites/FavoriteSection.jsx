import React, {useState, useEffect} from 'react'
import {useFavorites} from "../../context";
import CharacterCard from '../Character/CharacterCard';
import {getFavsCharacters} from '../../api';
import './FavoriteSection.css'

export default function FavoriteSection() {
    const [favsList, setFavsList] = useState([]);
    const [favorites] = useFavorites();

    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await getFavsCharacters(favorites)
            setFavsList(Array.isArray(data) ? data : [data])
        };
        fetchFavorites()
    }, [favorites])


    return (
        <>
            <h1>Favorite Character List</h1>
            <section className='fav-section'>
                {
                favsList ?. map(character => (
                    <CharacterCard props={character}/>
                ))
            } </section>
        </>
    )
}
