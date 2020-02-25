import React, { Component } from 'react'

//import styles
import { Row, Col, Typography, BackTop } from 'antd'
import styles from './MoreAboutMe.css'

import AdultCat from '../../assets/AdultCat.jpg'
import MITNight from '../../assets/MITNight.jpg'
import Dog0 from '../../assets/Dog0.jpg'
import Dog1 from '../../assets/Dog1.jpeg'
import Vancouver from '../../assets/Vancouver.jpeg'
import Cat0 from '../../assets/Cat0.jpg'
import Cat1 from '../../assets/Cat1.jpg'
import Montreal from '../../assets/Montreal.jpg'
import Montreal0 from '../../assets/Montreal0.jpg'
import Montreal1 from '../../assets/Montreal1.jpeg'
import Dinner from '../../assets/Dinner.jpg'
import Graduation0 from '../../assets/Graduation0.jpg'
import Graduation1 from '../../assets/Graduation1.jpg'
import London0 from '../../assets/London0.jpg'
import London1 from '../../assets/London1.jpg'
import London2 from '../../assets/London2.jpg'
import London3 from '../../assets/London3.jpg'
import Scotland0 from '../../assets/Scotland0.jpg'
import Scotland1 from '../../assets/Scotland1.jpg'
import Scotland2 from '../../assets/Scotland2.jpg'
import Horse from '../../assets/Horse.jpg'
import Cancun from '../../assets/Cancun.jpeg'
import Cancun0 from '../../assets/Cancun0.jpg'
import NewYork from '../../assets/NewYork.jpg'

const photoList = [
    AdultCat,
    MITNight,
    Dinner,
    Montreal0,
    Dog0,
    Dog1,
    Vancouver,
    Cat0,
    Montreal,
    London2,
    Graduation0,
    Graduation1,
    London0,
    London1,
    London3,
    Scotland0,
    Scotland1,
    Scotland2,
    Horse,
    Cancun,
    NewYork,
    Cat1,
    Montreal1,
    Cancun0,
]

class MoreAboutMe extends Component {
    render () {
        let _photoList = []

        photoList.forEach((photo, index) => {
            _photoList.push(
                <Col xs={24} sm={12} md={4} lg={4} key={index}>
                    <img style={{maxWidth: "100%"}} alt="cat" src={photo} />
                </Col>
            )
        })
        return (
            <Row>
                <Typography style={{margin: "5% 0 5% 0", textAlign: "center"}}>
                    <Typography.Title>
                        More About Me
                    </Typography.Title>
                </Typography>
                <Row type="flex" style={{margin: "5%", height: "auto"}}>
                    {_photoList}
                </Row>
                <BackTop />
            </Row>
        )
    }
}

export default MoreAboutMe
