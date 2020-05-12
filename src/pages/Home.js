import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='home'>
      <button>
        <Link to='/login'>Login</Link>
      </button>
      <button>
        <Link to='dashboard'>Dashboard</Link>
      </button>
      <button>
        <Link to='/users'>users</Link>
      </button>
      <button>
        <Link to='/user'>user</Link>
      </button>
      <button>
        <Link to='/exams'>exams</Link>
      </button>

    </div>
  )
}
