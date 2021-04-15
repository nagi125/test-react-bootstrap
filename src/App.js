import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component, useState } from 'react'
import { Button } from 'react-bootstrap'

function App() {
  return (
      <React.Fragment>
        <h1 className="bg-primary text-white display-4"></h1>
        <div className="container">
          <h4 className="my-3">Hooks sample</h4>
          <AlertMessage />
          <CardMessage />
        </div>
      </React.Fragment>
  )
}

function AlertMessage() {
  return (
      <React.Fragment>
        <div className="alert alert-primary h5 text-primary">
          This is Alert message!
        </div>
      </React.Fragment>
  )
}

function CardMessage() {
  return (
      <React.Fragment>
        <div className="card p-3 h5 border-primary text-center">
          This is Card Message!
        </div>
      </React.Fragment>
  )
}

function Sample4() {
  const [count, setCount] = useState(0)
  const [flag, setFlag]   = useState(false)

  const clickFunc = () => {
    setCount(count + 1)
  }

  const changeFlag = (e) => {
    setFlag(e.target.checked)
  }

  return (
      <React.Fragment>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4 className="my-3">Hooks sample</h4>
          {flag ?
              <div className="alert alert-primary text-center">
                <p className="h5 mb-3">click: {count} times!</p>
                <div>
                  <button className="btn btn-primary" onClick={clickFunc}>Click me</button>
                </div>
              </div>
              :
              <div className="card p-3 border-primary text-center">
                <p className="h5 mb-3 text-left text-primary">
                  click: {count} times!
                </p>
                <div>
                  <button className="btn btn-primary" onClick={clickFunc}>Click me</button>
                </div>
              </div>
          }
          <div className="form-group h6 text-center pt-3">
            <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
            <label className="form-check-label" htmlFor="check1">Change form style.</label>
          </div>
        </div>
      </React.Fragment>
  )
}

// contextTypeを使ったサンプル
let data = {
  title: 'React-Context',
  message: 'this is sample message.'
}

const SampleContext = React.createContext(data)

class sample3 extends Component {
  render(){
    return(
        <React.Fragment>
          <h1 className="bg-primary text-white display-4">React</h1>
          <div className="container">
            <Title />
            <Message />
          </div>
        </React.Fragment>
    )
  }
}

class Title extends Component {
  static contextType = SampleContext

  render(){
    return (
        <div className="card p-2 my-3">
          <h2>{this.context.title}</h2>
        </div>
    )
  }
}

class Message extends Component {
  static contextType = SampleContext

  render(){
    return (
        <div className="alert alert-primary">
          <p>{this.context.message}</p>
        </div>
    )
  }
}

// Form サンプル
class Sample2 extends Component {
  input = ''

  constructor(props) {
    super(props);

    this.state = {
      title: 'input form',
      message: 'type your name.'
    }

    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doChange(event) {
    this.input = event.target.value
  }

  doSubmit(event) {
    this.setState({
      title: 'send form',
      message: 'Hello, ' + this.input + '!!'
    })
    event.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <p className="card h5 p-3">{this.state.message}</p>
          <div className="alert alert-primary mt-3">
            <form onSubmit={this.doSubmit}>
              <div className="form-group">
                <label htmlFor="hoge">Message:</label>

                {/* requiredで必須 patternで特定パターンのバリデーション */}
                <input id="hoge" type="text" className="form-control"
                       onChange={this.doChange}
                       required pattern="[A-Za-z _,.]+" />
              </div>
              <input type="submit" className="btn btn-primary" value="Click"/>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function Sample1() {
  return (
      <React.Fragment>
        <button className={"btn btn-danger"}>button</button>
        <Button variant={"primary"} className={"mr-2"}>button</Button>
      </React.Fragment>
  );
}

export default App;
