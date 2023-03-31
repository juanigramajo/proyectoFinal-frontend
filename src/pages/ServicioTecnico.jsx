import React from 'react'
import NavBar from '../components/NavBar'

export default function ServicioTecnico({token, user, setToken}) {
  return (
    <div>
      <NavBar token={token} user={user} setToken={setToken}/>
      <h1>Servicio Técnico</h1>
    </div>
  )
}
