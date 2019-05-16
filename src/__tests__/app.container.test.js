import AppContainer from '../providers/containers/AppContainer'

describe('AppContainer Tests', () => {

    const app = new AppContainer()


    it('app state - before', () => {

        const state = {
            payload : {
                content : 'unstated'
            },
            title: 'cra-starter'
        }

        expect(app.state).toEqual(expect.objectContaining(state))

    })


    it('setTitle', async () => {

        await app.setTitle('fast-cra-starter')

        expect(app.state.title).toBe('fast-cra-starter')

    })


    it('setPayloadContent', async () => {

        await app.setPayloadContent('immutability-helper')

        expect(app.state.payload.content).toBe('immutability-helper')

    })


    it('app state - after', () => {

        const state = {
            payload : {
                content : 'immutability-helper'
            },
            title: 'fast-cra-starter'
        }

        expect(app.state).toEqual(expect.objectContaining(state))

    })

})