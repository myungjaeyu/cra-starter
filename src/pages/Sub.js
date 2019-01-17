import React, { Component } from 'react'
import './Sub.scss'

import Card from '../components/Card'

export default class extends Component {
    render() {

        const { no } = this.props.match.params

        return (
            <div className='Sub'>
                <h1>Sub pages </h1>

                <Card no={ no } />

            </div>
        )
    }

}