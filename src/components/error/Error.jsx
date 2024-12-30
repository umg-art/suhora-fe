import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="mt-5">
     <br /><br /><br /><br /><br />
     <div className="d-flex justify-content-center align-items-center">
      <h1>404 Page not found
        <br />

      <Link className="btn btn-primary mt-2 ml-5" to={'/'}>Back to Home</Link>
      </h1>
      </div>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default Error
