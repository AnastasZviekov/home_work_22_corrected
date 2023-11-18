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


                    transferToSecond () {

                        this.setState({
                            firstList:this.state.firstList,
                            secondList:this.state.secondList.unshift(this.state.firstList.slice(0,1))
                        })
                    }

                        render () {
                    return (<>
                    <div className={this.state.containerClassName}>
                    <div className={this.state.classNameList}>
                    <List list={ this.state.firstList }/>
                    <Button  title="Transfer first to right" clickFn={this.transferToSecond}/>
                </div>
                <div className={this.state.classNameList}>
                    <List list={ this.state.secondList }/>
                </div>
                <div className={this.state.classNameList}>
                    <List list={ this.state.thirdList }/>
                </div>
            </div>

        </>);

    }
}

