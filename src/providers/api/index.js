import axios from 'axios'

export default class Request {

    constructor() {
        this.domain = 'https://api.github.com/'
    }

    get = url => axios.get(this.domain + url).then(({ data }) => data)

    getUser = id => this.get(`users/${ id } `)

}