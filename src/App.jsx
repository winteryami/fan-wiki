import React from 'react'
import styles from './App.module.css'
import { Outlet } from 'react-router-dom'

function App () {
  return (
    <main className={styles.container}>
      <header className={styles.title}>
        <h1>Rick & Morty Wiki</h1>
      </header>
      <Outlet/>
    </main>
  )
}

export default App
