import React, {Component} from 'react';

class SearchMovies extends Component{

    state = {
        query: [],
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query : query
        }))

        if(this.state.query !== ''){
            this.props.changeMovie(this.state.query)
            console.log(this.state.query)
        }  
    }
    render(){
        return(
            <div> 
                <div>
                <input
                    type='text'
                    placeholder='Digite o nome do filme'
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                />
                </div>

                <div>
                    <ol>
                    {this.props.searchMovie.map((movie) => (
                        <li key={movie.id} className='contact-list-item'>
                        <div className='contact-details'>
                            <p>{movie.id}</p>
                        </div>
                        </li>
                    ))}
                    </ol>
                </div>

            </div> 
        )
    }
}
export default SearchMovies