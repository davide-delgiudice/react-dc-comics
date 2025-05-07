import React from 'react'
import ComicCard from './ComicCard'
import comics from '../../comics'

const ListComics = () => {

  return (
  <>
    <div className='card-container'>
        {comics.map((comic) => (
            <ComicCard key={`comic-${comic.id}`} thumb={comic.thumb} series={comic.series} />
        ))}
    </div>
  </>

  )
}

export default ListComics