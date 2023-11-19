import React, {Component} from "react";
import "./style1.css";

export default class List extends React.Component {
    render () {
        let {list = []} = this.props;
        return (
            <ul>
                { " " }
                { list.map( (el, i) => (
                    <li key={ i }> { el.title }</li>
                ) ) }
            </ul>
        );
    }
}