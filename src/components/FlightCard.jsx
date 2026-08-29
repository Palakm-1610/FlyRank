import React from 'react'

export default function FlightCard({ flight }) {
  return (
    <div className="card">
      <div className="card-left">
        <div className="airline">{flight.airline}</div>
        <div className="route">{flight.from} → {flight.to}</div>
      </div>
      <div className="card-right">
        <div className="price">${flight.price}</div>
        <div className="meta">{flight.duration}m • {flight.stops} stops • Departs {flight.depart}</div>
      </div>
    </div>
  )
}
