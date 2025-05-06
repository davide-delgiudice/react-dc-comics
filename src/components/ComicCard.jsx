import React from 'react'

function ComicCard(props) {
  return (
    <div className='card-container body-margin'>
        <div className='prod-card'>
            <img src={props.thumb} alt="" />
            <h3 className='color-white'>{props.series}</h3>
        </div>
    </div>
  )
}

export default ComicCard