import React from 'react'
import NavigationBar from '../components/NavigationBar'

//import styles from ant design
import {Layout} from 'antd'

const navItemList = [
    {name: "Home", identifier: "/Home"},
    {name: "Education Background", identifier: "/EducationBackground"},
    {name: "Work Experiences", identifier: "/WorkExperiences"},
    {name: "My Skills", identifier: "/MySkills"},
    {name: "More About Me", identifier: "/MoreAboutMe"},
    {name: "Contact", identifier: "/Contact"}
]

const CommonHeader = props => {
    return (
        <Layout.Header style={{ padding: '0', backgroundColor: "inherit"}}>
            <NavigationBar titleList={navItemList}/>
            {props.children}
        </Layout.Header>
    )
}

export default CommonHeader
