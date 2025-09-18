import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { useNotifications } from '../contexts/NotificationContext'

export default function Payroll(){
  const [employees, setEmployees] = useState([])
  const [runs, setRuns] = useState([])
  const [period, setPeriod] = useState('BIWEEKLY')
  const { addNotification } = useNotifications()

  const load = ()=>{
    api.get('/employees').then(r=>setEmployees(r.data))
    api.get('/payroll/runs').then(r=>setRuns(r.data))
  }
  useEffect(()=>{ load() },[])

  const runPayroll = async ()=>{
    const res = await api.post('/payroll/run', {period})
    setRuns(res.data)
    
    const latestRun = res.data[res.data.length - 1]
    addNotification({
      type: 'success',
      message: `Payroll completed! $${latestRun.net.toFixed(2)} net pay for ${latestRun.stubs.length} employees`
    })
  }

  return (
    <div className="grid">
      <div className="card">
        <h3>Preview</h3>
        <p>{employees.length} employees in scope</p>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <label>Pay Period</label>
          <select value={period} onChange={e=>setPeriod(e.target.value)}>
            <option value="WEEKLY">Weekly</option>
            <option value="BIWEEKLY">Bi-weekly</option>
            <option value="MONTHLY">Monthly</option>
          </select>
          <button className="btn" onClick={runPayroll}>Run Payroll</button>
        </div>
      </div>

      <div className="card">
        <h3>Payroll Runs</h3>
        <table className="table">
          <thead><tr><th>Date</th><th>Gross</th><th>Taxes</th><th>Net</th><th>Checks</th></tr></thead>
          <tbody>
            {runs.map((r, idx)=>(
              <tr key={idx}>
                <td>{new Date(r.runDate).toLocaleString()}</td>
                <td>${r.gross.toFixed(2)}</td>
                <td>${r.taxes.toFixed(2)}</td>
                <td><span className="badge success">${r.net.toFixed(2)}</span></td>
                <td>{r.stubs.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Pay Stubs (Most Recent)</h3>
        <table className="table">
          <thead><tr><th>Employee</th><th>Gross</th><th>Taxes</th><th>Net</th></tr></thead>
          <tbody>
            {runs.length ? runs[runs.length-1].stubs.map((s, i)=>(
              <tr key={i}>
                <td>{s.employeeName}</td>
                <td>${s.gross.toFixed(2)}</td>
                <td>${s.taxes.toFixed(2)}</td>
                <td>${s.net.toFixed(2)}</td>
              </tr>
            )) : <tr><td colSpan="4">No runs yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
