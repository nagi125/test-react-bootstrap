import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component, useState } from 'react'
import { Button } from 'react-bootstrap'

function AlertMessage(props) {
  const data = props.data
  const msg = JSON.stringify(data)

  return (
      <React.Fragment>
        <div className="alert alert-primary h5 text-primary">
          <h5>{msg}</h5>
          <hr />
          <table className="table h6">
            <tbody>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Mail</th>
              <td>{data.mail}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{data.age}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
  )
}

function App() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [age, setAge]   = useState(0)
  const [form, setForm] = useState({
    name: 'no name',
    mail: 'no mail',
    age: 0
  })

  const doChangeName = (event) => {
    setName(event.target.value)
  }

  const doChangeMail = (event) => {
    setMail(event.target.value)
  }

  const doChangeAge = (event) => {
    setAge(event.target.value)
  }

  const doSubmit = (event) => {
    setForm({name: name, mail: mail, age: age})
    event.preventDefault()
  }

  return (
      <React.Fragment>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4 className="my-3">Hooks sample</h4>
          <AlertMessage data={form} setData={setForm} />
          <form onSubmit={doSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" onChange={doChangeName}/>
            </div>
            <div className="form-group">
              <label>Mail:</label>
              <input type="text" className="form-control" onChange={doChangeMail}/>
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="number" className="form-control" onChange={doChangeAge}/>
            </div>
            <input type="submit" className="btn btn-primary" value="Click"/>
          </form>
        </div>
      </React.Fragment>
  )

}



function Sample5() {
  const [alert, setAlert] = useState("This is alert message!")
  const [card, setCard]   = useState("This is alert message!")

  return (
      <React.Fragment>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4 className="my-3">Hooks Sample</h4>
          <Sample5AlertMessage alert={alert} setAlert={setAlert} />
          <Sample5CardMessage card={card} setCard={setCard} />
          <hr />
          <div className="text-right">
            <p>{alert}</p>
            <p>{card}</p>
          </div>
        </div>
      </React.Fragment>
  )

}

function Sample5AlertMessage(props) {
  const data = ["Hello!", "Welcome...", "Good-Bye?"]

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)]
    props.setAlert('message: "' + re + '".')
  }

  return (
      <React.Fragment>
        <div className="alert alert-primary h5 text-primary">
          <h5>{props.alert}</h5>
          <button onClick={actionAlert} className="btn btn-primary">Click me!</button>
        </div>
      </React.Fragment>
  )
}

function Sample5CardMessage(props) {
  const [count, setCount] = useState(0)

  const actionCard = () => {
    setCount(count + 1)
    props.setCard("card counter: " + count + " count.")
  }

  return (
      <React.Fragment>
        <div className="card p-3 border-dark text-center">
          <h5>{props.card}</h5>
          <button onClick={actionCard} className="btn btn-primary">Click me!</button>
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
