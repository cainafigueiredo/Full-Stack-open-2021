import React, { useState } from 'react'

const AnecdoteElem = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.anecdote}<br/>
      has {props.votes} votes
    </div>
  );
}

const App = () => {
  const [anecdotes, setAnecdote] = useState([
    ['If it hurts, do it more often',0],
    ['Adding manpower to a late software project makes it later!',0],
    ['The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',0],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',0],
    ['Premature optimization is the root of all evil.',0],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',0],
    ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',0]
  ]);
   
  const [selected, setSelected] = useState(0);

  const [mostVoted, setMostVoted] = useState(0);

  const nextAnecdote = () => {
    const randSelected = Math.floor(Math.random()*anecdotes.length);
    setSelected(randSelected);
  };

  const voteAnecdote = () => {
    const new_anecdotes = [...anecdotes];
    new_anecdotes[selected][1] += 1;
    setAnecdote(new_anecdotes);

    // Updating most voted anecdote
    if (anecdotes[selected][1] > anecdotes[mostVoted][1]) {
      setMostVoted(selected);
    }
  };

  return (
    <div>
      <AnecdoteElem title="Anecdote of the day" anecdote={anecdotes[selected][0]} votes={anecdotes[selected][1]} />
      <div>
        <button onClick={voteAnecdote}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>

      <AnecdoteElem title="Anecdote with most votes" anecdote={anecdotes[mostVoted][0]} votes={anecdotes[mostVoted][1]} />
    </div>
  )
}

export default App