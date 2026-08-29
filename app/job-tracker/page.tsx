export default function JobTrackerPage() {
  const applications = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineering Intern',
      status: 'Interview Scheduled',
      appliedDate: 'Oct 15, 2024',
      interviewDate: 'Dec 2, 2024',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Cloud Solutions Intern',
      status: 'Application Sent',
      appliedDate: 'Oct 20, 2024',
      interviewDate: null,
      statusColor: 'bg-yellow-100 text-yellow-700',
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Backend Engineering Intern',
      status: 'Rejected',
      appliedDate: 'Oct 10, 2024',
      interviewDate: null,
      statusColor: 'bg-red-100 text-red-700',
    },
  ]

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job & Internship Tracker</h1>
            <p className="text-gray-600 mt-1">Monitor your applications and interviews</p>
          </div>
          <button className="btn-primary w-full sm:w-auto">
            + Log Application
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <div className="text-3xl font-bold text-blue-600">{applications.length}</div>
            <p className="text-gray-600 text-sm mt-1">Total Applications</p>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-green-600">1</div>
            <p className="text-gray-600 text-sm mt-1">Interviews Scheduled</p>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-gray-600">33%</div>
            <p className="text-gray-600 text-sm mt-1">Success Rate</p>
          </div>
        </div>

        {/* Applications Table */}
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Company</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Position</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Applied</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Interview</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{app.company}</td>
                  <td className="px-4 py-3 text-gray-600">{app.position}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{app.appliedDate}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    {app.interviewDate ? app.interviewDate : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <button className="px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {applications.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600 text-lg">No applications logged yet. Start tracking your applications!</p>
          </div>
        )}
      </div>
    </div>
  )
}
