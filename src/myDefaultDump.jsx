// The old default jsx format file


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Paul  x  Amaka </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         This is defientely my first React job here
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// The default CSS file

// #root {
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// }

// p{
// color: bisque;
// }

// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.react:hover {
//   filter: drop-shadow(0 0 2em #61dafbaa);
// }

// @keyframes logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// @media (prefers-reduced-motion: no-preference) {
//   a:nth-of-type(2) .logo {
//     animation: logo-spin infinite 20s linear;
//   }
// }

// .card {
//   padding: 2em;
// }

// .read-the-docs {
//   color: #888;
// }
