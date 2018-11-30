import React from 'react'
import { Card, List, Icon} from 'antd';


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
           <h1>Popular Movies</h1>
            <p>Get a list of the current popular movies on TMDb. This list updates daily.</p>
            <Row gutter={8}>
            {props.movies.map((movie) => (
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                ></Meta>    
                </Card>
            ))}
            </Row>
    )
}
export default PopularMovies;