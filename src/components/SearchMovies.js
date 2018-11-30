import React, {Component} from 'react';

class SearchMovies extends Component{
    state = {
        query: [],
        movies: []
    }

    updateMovie = (event) => {
        let value = event.target.value
        this.setState(() => ({
            query:value
        }))
        console.log(value)
        this.findMovie(value)
    }

    findMovie = (value) => {
        if(value.length !== 0 ) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US&query=${value}&page=1&include_adult=false`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                movies: result.results
                });
            })
        }else{
            this.setState({
                movies: [],
                query: '',
            })
        }
    }
    render(){
        return(
        <div>
            <div> 
                <input 
                    value={this.state.query}
                    onChange={this.updateMovie}
                />
            </div>
            <div>
                <ul>
                {this.state.query.length > 0 &&
                    this.state.movies.map((movie) => (
                    <li key={movie.key}> 
                    {movie.title}
                    </li>
                    )
                )}
                </ul>
            </div>
        </div>
        )
    }
}
export default SearchMovies