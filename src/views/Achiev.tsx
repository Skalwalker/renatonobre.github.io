import React from 'react';
import '../assets/css/sidebar.css';
import Background from '../components/shared/Background'
import AchievCard from '../components/achievements/AchievCard'
import AchievDesc from '../components/achievements/AchievDesc'
import { Col, Row, Container } from 'react-bootstrap';
import { achievs } from '../content/Achiev'

type MyProps = { };
type MyState = { isShown: boolean, desc: string, title: string, date: string };

class Acheiv extends React.Component<MyProps, MyState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      isShown: false,
      desc: 'Hover over an Achievement to show description',
      title: '',
      date: '',
    };
  }

  setIsShown = (value: boolean, title:string, date: string, desc: string) => {
    this.setState({
      isShown: value,
      title: title,
      date: date,
      desc: desc
    })
  }

  render() {
    return (
      <Background>
        <Container fluid style={{height: '92vh'}}>
          <Row className='h-100'>
            <Col lg={3} md={12} sm={12} className="text-center my-auto pt-4 pb-4 position-lg-static" style={{position: 'fixed', zIndex: 1}}>
              {this.state.isShown && (
                <AchievDesc title={this.state.title} desc={this.state.desc} date={this.state.date}/>
              )}
              {this.state.isShown === false && (
                <h2 className="subtitle_bold" style={{fontSize:'32px', color: '#FFFFFF'}}>Hover over an Achievement <br/>to show description</h2>
              )}
            </Col>
            <Col lg={9} md={12} sm={12} className="my-auto">
                <Row>
                  {achievs.map((achiev, index) => {
                    return (
                      <Col
                        onMouseEnter={() => this.setIsShown(true,
                          achiev.title, achiev.earned, achiev.desc)}
                        onMouseLeave={() => this.setIsShown(false, '', '', '')}>
                        <AchievCard title={achiev.title} date={achiev.earned} img={achiev.img} locked={achiev.locked}/>
                      </Col>
                    )
                  })}
                </Row>
            </Col>
          </Row>
        </Container>
      </Background>
    )
  }
}

export default Acheiv;
