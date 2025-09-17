import React, { useEffect, useState } from 'react'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Payroll from './pages/Payroll'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import api from './services/api'

function Nav(){
  const navigate = useNavigate()
  const [ok, setOk] = useState(true)
  useEffect(()=>{
    api.get('/health').then(()=>setOk(true)).catch(()=>setOk(false))
  },[])
  return (
    <div className="nav">
      <div className="brand" role="img" aria-label="ADP themed logo">
        <div className="dot"></div>
        <span>ADP • Payroll</span>
        <span style={{marginLeft:8, fontSize:12, color: ok ? '#2e7d32' : '#d32f2f'}} className="badge">{ok ? 'API Connected' : 'API Down'}</span>
      </div>
      <div className="links">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/payroll">Payroll</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <button className="btn secondary" onClick={()=>navigate('/payroll')}>Run Payroll</button>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/payroll" element={<Payroll/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
        <footer>© {new Date().getFullYear()} Demo payroll platform, ADP-like theme for educational use.</footer>
      </div>
    </>
  )
}
