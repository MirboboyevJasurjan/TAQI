import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
// import { NewsItem } from '.'
// require('dotenv').config({ path: '../../.env' })

import Main from '../../pages/main/Main'
import PageRoute from '../../pages/pageRoutes/PageRoute';
import Yangilik from './Yangilik';


const NewsApi = () => {

  const [articles, setArticles] = useState([])
 
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(`https://62373d82f5f6e28a154abef5.mockapi.io/news`)
      
      setArticles(response)
      console.log(response)
      console.log('response')

    }

    getArticles()
  }, []);

  


  return (
    <>
      {articles.map(article => {
        return (
          <Yangilik
            title={article.title}
            description={article.description}
            image={article.img}
          />
        )
      })}
    </>
  )
}

export default NewsApi


