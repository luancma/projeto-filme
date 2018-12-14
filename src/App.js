import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchMovies from './components/SearchMovies';
import { Route, Link } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import { Menu, Icon } from 'antd';


class App extends Component {
  state = {
    movies: [],
    page: '',
    current: 'home'
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

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
        <Link to='/'>
          <Icon type="home" />Home
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Link to='/search'>
            <Icon type="search" />Search Movie
          </Link>
        </Menu.Item>
      </Menu>


      <Route exact path="/" render={() => (
          <CardList 
            page={this.setState.page='Home page'}
            movies={this.state.movies}
          />
        )}
        />

        <Route exact path="/search" render={() => (
          <SearchMovies
            page ={this.setState.page='Search movie'}
          />
        )}
        />

        <Route exact path="/details/:id" render={(props) => (
          <MovieDetails
            id={props.match.params.id}
            page={this.setState.page='Movie Details'}

          />
        )}
        />
      </div>
    );
  }
}

export default App;
