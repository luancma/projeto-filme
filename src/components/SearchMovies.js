import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input,  List, Icon, Button, Row, Col} from 'antd';
import {Link} from 'react-router-dom'


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
            <div>
                <div className='topPopular' style={{width: '100%', height:'100px', backgroundColor: 'black'}}> 
                    <Row type="flex" justify="center">
                        <Col span={8} offset={2}>
                            <h1 style={{ color: 'white', marginTop: '20px' }}>{this.props.page} </h1>
                        </Col>
                    </Row>
                </div>  
                <Row>
                    <Col span={2} offset={8}>
                        <Search
                            placeholder="input search text"
                            size="large"
                            value={this.state.query}
                            onChange={this.updateMovie}
                            style={{ width: '400px', marginTop: '40px' }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={16} offset={4}>
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
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SearchMovies