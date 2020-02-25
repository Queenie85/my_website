import { Progress, Typography, Row, Col } from 'antd'
import styles from './MySkills.css'

const skillList = [
    {name: "Javascript", proficiency: 95},
    {name: "Python", proficiency: 85},
    {name: "Java", proficiency: 80},
    {name: "React.js", proficiency: 85},
    {name: "Node.js", proficiency: 85},
    {name: "MongoDB", proficiency: 80},
    {name: "MySQL", proficiency: 70},
    {name: "C", proficiency: 70},
    {name: "CSS", proficiency: 100},
    {name: "R", proficiency: 70},
]

export default function() {
    let _skillList = []

    skillList.forEach(skill => {
        _skillList.push(
            <Col span={12} style={{textAlign: "center", marginBottom:"3%"}}>
                <Typography.Title level={4} style={{textAlign: "left"}}>
                    {skill.name}
                </Typography.Title>
                <Progress
                    strokeWidth={45}
                    strokeColor={{"0%": "#ffe6f7", "100%": "#b3c6ff"}}
                    percent={skill.proficiency}
                    showInfo={false}
                />
            </Col>
        )
    })

    return (
        <div style={{margin: "5% 12%"}}>
            <Typography style={{margin: "5% 0 5% 0", textAlign: "center"}}>
                <Typography.Title>
                    My Skills
                </Typography.Title>
            </Typography>
            <Row type="flex" justify="center" gutter={[28,16]}>
                {_skillList}
            </Row>
        </div>
    )
}
