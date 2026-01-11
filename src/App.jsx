import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Content will go here */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500">
          Dashboard content coming next...
        </div>
      </div>
    </Layout>
  )
}

export default App
