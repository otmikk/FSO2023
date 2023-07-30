const Header = (props) => {
  //console.log(props)
  return ( <h1>{props.name}</h1> )
}

const Part = (props) => {
  //console.log(props)
  return (<p>{props.title} {props.num_of_exercises}</p>)
}

const Content = (props) => {
  //console.log(props)
  return (
    <>
      < Part title = {props.parts[0].name} num_of_exercises = {props.parts[0].exercises} />
      < Part title = {props.parts[1].name} num_of_exercises = {props.parts[1].exercises} />
      < Part title = {props.parts[2].name} num_of_exercises = {props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (<p>Number of exercises {
      props.parts[0].exercises + 
      props.parts[1].exercises + 
      props.parts[2].exercises
    }</p>)
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      < Header name = {course} />
      < Content parts = {parts} />
      < Total parts = {parts}/>
    </div>
  )
}

export default App