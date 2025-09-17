import React from 'react'

export default function Settings(){
  return (
    <div className="card">
      <h3>Settings</h3>
      <p>This demo uses an in-memory store. To reset data, restart the backend server. Configure API base URL by setting <code>VITE_API_BASE_URL</code> in a <code>.env</code> file.</p>
      <pre>
VITE_API_BASE_URL=http://localhost:8080/api
      </pre>
    </div>
  )
}
