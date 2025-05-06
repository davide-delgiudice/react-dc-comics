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