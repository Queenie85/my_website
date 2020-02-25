import React, { Component } from 'react'
import { Row, Button, Typography, Icon } from 'antd'

import styles from './Home.css'

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 100)
    }

    render() {
        return (
            <Row className={styles.outerContainer}>
                <Row className={styles.innerContainer}>
                    <Typography.Title style={{color: "white", fontSize: "15vw"}}>Tong Li</Typography.Title>
                    <Typography className={styles.subTitle}>Software Engineer</Typography>
                    <Button ghost
                            className={styles.button}
                            size="large"
                            href="/EducationBackground">
                            CONTINUE
                            <Icon type="right" />
                    </Button>
                </Row>
            </Row>
        )
    }
}
