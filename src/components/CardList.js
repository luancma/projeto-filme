import React, {Component} from 'react'
import { Card, Row, Button, Col,Icon} from 'antd';
import Movie from './Movie';

class CardList extends Component{
    
constructor(props) {
    super(props);
    this.state = {
        seeMore: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
          seeMore: !state.seeMore
        }));
      }
    
      
    render(){
        return(
            <div>
                <div className='topPopular' style={{width: '100%', height:'100px', backgroundColor: 'black'}}> 
                    <Row type="flex" justify="center">
                        <Col span={4}>
                            <h1 style={{ color: 'white', marginTop: '20px' }}>{this.props.page} </h1>
                        </Col>
                    </Row>
                </div>
                <div style={{padding:'10px'}}>
                    <h2 style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '40px'}}> Most Searched Movies </h2>

                    {this.state.seeMore === false 
                    ?  
                    
                    <div>
                        <Row gutter={16} type="flex" justify="space-around" align="middle">
                        {this.props.movies.slice(0,6).map((movie)=> (
                            <Movie 
                                movie={movie}
                            />
                        ))}
                        </Row>
                        <Row type="flex" justify="center">
                        <Col sm={2}>
                                <Button style={{ marginTop: '10px'}} onClick={this.handleClick}> See more </Button>
                            </Col>
                        </Row>
                    </div>
                    :   
                    <div>
                        <Row gutter={16} type="flex" justify="space-around" align="middle">
                        {this.props.movies.slice(0, 18).map((movie) => (
                            <Movie 
                                movie={movie}
                            />
                        ))}
                        </Row>

                        <Row type="flex" justify="center">
                            <Col sm={2}>
                                <Button style={{ marginTop: '10px'}} onClick={this.handleClick}> See less </Button>
                            </Col>
                        </Row>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
export default CardList;