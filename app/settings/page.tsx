export default function SettingsPage() {
  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        {/* Account Settings */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Account</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Email Address</p>
                <p className="text-sm text-gray-600">john.doe@university.edu</p>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Change
              </button>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Password</p>
                <p className="text-sm text-gray-600">Last changed 2 months ago</p>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Update
              </button>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Enhance your account security</p>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Enable
              </button>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Theme</p>
                <p className="text-sm text-gray-600">Light mode</p>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:border-primary-600">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Language</p>
                <p className="text-sm text-gray-600">English</p>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:border-primary-600">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-medium text-gray-900">Date Format</p>
                <p className="text-sm text-gray-600">MM/DD/YYYY</p>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:border-primary-600">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center py-3 border-b border-gray-200 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" defaultChecked />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
            </label>
            <label className="flex items-center py-3 border-b border-gray-200 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" defaultChecked />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Task Reminders</p>
                <p className="text-sm text-gray-600">Get notified about upcoming tasks</p>
              </div>
            </label>
            <label className="flex items-center py-3 border-b border-gray-200 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Marketing Emails</p>
                <p className="text-sm text-gray-600">Receive news and updates</p>
              </div>
            </label>
            <label className="flex items-center py-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" defaultChecked />
              <div className="ml-3">
                <p className="font-medium text-gray-900">Interview Alerts</p>
                <p className="text-sm text-gray-600">Get notified about interview updates</p>
              </div>
            </label>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy & Security</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Profile Visibility</p>
                <p className="text-sm text-gray-600">Control who can see your profile</p>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:border-primary-600">
                <option>Public</option>
                <option>Private</option>
                <option>Friends Only</option>
              </select>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Activity Status</p>
                <p className="text-sm text-gray-600">Show when you're online</p>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Manage
              </button>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-medium text-gray-900">Connected Apps</p>
                <p className="text-sm text-gray-600">Manage third-party access</p>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="card border-red-200 bg-red-50">
          <h2 className="text-xl font-bold text-red-900 mb-4">Danger Zone</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded font-medium hover:bg-red-200 transition-colors">
              Download Your Data
            </button>
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
