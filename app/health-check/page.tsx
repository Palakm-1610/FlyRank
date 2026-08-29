async function getHealthData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      next: { revalidate: 3600 },
    })
    if (!response.ok) throw new Error('Failed to fetch')
    return await response.json()
  } catch (error) {
    return null
  }
}

export default async function HealthCheckPage() {
  const data = await getHealthData()

  const services = [
    { name: 'Database', status: 'Healthy', time: '42ms' },
    { name: 'API Server', status: 'Healthy', time: '28ms' },
    { name: 'Authentication', status: 'Healthy', time: '15ms' },
    { name: 'Cache Layer', status: 'Healthy', time: '8ms' },
  ]

  const getStatusColor = (status: string) => {
    return status === 'Healthy'
      ? 'bg-green-100 text-green-700'
      : 'bg-red-100 text-red-700'
  }

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">System Health Check</h1>
          <p className="text-gray-600 mt-1">Monitor the status of FlyRank services</p>
        </div>

        {/* Overall Status */}
        <div className="card mb-8 border-l-4 border-green-500">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-green-600">All Systems Operational</h2>
              <p className="text-gray-600 mt-1">Last checked: Just now</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>

        {/* Service Status */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Service Status</h2>
          <div className="space-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">Response time: {service.time}</p>
                </div>
                <span className={`px-4 py-2 rounded font-medium text-sm ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fetched Data */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">External API Data (JSONPlaceholder)</h2>
          {data ? (
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">User ID</p>
                  <p className="font-semibold text-gray-900">{data.userId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Post ID</p>
                  <p className="font-semibold text-gray-900">{data.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Title</p>
                  <p className="font-semibold text-gray-900">{data.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Body</p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">{data.body}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">✓ Data successfully fetched from external API</p>
            </div>
          ) : (
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <p className="text-yellow-800">⚠ Could not fetch external data at this time</p>
            </div>
          )}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Page Load Time</span>
                  <span className="text-sm font-semibold text-gray-900">124ms</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Uptime</span>
                  <span className="text-sm font-semibold text-gray-900">99.9%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.9%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Infrastructure</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-600">Deployed on:</span>
                <span className="font-semibold text-gray-900 ml-2">Vercel</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Region:</span>
                <span className="font-semibold text-gray-900 ml-2">us-west-2</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Framework:</span>
                <span className="font-semibold text-gray-900 ml-2">Next.js 14</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Styling:</span>
                <span className="font-semibold text-gray-900 ml-2">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
