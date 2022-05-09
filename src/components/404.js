import React from 'react'
import { Link } from "react-router-dom"
import { PageBody } from '../CSS/404Styles'
const Error = () => {
  return (
    <PageBody>
      <div>
        <p>That page doesn't exist.</p>
        <Link to="/">Return to homepage</Link>
      </div>
    </PageBody>
  )
}

export default Error