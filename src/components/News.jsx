import React, { useState, useEffect } from 'react';

async function fetchNews(category) {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=cd45e3a1a5bc42058c57e60cd5dd5fd6`;
    let pdata = await fetch(url);
    let jdata = await pdata.json();
    return jdata;
}

export default function News(props) {
    const [newsData, setNewsData] = useState(null);
   
    

    useEffect(() => {
        async function loadData() {
           
                const data = await fetchNews(props.category);
                setNewsData(data);
                
            
        }
        loadData();
    }, [props.category]);

    
if (!newsData) return <div>Finding......</div>;

    return (
        <div>
            <h1></h1>
            <h1> </h1>
            {newsData.articles.map((article, index) => (
                <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage} width={"400rem"}/>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}