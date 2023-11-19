import React, {Component} from 'react'
import "./style1.css"

export default class Button extends Component {
    state = {
        classNameButton: "button"
    }

    render () {
        let {title, clickFn} = this.props;
        return (
            <button className={ this.state.classNameButton } onClick={ clickFn }>{ title }</button>
        )
    }
}