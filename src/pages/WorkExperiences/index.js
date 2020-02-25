//import styles
import { Timeline, Icon, Typography, BackTop } from 'antd'
import styles from './WorkExperiences.css'

export default function WorkExperiences() {
  return (
    <div className={styles.outerContainer}>
        <Typography className={styles.titleContainer}>
            <Typography.Title>
                Work Experiences
            </Typography.Title>
        </Typography>
        <Timeline mode="left">
            <Timeline.Item className={styles.fontGeneral}
                       dot={<Icon type="calendar"
                             theme="twoTone"
                             className={styles.dotSize}
                             />}
            >
                2017
            </Timeline.Item>
            <Timeline.Item className={styles.fontGeneral}>
                2017.05 - 09
                <br/>
                <h3>Software Engineer Intern @ Chanmao Inc., Toronto, ON</h3>
                <ul>
                    <li>
                        Collaborated with the UX/UI team to design an efficient,
                        user-centric user interface, shortened loading time by 45%
                    </li>
                    <li>
                        Implemented and optimized the IOS mobile app using
                        React-Native
                    </li>
                    <li>
                        Performed manual testing to maintain the quality standard
                    </li>
                </ul>
            </Timeline.Item>
            <Timeline.Item color="green" className={styles.fontGeneral}>
                2018.05 - 06
                <br/>
                <h3>Full-stack Software Engineer in Training @ Futurera, Toronto, ON</h3>
                <ul>
                    <li>
                        Designed the workflow of core features including user signup,signin, and signout
                    </li>
                    <li>
                        Implemented the UI of core features with HTML5, React.js and React Redux
                    </li>
                    <li>
                        Updated the styles of the UI using CSS3/SCSS and Bootstrap
                    </li>
                    <li>
                        Implemented the business logics of core features using Node.js and MySQL
                    </li>
                </ul>
            </Timeline.Item>
            <Timeline.Item color="red" className={styles.fontGeneral}>
                2018.07 - 12
                <br/>
                <h3>Full-stack Software Engineer in Training @ Futurera, Toronto, ON</h3>
                <ul>
                    <li>
                        Developed the frontend, backend, database and other related software development tasks, reduced flashback by 80%
                    </li>
                    <li>
                        Actively participated weekly sprint meetings or other meetings required by the manager
                    </li>
                    <li>
                        Made necessary documentation to ensure the transfer of knowledge
                    </li>
                </ul>
            </Timeline.Item>
            <Timeline.Item
                className={styles.fontGeneral}
                dot={<Icon type="clock-circle-o" className={styles.dotFont}/>}
            >
                Present
            </Timeline.Item>
        </Timeline>
        <BackTop />
    </div>
  )
}
