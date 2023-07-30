const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.title} {props.num_of_exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <>
      < Part title = {props.p_title1} num_of_exercises = {props.p_value1} />
      < Part title = {props.p_title2} num_of_exercises = {props.p_value2} />
      < Part title = {props.p_title3} num_of_exercises = {props.p_value3} />
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
      < Content p_title1 = {part1} p_title2 = {part2} p_title3 = {part3} p_value1 = {exercises1} p_value2 = {exercises2} p_value3 = {exercises3} />
      < Total value1 = {exercises1} value2 = {exercises2} value3 = {exercises3}/>
    </div>
  )
}

export default App