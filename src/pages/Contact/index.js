import React, {Component} from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'

//import styles from ant design
import {Form, Icon, Input, Button, Typography, Alert} from 'antd'

import styles from './Contact.css'

const {TextArea} = Input

@connect(({ContactModel}) => ({
    ContactModel
}))

class Contact extends Component {
    componentDidMount() {
        this.props.form.validateFields()
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {ContactModel, dispatch} = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {name, companyName, email, content} = values
                dispatch({
                    type: 'ContactModel/fetch',
                    payload: {
                        name,
                        companyName,
                        email,
                        content,
                        resetFields: this.props.form.resetFields,
                    }
                })
            }
        })
    }

    hasErrors = fieldsError => {
        return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    render () {
        const {ContactModel, dispatch} = this.props
        const {submitted} = ContactModel
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched
        } = this.props.form

        const emailError = isFieldTouched('email') && getFieldError('email')

        return (
            <div>
                <Typography className={styles.titleContainer}>
                    <Typography.Title>
                        Contact Me
                    </Typography.Title>
                </Typography>
                <div className={styles.iconLinkContainer}>
                    <Button icon="github"
                            shape="circle"
                            size="large"
                            className={styles.iconLink}
                            onClick={()=>{
                                window.open("https://github.com/Queenie85")
                            }}
                    >
                    </Button>
                    <Button icon="facebook"
                            shape="circle"
                            size="large"
                            className={styles.iconLink}
                            onClick={()=>{window.open("https://www.facebook.com/queenie.li.9849?ref=bookmarks")}}>
                    </Button>
                    <Button icon="linkedin"
                            shape="circle"
                            size="large"
                            className={styles.iconLink}
                            onClick={()=>{window.open("https://www.linkedin.com/in/tongli85/")}}>
                    </Button>
                </div>
                <Form
                    className={styles.formContainer}
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <Form.Item>
                        Name
                        {getFieldDecorator('name')(
                            <Input prefix={
                                <Icon
                                    type="user"
                                    className={styles.formIconColor}
                                />}
                                placeholder="Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        Company Name
                        {getFieldDecorator('companyName')(
                            <Input
                                prefix={
                                    <Icon
                                        type="home"
                                        className={styles.formIconColor}
                                    />}
                                placeholder="Company Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={emailError ? 'error' : ''}>
                        Email
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true,
                                message: 'Please provide your email :)'
                            }],
                        })(
                            <Input prefix={
                                <Icon type="mail"
                                      className={styles.formIconColor} />
                                }
                               placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        Content
                        {getFieldDecorator('content')(
                            <TextArea
                                placeholder="Add content here."
                                autoSize={{minRows: 6}}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                            htmlType="submit"
                            disabled={
                                this.hasErrors.bind(this)(getFieldsError())
                            }
                            className={styles.submitButton}
                        >
                            Submit
                        </Button>
                        {submitted ?
                            <Alert
                                className={styles.alertMessage}
                                message="Success!"
                                type="success"
                                showIcon
                            /> : ''}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

Contact = Form.create({})(Contact)

export default Contact
