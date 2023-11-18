import React, {Component} from "react";
import "./style1.css"

export default class List extends React.Component{

    state={
        list: this.props.list ?this.props.list : [],

    }

    render () {

        return   <ul> {this.state.list.map((el,i)=><li key={i}> {el.title}</li>)}</ul>
    }
}

