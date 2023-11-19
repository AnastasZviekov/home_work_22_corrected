import React, {Component} from "react";
import List from "../List/List";
import Button from "../Button/Button.jsx";
import "./style1.css"


export default class Todo extends React.Component {

    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: [],
        classNameList: "div_list",
        containerClassName: "container"
    }
    transferToSecond = () => { if(this.state.firstList.length>0){
        this.setState( {
            secondList: [ this.state.firstList.shift(), ...this.state.secondList ],
        } )};
    };

    transferToFirst = () => { if(this.state.secondList.length>0){
        this.setState( {
            firstList: [ this.state.secondList.shift(), ...this.state.firstList ],
        } )};
    };

    transferToThird = () => {if(this.state.secondList.length>0){
        this.setState( {
            thirdList: [ this.state.secondList.shift(), ...this.state.thirdList ],
        } )};
    };

    removeLastItem = () => {
        this.setState( {
            thirdList: this.state.thirdList.filter(
                (item, index) => index !== this.state.thirdList.length - 1
            ),
        } );
    };

    render () {
        return (<>
            <div className={ this.state.containerClassName }>
                <div className={ this.state.classNameList }>
                    <List list={ this.state.firstList }/>
                    <Button title="Transfer first to right" clickFn={ this.transferToSecond.bind( this ) }/>
                </div>
                <div className={ this.state.classNameList }>
                    <List list={ this.state.secondList }/>
                    <Button title="Transfer first to left" clickFn={ this.transferToFirst.bind( this ) }/>
                    <Button title="Transfer first to right" clickFn={ this.transferToThird.bind( this ) }/>
                </div>
                <div className={ this.state.classNameList }>
                    <List list={ this.state.thirdList }/>
                    <Button title="Remove last item" clickFn={ this.removeLastItem.bind( this ) }/>
                </div>
            </div>

        </>);
    }
}



