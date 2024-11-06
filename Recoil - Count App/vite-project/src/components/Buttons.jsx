import React from 'react'
import { useSetRecoilState } from 'recoil';
import { countAtom } from '../atom/countAtom';

function Buttons() {
    console.log("Button Component is Rendered...");
    const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button> <br /> <br />
      <button onClick={()=>setCount(prevCount => prevCount-1)}>Decrement</button>
    </div>
  )
}

export default Buttons
