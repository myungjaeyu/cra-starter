import React, { Component } from 'react'
import './Sub.scss'

export default class extends Component {
    render() {

        const { no } = this.props.match.params

        return (
            <div className='Sub'>
                <h1>Sub pages { no } </h1>
            </div>
        )
    }

}