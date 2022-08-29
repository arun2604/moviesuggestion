import React, { useState } from 'react';
import SearchResults from 'react-filter-search';
import data from '../data/data.json';

const Dashboard = () => {
    const [searchWord, setSearchWord] = useState('');

    return (
        <div>
            <div className="dashboard-title">
                <h1 className="text-center text-white">Your Movie List</h1>
                <input type="text" placeholder="Search your movie" className="dashboard-search" 
                    value={searchWord} onChange={e => setSearchWord(e.target.value)} />
            </div>
            <SearchResults
                value={searchWord}
                data={data}
                renderResults={results => (
                    <div  className="movies-container">
                        {results.map((item, index) => (
                            <div key={item.title + index} className="movie-detail-container">
                                <div className="movie-detail-img-container">
                                    <img src={item.medium_cover_image} alt="movie_cover_img" className="movie-detail-img" />
                                </div>
                                <div className="movie-detail-content">
                                    <p className="movie-detail-name">{item.title}</p>
                                    <p className="movie-detail-year">{item.year}</p>
                                    <p className="movie-detail-info"><span className="movie-detail-label">Rating :</span> {item.rating} / 10</p>
                                    <p className="movie-detail-info"><span className="movie-detail-label">Runtime :</span> {item.runtime}</p>
                                    <div className="movie-detail-info">
                                        <span className="movie-detail-label">Genres :</span> 
                                        <p>
                                            {item.genres.map(genre => <span key={index + genre} className="movie-detail-genre">{genre}</span>)}
                                        </p>
                                    </div>
                                    <p className="movie-detail-info"><span className="movie-detail-label">Summary :</span></p> 
                                    <p className="movie-detail-summary">{item.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            />
        </div>
    );
};

export default Dashboard;
