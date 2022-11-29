import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailsScreen = (props) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/details/${id}`, {
            headers: {
                validatehead: "Samplepgm"
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            throw Error("No Data Found")
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
        <div >
            <h3>DetailsScreen</h3>
            <div className="details-screen container" >
                {data && data.length > 0 && data.map((item, index) => {
                    return (<div className='card-body' key={index}>
                        <div className='row '>
                            <div className='col'>ID: </div>
                            <div className='col text-left'>{item.id}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>NAME: </div>
                            <div className='col text-left'>{item.name}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>VALUE: </div>
                            <div className='col text-left'>{item.value}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>CONFIG: </div>
                            <div className='col text-left'>{item.config}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>STATUS: </div>
                            <div className='col text-left'>{item.status}</div>
                        </div>
                        <div className='row'>
                            <div className='col'>DESCIPTION: </div>
                            <div className='col text-left'>{item.Desc}</div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DetailsScreen;
