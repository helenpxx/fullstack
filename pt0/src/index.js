import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part='Fundamentals of React' exercise={10} />
      <Part part='Using props to pass data' exercise={7} />
      <Part part='State of a component' exercise={14} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
    <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
    <p>Number of exercises {props.number}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return(
    <div>
      <Header course={course}/>
      <Content/>
      <Total number={exercise1+exercise2+exercise3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
