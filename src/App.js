import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PopularMovies from './components/PopularMovies';
import SearchMovies from './components/SearchMovies';

class App extends Component {

  state = {
    movies: [],
    searchMovie: [],
  }

  componentDidMount() {
    this.getPopular();
    this.seatchMovies();
  }

  getPopular = () => {
    fetch(" https://api.themoviedb.org/3/movie/popular?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=pt-BR&page=1")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          movies: result.results
        });
      }
    )
  }
  seatchMovies = (movie) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          searchMovie: result.results
        });
        console.log(this.state.searchMovie)
      }
    )
  }

  render() {
    return (
      <div className="App">
        <SearchMovies changeMovie={this.seatchMovies} searchMovie={this.state.searchMovie}/>
        <PopularMovies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
