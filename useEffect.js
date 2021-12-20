import React, { useEffect, useState} from 'react'

const useEffectExample = () =>{
  const [state, setState] =  useState(true);

  useEffect(()=>{
    document.title = `Current state is ${state}`;
  });

  useEffect(()=>{
    return() => {
    console.log('cleaning up...');
    }
  },[]);

  return(
    <div>
      <p> Current State : {state} </p>
      <button onClick = {()=> setState(!state)}>toggle </button>
      </div>
  );
}

export default useEffectExample;