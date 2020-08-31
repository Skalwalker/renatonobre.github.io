import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';


type MyProps = {title: string, date: string};
type MyState = { };

class AchievCard extends React.Component<MyProps, MyState> {

  static defaultProps = {
    title: 'Stranger',
    date: 'Stranger'
  };

  render () {
    return (
        <Card style={{margin:'15px', height:'70px', width: '18rem' }}>
            <Row>
              <Col md={3}>
                <Card.Img variant="top" style={style.cardImgLeft}/>
              </Col>
              <Col>
                <Card.Body style={{padding: '0.5rem'}}>
                    <Card.Title style={{fontSize: '18px'}}>{this.props.title}</Card.Title>
                    <Card.Text style={{fontSize: '12px'}}>{this.props.date}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
        </Card>
    )
  }
}

// AchievCard.

const style = {
  cardImgLeft: {
    height: '70px',
    width: '70px',
    // float: "left"
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 0
  }
}

export default AchievCard;