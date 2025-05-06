import React from 'react'

function ComicCard(props) {
  return (
    <div className='prod-card'>
        <img className='img-card' src={props.thumb} alt="" />
        <h3 className='color-white'>{props.series}</h3>
    </div>
  )
}

export default ComicCard