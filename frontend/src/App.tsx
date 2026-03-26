import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('http://localhost:8000/api/invoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      const data = await res.json()
      setResponse(data.response)
    } catch (err) {
      setResponse('Error connecting to agent. Is the backend running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-2">🧠 My AI Agent</h1>
        <p className="text-center text-gray-500 mb-8">LangGraph + FastAPI + React</p>

        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything... e.g. What is 15% of 250 plus today's date?"
            className="w-full h-28 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-4 rounded-xl text-lg transition"
          >
            {loading ? 'Thinking...' : 'Ask the Agent'}
          </button>
        </form>

        {response && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="font-semibold text-gray-700 mb-2">Agent Response:</h2>
            <p className="text-gray-800 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        Built with LangGraph • FastAPI • React + TypeScript • Docker
      </p>
    </div>
  )
}

export default App