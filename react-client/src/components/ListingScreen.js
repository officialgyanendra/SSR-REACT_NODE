import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListingScreen = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api`, {
      headers: {
        validatehead: "Samplepgm"
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      throw Error("Invalid Request")
    }).then(data => {
      setData(data);
    }).catch(error => {
      setError(error.message);
    })
  }, [])

  if (error !== "") {
    return <div>{error}</div>
  }

  return (
    <div>
      <h3>Listing Screen</h3>
      <div className='table-container'>
        <table className="table table-striped">
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 && data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/details/${data.id}`}>
                      {data.id}
                    </Link>
                  </td>
                  <td>{data.name}</td>
                  <td>{data.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListingScreen