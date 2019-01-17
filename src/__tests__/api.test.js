import Request from '../providers/api'

describe('API Tests', () => {

    const request = new Request()

    it('getUser', () => request.getUser('myungjaeyu').then(e => {

        expect(typeof e.login).toBe('string')
        expect(e.login).toBe('myungjaeyu')

    }))

})