import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input,  List, Card, Avatar, Icon } from 'antd';


const Search = Input.Search;
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

        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        return(
            <div style={{padding: '10px'}}>
                <div> 
                    <Search
                        placeholder="input search text"
                        value={this.state.query}
                        onChange={this.updateMovie}
                        style={{ width: 'auto' }}
                    />
                </div>

                <div>
                    <List
                        itemLayout="vertical"
                        size="medium">

                    {this.state.query.length > 0 && 
                        this.state.movies.map((movie) => (
                            <List.Item 
                                key={movie.id}
                                actions={[
                                    <IconText type="star-o" text={movie.vote_average} />, 
                                    <IconText type="like-o" text={movie.vote_count} />,
                                    <IconText type="calendar" text={movie.release_date} />
                                ]}
                                extra={<img width={180} alt="logo" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}/>}
                            >
                            <List.Item.Meta
                                title={movie.title}
                            />
                                {movie.overview}
                            </List.Item>
                        ))    
                    }
                    </List>
                </div>
            </div>
        )
    }
}
export default SearchMovies