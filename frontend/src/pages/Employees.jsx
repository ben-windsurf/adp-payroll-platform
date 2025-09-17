import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Employees(){
  const [employees, setEmployees] = useState([])
  const [form, setForm] = useState({firstName:'', lastName:'', email:'', baseSalary:60000})
  const [loading, setLoading] = useState(false)

  const load = ()=> api.get('/employees').then(r=>setEmployees(r.data))
  useEffect(()=>{ load() },[])

  const add = async (e)=>{
    e.preventDefault()
    setLoading(true)
    await api.post('/employees', form)
    setForm({firstName:'', lastName:'', email:'', baseSalary:60000})
    setLoading(false)
    load()
  }

  const remove = async (id)=>{
    await api.delete('/employees/'+id)
    load()
  }

  return (
    <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
      <div className="card">
        <h3>Add Employee</h3>
        <form onSubmit={add} className="grid">
          <input className="input" placeholder="First name" value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})}/>
          <input className="input" placeholder="Last name" value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})}/>
          <input className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
          <label>Base Salary (USD)</label>
          <input className="input" type="number" value={form.baseSalary} onChange={e=>setForm({...form, baseSalary:parseFloat(e.target.value||0)})}/>
          <button className="btn" disabled={loading}>{loading ? 'Saving...' : 'Save Employee'}</button>
        </form>
      </div>
      <div className="card">
        <h3>Employees</h3>
        <table className="table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Salary</th><th></th></tr>
          </thead>
          <tbody>
            {employees.map(e=>(
              <tr key={e.id}>
                <td>{e.firstName} {e.lastName}</td>
                <td>{e.email}</td>
                <td>${e.baseSalary.toLocaleString()}</td>
                <td><button className="btn secondary" onClick={()=>remove(e.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
