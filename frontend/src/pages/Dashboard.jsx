import React, { useEffect, useState } from 'react'
import api from '../services/api'
export default function Dashboard(){
  const [stats, setStats] = useState({employees:0, lastRun:null, totalNet:0})
  useEffect(()=>{
    Promise.all([api.get('/employees'), api.get('/payroll/runs')]).then(([e, r])=>{
      const runs = r.data || []
      const last = runs.length ? runs[runs.length-1] : null
      const totalNet = last ? last.net : 0
      setStats({employees:e.data.length, lastRun:last, totalNet})
    })
  },[])
  return (
    <div className="grid cols-3">
      <div className="card">
        <h3>Active Employees</h3>
        <p style={{fontSize:36, margin:0}}>{stats.employees}</p>
        <span className="badge">People</span>
      </div>
      <div className="card">
        <h3>Last Payroll Net</h3>
        <p style={{fontSize:36, margin:0}}>${stats.totalNet.toFixed(2)}</p>
        <span className="badge success">Most recent run</span>
      </div>
      <div className="card">
        <h3>Status</h3>
        <p style={{fontSize:18, margin:0}}>On track</p>
        <span className="badge success">All systems nominal</span>
      </div>
      <div className="card hero" style={{gridColumn:'1/-1'}}>
        <div>
          <h2 style={{marginTop:0}}>Welcome back 👋</h2>
          <p>Review workforce data, preview payroll, and download pay stubs. This is a lightweight demo with an ADP-inspired look and feel.</p>
          <a className="btn" href="/payroll">Run Payroll</a>
        </div>
        <div>
          <div className="card">
            <h4>Compliance Reminders</h4>
            <ul>
              <li>Verify employee tax forms (W-4) are up to date</li>
              <li>Confirm bank routing for direct deposit</li>
              <li>Review PTO &amp; overtime policy changes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
