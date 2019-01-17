import React from 'react'
import { shallow } from 'enzyme'

import Main from './Main'

describe('Main', () => {

    let component = null

    it('has a React element', async () => {

        component = shallow(<Main />)

    })

    describe('h1', () => {

        it('has a text', () => expect(component.find('h1').text()).toEqual('Main pages'))

    })

})
