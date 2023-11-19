import { useState } from 'react'
import React, { Component } from 'react'
import Todo from "./components/Todo/Todo.jsx"


export default class App extends React.Component {

  render() {
    const list = [
      {
        id: 1,
        title: `Task 1`
      },
      {
        id: 2,
        title: `Task 2`
      },
      {
        id: 3,
        title: `Task 3`
      },
      {
        id: 4,
        title: `Task 4`
      }
    ]


    return (
        <>
          <Todo list={list}/>
        </>
    )
  }
}


