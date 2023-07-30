const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.title} {props.num_of_exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.value1 + props.value2 + props.value3}
      </p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      < Header name = {course} />
      < Content title = {part1} num_of_exercises = {exercises1} />
      < Content title = {part2} num_of_exercises = {exercises2} />
      < Content title = {part3} num_of_exercises = {exercises3} />
      < Total value1 = {exercises1} value2 = {exercises2} value3 = {exercises3}/>
    </div>
  )
}

export default App