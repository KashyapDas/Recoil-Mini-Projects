import React from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../atom/countAtom'

function Rendered() {
    console.log("Rendered Component is rendered...");
  const count = useRecoilValue(countAtom);
  return (
    <div>
        <h1>My count value is {count}</h1>
    </div>
  )
}

export default Rendered
