import { Container } from 'unstated'
import immutable from 'immutability-helper'

export default class AppContainer extends Container {

    state = {
        payload : {
            content : 'unstated'
        },
        title: 'cra-starter'
    }

    setTitle = title => this.setState({ title : title })


    setPayloadContent = content => {

        return this.setState(immutable(this.state, {
            payload : {
                content : {
                    $set : content
                }
            }
        }))

    }


}