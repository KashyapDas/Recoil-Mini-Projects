import React from 'react'
import Rendered from './Rendered'
import Buttons from './Buttons'
import { RecoilRoot } from 'recoil'

function Counter() {
  return (
    <div>
      <RecoilRoot>
      <Rendered />
      <Buttons />
      </RecoilRoot>
    </div>
  )
}

export default Counter
