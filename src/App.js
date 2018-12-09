import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchMovies from './components/SearchMovies';
import { Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';



class App extends Component {
  state = {
    movies: [],
    page: ''
  }

  componentDidMount() {
    this.getPopular();
  }
  getPopular = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US&page=1")
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
      <div style={{ width: '100%' }}>
        <Route exact path="/" render={() => (
          <CardList 
            page={this.state.page='Home page'}
            movies={this.state.movies}
          />
        )}
        />

        <Route exact path="/search" render={() => (
          <SearchMovies
            page ={this.state.page='Search movie'}
          />
        )}
        />

        <Route exact path="/details/:id" render={(props) => (
          <MovieDetails
            movie={props.movie}
            page ={this.state.page='Movie Details'}
          />
        )}
        />
      </div>
    );
  }
}

export default App;
