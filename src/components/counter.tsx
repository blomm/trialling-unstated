import React from 'react'
import { Subscribe, Container } from 'unstated'

type CounterState = {
  count: number
}

export class CounterContainer extends Container<CounterState> {
  state = {
    count: 0,
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }
}

export const Counter = () => {
  return (
    <Subscribe to={[CounterContainer]}>
      {(counter: CounterContainer) => (
        <div>
          <button onClick={() => counter.decrement()}>-</button>
          <span>{counter.state.count}</span>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  )
}
