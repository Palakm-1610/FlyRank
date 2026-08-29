export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      status: 'In Progress',
      progress: 65,
      dueDate: 'Dec 15, 2024',
      team: 4,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      id: 2,
      name: 'Mobile App Design',
      status: 'Planning',
      progress: 20,
      dueDate: 'Jan 10, 2025',
      team: 3,
      color: 'bg-green-100 text-green-700',
    },
    {
      id: 3,
      name: 'Data Analytics Dashboard',
      status: 'Review',
      progress: 80,
      dueDate: 'Dec 1, 2024',
      team: 2,
      color: 'bg-purple-100 text-purple-700',
    },
  ]

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-1">Manage and track your projects</p>
          </div>
          <button className="btn-primary w-full sm:w-auto">
            + New Project
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.color}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Due: {project.dueDate}</p>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  👥 {project.team} members
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors">
                  View Details
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600 text-lg">No projects yet. Create your first project!</p>
          </div>
        )}
      </div>
    </div>
  )
}
