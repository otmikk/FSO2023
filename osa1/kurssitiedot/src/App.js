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
      < Part title = {props.p_title1} num_of_exercises = {props.p_value1} />
      < Part title = {props.p_title2} num_of_exercises = {props.p_value2} />
      < Part title = {props.p_title3} num_of_exercises = {props.p_value3} />
    </>
  )
}

const Total = (props) => {
  return (<p>Number of exercises {props.value1 + props.value2 + props.value3}</p>)
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      < Header name = {course} />
      < Content p_title1 = {part1.name} p_title2 = {part2.name} p_title3 = {part3.name} p_value1 = {part1.exercises} p_value2 = {part2.exercises} p_value3 = {part3.exercises} />
      < Total value1 = {part1.exercises} value2 = {part2.exercises} value3 = {part3.exercises}/>
    </div>
  )
}

export default App