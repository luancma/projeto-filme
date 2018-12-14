import React from 'react'
import { Card, Col} from 'antd';
import {Link} from 'react-router-dom'



const Movie = props =>{
    return(
            <Col ml={{span: 8}} key={props.movie.id}>
                <Link to={`/details/${props.movie.id}`}>
                    <Card
                        style={{ width: 180 }}  
                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} />}>
                    </Card>
                </Link>
            </Col>
    )
}
export default Movie