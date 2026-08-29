import React, { useMemo, useState } from 'react'
import FlightCard from './components/FlightCard'

const SAMPLE_FLIGHTS = [
  { id: 1, airline: 'SkyJet', from: 'NYC', to: 'LON', price: 420, duration: 415, stops: 0, depart: '08:30' },
  { id: 2, airline: 'AeroFly', from: 'NYC', to: 'PAR', price: 380, duration: 435, stops: 1, depart: '12:00' },
  { id: 3, airline: 'CloudAir', from: 'LAX', to: 'NYC', price: 200, duration: 300, stops: 0, depart: '09:15' },
  { id: 4, airline: 'SkyJet', from: 'NYC', to: 'LON', price: 500, duration: 390, stops: 0, depart: '19:45' }
]

export default function App() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('price')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let items = SAMPLE_FLIGHTS.filter(f => {
      if (!q) return true
      return (
        f.airline.toLowerCase().includes(q) ||
        f.from.toLowerCase().includes(q) ||
        f.to.toLowerCase().includes(q)
      )
    })

    items.sort((a, b) => (a[sort] || 0) - (b[sort] || 0))
    return items
  }, [query, sort])

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>FlyRank — Simple Flight Browser</h1>
        <p className="subtitle">Search sample flights, sort and inspect details.</p>
      </header>

      <section className="controls">
        <input
          placeholder="Search airline, from, or to (e.g. NYC)"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <label>
          Sort:{' '}
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="price">Price</option>
            <option value="duration">Duration</option>
            <option value="stops">Stops</option>
          </select>
        </label>
      </section>

      <main className="list">
        {filtered.length === 0 ? (
          <div className="empty">No flights match your search.</div>
        ) : (
          filtered.map(f => <FlightCard key={f.id} flight={f} />)
        )}
      </main>

      <footer className="app-footer">Built as assignment demo — open-source example.</footer>
    </div>
  )
}
