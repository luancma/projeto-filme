import React,{Component} from 'react'

class MovieDetails extends Component {
    state = {
        movies: [],
        details: []
    }

    componentDidMount() {
        this.getDetails();
    }
      
      getDetails = () => {
        const id = this.props.id
        console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US`)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=baa0044b3ccf7fd3d2cf05a750f8e4c1&language=en-US`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              details: result
            });
          }
        )
      }
    
    render(){
        return(
            <div>
                <p>{this.state.details.title}</p>
                {console.log(this.state.details.title)}
                {console.log(this.state.details.genres.map((gen) => gen.length))}
            </div>
        )
    }
}
export default MovieDetails