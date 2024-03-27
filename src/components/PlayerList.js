import React from 'react'
import './PlayerList.css'
import data from '../data.json'
const PlayerList = () => {
   
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-12'>
                    <h5>Sports</h5>
                </div>
                <div className='col-12 col-md-12 card-wrapper'>
                    {
                        data && data.map((item) => {
                            return (
                                <div className='card' key={item.id}>
                                    <img src={item.img} className="card-img-top" alt="..." />
                                    <div className='mt-2'>
                                        <h5 className="card-title">{item.title}</h5>
                                        <div className='card-body-color'>
                                            <div>
                                                <p>Total Events</p>
                                                <h6>{item.totalevents} Events</h6>
                                            </div>
                                            <div>
                                                <p>Sport</p>
                                                <h6>{item.sport}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='text-center mt-5'>
                        <button className='btn btn-sm btn-primary px-3'>See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerList