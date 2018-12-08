import React from 'react'
import { Card, Col} from 'antd';
import {Link} from 'react-router-dom'


const { Meta } = Card;  


const Movie = props =>{
    {console.log(props.movie.id)}
    
    return(
            <Col ml={{span: 8}} key={props.movie.id}>
                <Link to={'/details'} movie={props.movie} >
                    <Card
                        hoverable
                        style={{ width: 180 }}  
                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} />}>
                        <Meta style={{ textAlign: 'center'}}
                            title={props.movie.title}
                        />
                    </Card>
                </Link>
            </Col>
    )
}
export default Movie                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        