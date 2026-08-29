export default function SkillsPage() {
  const skills = [
    {
      id: 1,
      name: 'React',
      category: 'Frontend',
      level: 'Intermediate',
      progress: 70,
      resources: 3,
    },
    {
      id: 2,
      name: 'TypeScript',
      category: 'Languages',
      level: 'Beginner',
      progress: 45,
      resources: 5,
    },
    {
      id: 3,
      name: 'Node.js',
      category: 'Backend',
      level: 'Intermediate',
      progress: 65,
      resources: 4,
    },
    {
      id: 4,
      name: 'Docker',
      category: 'DevOps',
      level: 'Beginner',
      progress: 30,
      resources: 2,
    },
    {
      id: 5,
      name: 'Python',
      category: 'Languages',
      level: 'Advanced',
      progress: 85,
      resources: 6,
    },
    {
      id: 6,
      name: 'AWS',
      category: 'Cloud',
      level: 'Beginner',
      progress: 25,
      resources: 3,
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-yellow-100 text-yellow-700'
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700'
      case 'Advanced':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-blue-500'
    if (progress >= 40) return 'bg-yellow-500'
    return 'bg-gray-400'
  }

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Skills & Learning</h1>
            <p className="text-gray-600 mt-1">Track your skill development and learning progress</p>
          </div>
          <button className="btn-primary w-full sm:w-auto">
            + Add Skill
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{skill.category}</p>
                </div>
                <span className={`px-3 py-1 rounded text-sm font-medium ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Learning Progress</span>
                  <span className="text-sm font-semibold text-gray-900">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${getProgressColor(skill.progress)} h-2 rounded-full transition-all`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  📚 {skill.resources} resources
                </p>
                <button className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors">
                  View Resources
                </button>
              </div>
            </div>
          ))}
        </div>

        {skills.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600 text-lg">No skills added yet. Start tracking your learning journey!</p>
          </div>
        )}
      </div>
    </div>
  )
}
