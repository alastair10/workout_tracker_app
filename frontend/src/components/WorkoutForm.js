const { useState } = require("react")

const WorkoutForm = () => {
  // create states
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  

  const handleSubmit = async (e) => {
    // prevent default action of refresh (submitting the info)
    e.preventDefault()
    // create dummy workout object
    const workout = {title, load, reps}

    // use fetch api to send post request to post new data
    const response = await fetch('/api/workouts', {
      method: 'POST', 
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // whatever the req comes back with (success or failure) store that json resp
    const json = await response.json()
    // set the error state with 2 if statements
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      // reset fields to add another
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log('new workout added')
    }
  }

  //return a template form
  // updates the state when user inputs
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg): </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Reps: </label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm