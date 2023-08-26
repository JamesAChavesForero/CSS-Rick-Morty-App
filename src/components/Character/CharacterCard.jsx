import React from 'react'
import { useFavorites } from "../../context";
import './CharacterCard.css'
import add from '../../assets/add.svg'
import remove from '../../assets/remove.svg'

export default function CharacterCard({ props }) {
  let { id, name, status, species, image, location, gender, episode, type, created } = props
  const [favorites, dispatchFavorites] = useFavorites();

  const addFavorite = (character) => {
    dispatchFavorites({
      type: 'ADD_FAVORITE',
      payload: character
    })
  };
  const removeFavorite = (character) => {
    dispatchFavorites({
      type: 'REMOVE_FAVORITE',
      payload: character
    });
  };

  return (
    <div className='shadow'>
      <article key={id} className='character-card'>
        <h2>{(name.length > 12) ? name.substring(0, 19) + ".." : name}</h2>
        <div>
          <img src={image} alt={name} />
          <h5 className={status === 'Alive' ? 'alive' : 'dead'}>{status === 'unknown' ? '' : status}</h5>
        </div>
        <span>
          Episode : {episode[0].split('/').pop()}
          <br />
          Specie : {type ? type : species}
          <br />
          Gender : {gender}
          <br />
          From : {location.name.split(' ')[0] === 'Earth' ? 'Earth' : location.name}
          <br />
          created : {created.split('T')[0]}
        </span>
        {
          favorites.includes(id) ?
            <button onClick={() => removeFavorite(props)}> <img src={remove} alt='remove from favs' /> Remove
            </button>
            : <button onClick={() => addFavorite(props)}> <img src={add} alt='add to favs' /> Add </button>
        }
      </article>
    </div>
  )
}
