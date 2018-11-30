import React, { Component } from 'react';
import './App.css';
import PopularMovies from './components/PopularMovies';
import SearchMovies from './components/SearchMovies';
import { Route } from "react-router-dom";


class App extends Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    this.getPopular();
  }
  getPopular = () => {
    fetch(" https://api.themoviedb.org/3/movie/popular?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US&page=1")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          movies: result.results
        });
      }
    )
  }
  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => (
        <PopularMovies 
          movies={this.state.movies}
        />
      )}
      />

      <Route exact path="/search" render={() => (
        <SearchMovies/>
      )}
      />

      </div>
    );
  }
}

export default App;
