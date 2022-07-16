import React from 'react'

const Yangilik = ({ title, description, image }) => {
  return (
          <div className="news-app">
            <div className='news-item'>
              <img className='news-img' src={image} alt={image} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        )
}

export default Yangilik