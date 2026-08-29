export default function ProfilePage() {
  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>

        {/* Profile Header */}
        <div className="card mb-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
              <p className="text-gray-600">Computer Science Student</p>
              <p className="text-gray-600">University of Tech • Senior Year</p>
            </div>
            <button className="btn-primary">Edit Profile</button>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-700 leading-relaxed">
              Passionate about software development and career growth. Currently focused on building full-stack
              applications and preparing for internships in tech companies.
            </p>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">john.doe@university.edu</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium text-gray-900">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Social Profiles</h3>
            <div className="space-y-3">
              <a href="#" className="block px-4 py-2 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors">
                LinkedIn Profile
              </a>
              <a href="#" className="block px-4 py-2 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors">
                GitHub Profile
              </a>
              <a href="#" className="block px-4 py-2 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600">5</div>
            <p className="text-sm text-gray-600 mt-1">Projects</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-accent-600">12</div>
            <p className="text-sm text-gray-600 mt-1">Tasks Done</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-600">6</div>
            <p className="text-sm text-gray-600 mt-1">Skills</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-purple-600">3</div>
            <p className="text-sm text-gray-600 mt-1">Applications</p>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-gray-600">University of Technology</p>
                <p className="text-sm text-gray-600">Graduation: May 2025</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">AWS Certified Cloud Practitioner</p>
                <p className="text-sm text-gray-600">Issued: March 2024</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Google Cloud Associate</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Job Preferences</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Interested in</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded text-sm">Internships</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded text-sm">Full-time</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded text-sm">Remote</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Target roles</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded text-sm">Backend</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded text-sm">Full-stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
