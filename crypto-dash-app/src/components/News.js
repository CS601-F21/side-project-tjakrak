import React, {useState, useEffect} from 'react'; //rafce

import { useGetNewsQuery } from '../services/newsApi';

const News = () => {
    const { data: newsList, isFetching } = useGetNewsQuery();

    console.log(newsList);
    if (!newsList?.articles) return 'Loading...'; 

    return (
    <div className="news-card-container">
        {newsList.articles.map((article) => (
            <table className="table-wrapper">
                <tbody>
                    <tr key={article.id} className="tr-wrapper">
                        <th className="th-wrapper"><a href={article.url}><strong>{article.title}</strong></a></th>
                        <td className="td-wrapper">{article.description}</td>
                    </tr>
                </tbody>
            </table>
        ))}
    </div>
    );
}

export default News
