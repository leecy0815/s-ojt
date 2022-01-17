import { Component } from "react";
import propTypes from "prop-types";
import './Movie.css'
import { Link } from "react-router-dom";

const SUMMARY_MAX_LENGTH = 30;

class Movie extends Component {
    render() {
        const {
            title,
            year,
            summary,
            poster,
            genres,
        } = this.props;

        const summaries = summary.split(' ');
        let _summary = '';
        if (summaries.length >= SUMMARY_MAX_LENGTH) {
            for (let i = 0; i < SUMMARY_MAX_LENGTH; i += 1) {
                i === SUMMARY_MAX_LENGTH - 1
                    ? _summary += `${summaries[i]} ...` 
                    : _summary += `${summaries[i]} `;
            }
        } else {
            _summary = summary;
        }

        return (
            <div className="movie">
                <Link to={{
                    pathname: '/movie-detail',
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres,
                    },
                }}>
                    <img src={poster} alt={title} title={title}/>
                    <div className="movie_data">
                        <h3 className="movie_title">
                            {title}
                        </h3>
                        <h5 className="movie_year">{year}</h5>
                        <ul className="movie_genres">
                            {
                                genres.map((genre, idx) => {
                                    let _genre = '';
                                    if (genres.length === 1) _genre = genre;
                                    idx === genres.length - 1
                                        ? _genre = `${genre}` 
                                        : _genre = `${genre}, `;
                                    return (
                                        <li key={idx} className="movie_genres">
                                            {_genre}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <p className="movie_summary">
                            {_summary}
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;