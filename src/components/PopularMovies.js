import React from 'react'
import { Card, Row, Avatar, Icon, Col} from 'antd';


const { Meta } = Card;

// const IconText = ({ type, text }) => (
//     <span>
//         <Icon type={type} style={{ marginRight: 8 }} />
//         {text}
//     </span>
// );

const PopularMovies = props =>{
    return(  
        <div>
            <Row type="flex" justify="space-around" align="middle">
            {props.movies.map((movie) => (
                <Col ml={{span: 8}} key={movie.id}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />}
                    >
                        <Meta
                            title={movie.title}
                        />
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}
export default PopularMovies;