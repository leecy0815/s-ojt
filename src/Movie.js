import { Component } from "react";
import propTypes from "prop-types";

class Movie extends Component {
    render() {
        const {
            title,
            year,
            summary,
            poster,
        } = this.props;

        return (
            <div class="movie">
                <img src={poster} alt={title} title={title}/>
                <div class="movie_data">
                    <h3 class="movie_title">{title}</h3>
                    <h5 class="movie_year">{year}</h5>
                    <p class="movie_summary">{summary}</p>
                </div>
            </div>
        );
    }
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
};

export default Movie;