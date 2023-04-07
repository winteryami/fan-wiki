import React from 'react'
import styles from './App.module.css'
import Characters from './components/Characters/Characters'

function App () {
  return (
    <main className={styles.container}>
      <header className={styles.title}>
        <h1>Rick & Morty Wiki</h1>
      </header>
      <Characters/>
    </main>
  )
}

export default App
