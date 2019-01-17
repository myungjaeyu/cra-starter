import { Container } from 'unstated'

export default class AppContainer extends Container {

    state = {
        title: 'cra-starter'
    }

    setTitle = title => this.setState({ title : title })

}