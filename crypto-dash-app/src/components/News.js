import React, {useState, useEffect} from 'react'; //rafce

import { useGetNewsQuery } from '../services/newsApi';

const News = () => {
    const { data: newsList, isFetching } = useGetNewsQuery();

    console.log(newsList);
    if (!newsList?.articles) return 'Loading...'; 

    return (
    <div className="news-card-container">
        {newsList.articles.map((article) => (
                
            <tr key={article.id} className="news-wrapper">
                <a href={article.url}>
                <td className="tr-wrapper"><strong>{article.title}</strong></td>
                </a>
                <td className="tr-wrapper">{article.description}</td>
            </tr>

        ))}
    </div>
    );
}

export default News
