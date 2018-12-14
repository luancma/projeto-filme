import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { BackTop, Row,Col, Progress, Icon} from 'antd';
import Movie from './Movie';

class MovieDetails extends Component {

    state = {
        details: [],
        companies: [],
        genres: [],
        recommendations: [],
        videos: [],
        id: this.props.id 
    }

    

    componentDidMount() {
        this.getDetails(this.state.id);
    }

      
    getDetails = (value) => {
        fetch(`https://api.themoviedb.org/3/movie/${value}?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    details: result,
                    genres: result.genres,
                    companies: result.production_companies,
                });
            }
        )
        .then(
            this.getRecom(value),
            this.getViedeos(value)
        )
    }

    getRecom = (value) => {
        fetch(`https://api.themoviedb.org/3/movie/${value}/recommendations?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US&page=1`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                recommendations: result.results
            });
            }
        )
    }

    getViedeos = (value) => {
        fetch(`https://api.themoviedb.org/3/movie/${value}/videos?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                videos: result.results
            });
            }
        )
    }

    updateId = (value) => {
    this.setState(() => ({
        id:value
    }))
    return this.getDetails(value)
    }
    
    render(){
        const details = this.state.details 

        return(
            <div>
                <div className='topPopular' style={{width: '100%', height:'100px', backgroundColor: 'black'}}> 
                    <Row type="flex" justify="center">
                        <Col>
                            <h1 style={{ color: 'white', marginTop: '20px' }}>{this.props.page} </h1>
                        </Col>
                    </Row>
                </div>
                
                <div className='movieInfo'>
                        <Col lg={6} md={24} xs={24} style={{ textAlign:'justify'}}>
                            <img className='imgLogo' src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}/>
                            
                            <div className='detailsList'>
                                <Progress percent={(details.vote_average)*10} size="small" />
                                <span className='studio'>Studios :</span>
                                {this.state.companies.map((companie) => (
                                    <li key={companie.id}>
                                        {companie.name}
                                    </li>
                                ))} 
                            </div>
                        </Col>

                        <Col lg={{ span: 16, offset: 2 }} md={24} xs={24}>
                            <h2>{details.title}</h2>
                            <h4>{details.tagline}</h4>
                            <p>{details.overview}</p>

                            <div className='movieInfoBot' style={{ textAlign: 'center', marginTop: '30px'}}>
                            
                            <h4> Trailler </h4>
                            {this.state.videos.slice(0,1).map((video) => (
                                <iframe key={video.id} className='video' width="520" height="315"
                                    src={`https://www.youtube.com/embed/${video.key}?controls=0`}>
                                </iframe>  
                            ))}
                                <p> You can acess this link for more information about the movie : </p>
                                <p> <a href={details.homepage}>{details.homepage}</a></p>
                            </div>
                        </Col>
                </div>

                <div className='similarMovies' style={{ marginTop: '50px'}}>
                    <h3>Similar Movies</h3>
                    <Row gutter={16} type="flex" justify="space-around" align="middle">
                    {this.state.recommendations.slice(0,6).map((recon) => (
                        <Link 
                            to={`/details/${recon.id}`}  
                            onClick={() => this.updateId(recon.id)}>
                                <Movie movie={recon} />
                        </Link> 
                    ))}
                    </Row>
                </div>

                <div>
                    <BackTop />
                </div>
            </div>
        )
    }
}
export default MovieDetails

