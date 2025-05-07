import React from 'react'

function ComicCard(props) {

  return (
    <div className='prod-card'>
        <div className='img-fit'>
            <img className='img-card' src={props.thumb} alt="" />
        </div>
        <div>
            <h3 className='color-white'>{props.series}</h3>
        </div>
    </div>
  )
}

export default ComicCard


// metodo alternativo 1
// let image = props.image;
// let title = props.title;

// metodo alternativo 2
// img src={props.comic.thumb}