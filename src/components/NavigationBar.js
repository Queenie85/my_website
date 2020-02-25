import React, { Component } from 'react'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'

//import styles from ant design
import {Menu} from 'antd'

class NavigationBar extends Component {
    render() {
        let _titleList = []
        this.props.titleList.forEach((title) => {
            _titleList.push(
                <Menu.Item
                    key={title.identifier}
                    style={{padding: "0 2% 0 2%"}}
                >
                    <Link to={title.identifier}>
                        {title.name}
                    </Link>
                </Menu.Item>
            )
        })

        return (
            <Menu mode="horizontal"
                  style={{
                      height: "inherit",
                      padding: "0.25%",
                      fontSize: "18px",
                      justifyContent: "center",
                      textAlign: "center"}}
                  selectedKeys={[this.props.history.location.pathname]}
                  defaultSelectedKeys={0}>
                {_titleList}
            </Menu>
        )
    }
}

export default withRouter(NavigationBar)
