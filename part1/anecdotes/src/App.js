import React, { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdote] = useState([
    ['If it hurts, do it more often',0],
    ['Adding manpower to a late software project makes it later!',0],
    ['The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',0],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',0],
    ['Premature optimization is the root of all evil.',0],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',0],
    ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',0]
  ])
   
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => {
    const randSelected = Math.floor(Math.random()*anecdotes.length);
    setSelected(randSelected);
  };

  const voteAnectdote = () => {
    const new_anecdotes = [...anecdotes];
    new_anecdotes[selected][1] += 1;
    setAnecdote(new_anecdotes);
  };

  return (
    <div>
      {anecdotes[selected][0]}<br/>
      has {anecdotes[selected][1]}
      <div>
        <button onClick={voteAnectdote}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>
    </div>
  )
}

export default App