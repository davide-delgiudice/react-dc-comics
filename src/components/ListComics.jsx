import React from 'react'
import ComicCard from './ComicCard'
import comics from '../../comics'

const ListComics = () => {

  return (
    <>
    
    <ComicCard 
        thumb={comics[0].thumb}
        series={comics[0].series}
    />
    <ComicCard 
        thumb={comics[1].thumb}
        series={comics[1].series}
    />
    <ComicCard 
        thumb={comics[2].thumb}
        series={comics[2].series}
    />
    <ComicCard 
        thumb={comics[3].thumb}
        series={comics[3].series}
    />
    <ComicCard 
        thumb={comics[4].thumb}
        series={comics[4].series}
    />
    <ComicCard 
        thumb={comics[5].thumb}
        series={comics[5].series}
    />
    <ComicCard 
        thumb={comics[6].thumb}
        series={comics[6].series}
    />
    <ComicCard 
        thumb={comics[7].thumb}
        series={comics[7].series}
    />
    <ComicCard 
        thumb={comics[8].thumb}
        series={comics[8].series}
    />
    <ComicCard 
        thumb={comics[9].thumb}
        series={comics[9].series}
    />
    <ComicCard 
        thumb={comics[10].thumb}
        series={comics[10].series}
    />
    <ComicCard 
        thumb={comics[11].thumb}
        series={comics[11].series}
    />

    </>
  )
}

export default ListComics