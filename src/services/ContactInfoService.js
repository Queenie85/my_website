import fetch from 'dva/fetch'

export function addContactInfo({ name, companyName, email, content }) {
    const url = `http://localhost:3000/contactInfo`
    const data = {
        name: name,
        companyName: companyName,
        email: email,
        content: content,
    }
    let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(url, options)
        .then((res) => {
            res.json()
        }).catch((error) => { throw error })
}
