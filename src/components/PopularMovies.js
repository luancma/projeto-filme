import React from 'react'
import { Card, Row, Button, Icon, Col} from 'antd';



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
        <div className='topPopular' style={{width: '100%', height:'100px', backgroundColor: 'black'}}> 
              <Button icon="search" style={{ marginTop: '30px', marginLeft:'80%' }}>Search</Button>
         </div>
        <div style={{padding:'10px'}}>
            <h2 style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '40px'}}> Most Searched Movies </h2>
            <Row gutter={16} type="flex" justify="space-around" align="middle">
            {props.movies.map((movie) => (
                <Col ml={{span: 8}} key={movie.id}>
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />}
                    >
                        <Meta style={{ textAlign: 'center'}}
                            title={movie.title}
                        />
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
        </div>
    )
}
export default PopularMovies;