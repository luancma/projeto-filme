import React,{Component} from 'react'

class MovieDetails extends Component {
    state = {
        details: [],
    }
    getMovieDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US`)
         .then(res => res.json())
         .then(
             (result) => {
                 this.setState({
                     details: result.results
                 });
             }
         )
     }
    
    render(){
        return(
            <div>  
                <p> Título do filme é : {this.state.details.title} </p>
            </div>
        )
    }
}
export default MovieDetails