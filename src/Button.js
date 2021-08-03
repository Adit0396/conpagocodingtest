import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let url = `https://swapi.dev/api/people/?page=${count}`
  return (
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <a href={url}>
        </a>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </div>
    </div>
  )
}
export default Counter