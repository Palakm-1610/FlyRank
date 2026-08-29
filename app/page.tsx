import Link from 'next/link'

export default function Dashboard() {
  const stats = [
    { label: 'Active Projects', value: '5', color: 'bg-primary-100 text-primary-600' },
    { label: 'Pending Tasks', value: '12', color: 'bg-accent-100 text-accent-600' },
    { label: 'Job Applications', value: '3', color: 'bg-blue-100 text-blue-600' },
    { label: 'Skills to Learn', value: '8', color: 'bg-purple-100 text-purple-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Welcome to FlyRank
          </h1>
          <p className="text-gray-600 text-lg">
            Your all-in-one student career and productivity dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="card">
              <div className={`inline-block px-3 py-1 rounded-full ${stat.color} text-sm font-semibold mb-2`}>
                {stat.label}
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-col gap-3">
              <Link href="/projects" className="btn-primary text-center">
                Create New Project
              </Link>
              <Link href="/tasks" className="btn-secondary text-center">
                Add Task
              </Link>
              <Link href="/job-tracker" className="btn-secondary text-center">
                Log Job Application
              </Link>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900">Project deadline approaching</p>
                <p className="text-xs text-gray-500">2 days remaining</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900">Interview scheduled</p>
                <p className="text-xs text-gray-500">Tomorrow at 2:00 PM</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900">Skill milestone unlocked</p>
                <p className="text-xs text-gray-500">React fundamentals completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Overview */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">📊 Projects</h3>
              <p className="text-gray-600">Track and manage your academic and personal projects</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">✅ Tasks</h3>
              <p className="text-gray-600">Organize your to-do list with deadlines and priorities</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">💼 Job Tracker</h3>
              <p className="text-gray-600">Monitor job and internship applications in one place</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">🎯 Skills</h3>
              <p className="text-gray-600">Track your learning progress and skill development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
