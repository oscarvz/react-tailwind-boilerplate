import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => (
  <div className="container mx-auto">
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/some-page">Some other page</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main className="text-center">
      <div>{children}</div>
    </main>

    <footer className="text-center">
      <p>Copyright 2019 &copy; someone</p>
    </footer>
  </div>
)

export default Layout
