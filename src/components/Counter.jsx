import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = (action) => {
    if (action === 'decrease') {
      setCount(prev => prev - 1)
    } else if (action === 'increase') {
      setCount(prev => prev + 1)
    } else {
      setCount(0)
    }
  }

  const getColor = () => {
    if (count > 0) return 'green'
    if (count < 0) return 'red'
    return '#49a6e9'
  }

  return (
    <main>
      <div className="container">
        <h1>contador</h1>
        <span id="value" style={{ color: getColor(), fontSize: "6rem", fontWeight: "bold" }}>
          {count}
        </span>
        <div className="button-container">
          <button className="btn decrease" onClick={() => handleClick('decrease')}>diminuir</button>
          <button className="btn reset" onClick={() => handleClick('reset')}>zerar</button>
          <button className="btn increase" onClick={() => handleClick('increase')}>aumentar</button>
        </div>
      </div>
    </main>
  )
}
