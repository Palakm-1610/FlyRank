export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: 'Complete API integration',
      project: 'E-Commerce Platform',
      priority: 'High',
      dueDate: 'Nov 28, 2024',
      status: 'In Progress',
      priorityColor: 'bg-red-100 text-red-700',
      statusColor: 'bg-yellow-100 text-yellow-700',
    },
    {
      id: 2,
      title: 'Design wireframes',
      project: 'Mobile App Design',
      priority: 'Medium',
      dueDate: 'Nov 30, 2024',
      status: 'Todo',
      priorityColor: 'bg-orange-100 text-orange-700',
      statusColor: 'bg-gray-100 text-gray-700',
    },
    {
      id: 3,
      title: 'Database optimization',
      project: 'Data Analytics Dashboard',
      priority: 'Medium',
      dueDate: 'Nov 25, 2024',
      status: 'Review',
      priorityColor: 'bg-orange-100 text-orange-700',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      id: 4,
      title: 'Write documentation',
      project: 'E-Commerce Platform',
      priority: 'Low',
      dueDate: 'Dec 5, 2024',
      status: 'Todo',
      priorityColor: 'bg-green-100 text-green-700',
      statusColor: 'bg-gray-100 text-gray-700',
    },
  ]

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
            <p className="text-gray-600 mt-1">Your to-do list and action items</p>
          </div>
          <button className="btn-primary w-full sm:w-auto">
            + New Task
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="card hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-primary-600"
                      defaultChecked={task.status === 'Completed'}
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {task.project}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${task.priorityColor}`}>
                      {task.priority}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${task.statusColor}`}>
                      {task.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">📅 {task.dueDate}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600 text-lg">No tasks yet. Create your first task!</p>
          </div>
        )}
      </div>
    </div>
  )
}
