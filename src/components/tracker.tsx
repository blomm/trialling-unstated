import React from 'react'
import { Subscribe } from 'unstated'
import { CounterContainer } from './counter'

export const Tracker = () => {
  return (
    <Subscribe to={[CounterContainer]}>
      {(counter: CounterContainer) => (
        <div>
          <span>{counter.state.count}</span>
        </div>
      )}
    </Subscribe>
  )
}
