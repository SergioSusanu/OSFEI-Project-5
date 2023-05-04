import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h2>error page</h2>
      <Link to="/" >
        <Button variant='contained'>Go to home</Button>
      </Link>
    </div>
  )
}

export default Error
