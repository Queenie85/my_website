import styles from './EducationBackground.css'
import {List, Typography, BackTop} from 'antd'

export default function educationInfo() {
    let _bachelorCourseList = []
    let _pmCourseList = []

    bachelorCourses.forEach((course, index) => {
        _bachelorCourseList.push(
            <List.Item key={index} className={styles.courseFont}>
                {course}
            </List.Item>
        )
    })

    pmCourses.forEach((course, index) => {
        _pmCourseList.push(
            <List.Item key={index} className={styles.courseFont}>
                {course}
            </List.Item>
        )
    })
    return (
        <div className={styles.outerContainer}>
            <Typography className={styles.titleContainer}>
                <Typography.Title>
                    Education Background
                </Typography.Title>
            </Typography>
            <div>
                <div>
                    <h1>HBSc., University of Toronto, ON</h1>
                    <p className={styles.normal}>
                        Major in Computer Science and Statistics
                    </p>
                    <p className={styles.normal}>September,2015 - June,2019</p>
                    <br/>
                    <p className={styles.normal}>
                        Address: 27 Kings College Circle
                        Toronto, Ontario, Canada M5S 1A1
                    </p>
                </div>
                <List bordered
                      className={styles.listContainer}>
                    <List.Item>
                        <h3>Courses Taken:</h3>
                    </List.Item>
                    {_bachelorCourseList}
                </List>
            </div>

            <div className={styles.pmListOuterContainer}>
                <div>
                    <h1>Graduate Certificate, Centennial College, ON</h1>
                    <p className={styles.normal}>Project Management</p>
                    <p className={styles.normal}>September,2019 - April,2020</p>
                    <br/>
                    <p className={styles.normal}>
                        Address: 941 Progress Ave,
                        Scarborough, Ontario, Canada M1G 3T8
                    </p>
                </div>
                <List bordered
                      className={styles.listContainer}>
                    <List.Item>
                        <h1>Courses Taken:</h1>
                    </List.Item>
                    {_pmCourseList}
                </List>
            </div>
            <BackTop />
        </div>
    )
}

const bachelorCourses = [
    "CSC428: Human-Computer Interaction",
    "CSC373: Algorithm Design, Analysis and Complexity",
    "CSC343: Introduction to Databases (PostgreSQL)",
    "CSC318: The Design of Interactive Computational Media",
    "CSC309: Programming on the Web (Javascript)",
    "CSC300: Computers and Society",
    "CSC263: Data Structures and Analysis",
    "CSC258: Computer Organization (Verilog)",
    "CSC209: Software Tools and Systems Programming (C)",
    "CSC207: Software Design (Java)",
    "STA457: Introduction to Time Series",
    "STA355: Theory of Statistical Practice (R)",
]

const pmCourses = [
    "PMGT731: Project Quality Management",
    "PMGT730: Project Risk Management",
    "PMGT728: International Project Management and Professional Responsibilities",
    "PMGT727: Project Estimation and Cost Management",
    "PMGT724: Procurement and Contract Management",
    "PMGT721: Project Planning and Scheduling",
    "PMGT707: Business Analysis",
    "PMGT702: Project Leadership",
    "PMGT701: Fundamentals of Project Management",
]
