import React, { useState, useEffect } from 'react';

async function fetchNews(category) {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
     const response = await fetch(url, {
    headers: {
      'X-Api-Key': '29191e36f02143fb83692db2752c26ca', // ✅ Use header instead of URL param
      'Accept': 'application/json'
    }
  });
  
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    // Validate API response structure
    if (!data || !Array.isArray(data.articles)) {

      throw new Error('Invalid API response format');
    }
    
    return data;
  } catch (error) {
    console.error('News API Error:', error);
    return { articles: [] }; // Return empty array to prevent .map() errors
  }
}

export default function News({ category }) {
  const [newsData, setNewsData] = useState({ articles: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function loadData() {
      try {
        setLoading(true);
        const data = await fetchNews(category);
        
        if (isMounted) {
          setNewsData(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setNewsData({ articles: [] });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    loadData();
    
    return () => {
      isMounted = false; // Cleanup to prevent state updates after unmount
    };
  }, [category]);

  if (loading) return <div className="loading-spinner">Loading news...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="news-grid">
      {newsData.articles.length > 0 ? (
        newsData.articles.map((article, index) => (
          <article key={index} className="news-card">
            {article.urlToImage && (
              <img 
                src={article.urlToImage} 
                alt={article.title || 'News image'}
                className="news-image"
                onError={(e) => {
                  e.target.src = 'placeholder-image-url';
                }}
              />
            )}
            <h2>{article.title || 'No title available'}</h2>
            <p>{article.description || 'No description available'}</p>
            {article.url && (
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more"
              >
                Read more
              </a>
            )}
          </article>
        ))
      ) : (
        <div className="no-articles">No articles found for this category</div>
      )}
    </div>
  );
}
