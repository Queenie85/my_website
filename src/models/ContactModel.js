import * as ContactInfoService from '../services/ContactInfoService'

//helper function for setTimeout
const delay = (time) => new Promise((resolve) => {
    setTimeout(resolve, time)
})

export default {
    namespace: 'ContactModel',

    state: {
        submitted: false,
        loading: false,
        name: '',
        companyName: '',
        email: '',
        content: ''
    },

    effects: {
        *fetch({payload}, {call, put, select}) {
            const loading = yield select(state=>state.ContactModel.loading)
            if (loading) return null
            yield put({type: 'loading'})
            const {name, companyName, email, content, resetFields} = payload
            const result = yield call(ContactInfoService.addContactInfo, {name, companyName, email, content})
            yield put({type: 'save'})
            resetFields()
            yield delay(2000) //timeout for submit successful alert
            yield put({type: 'hidePopup'})
        },
    },

    reducers: {
        save(state) {
            return {...state, submitted: true, loading: false}
        },
        loading(state) {
            return {...state, loading: true}
        },
        hidePopup(state) {
            return {...state, submitted: false}
        }
    },
    subscriptions: {
        setup ({dispatch, history}) {
            history.listen((pathname) => {
                console.log(pathname)
            })
        }
    }
}
