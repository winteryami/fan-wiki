import React from 'react'
import styles from './App.module.css'
import Characters from './components/Characters'

function App () {
  return (
    <main className={styles.container}>
      <header className={styles.title}>
        <h1>Rick & Morty Wiki</h1>
      </header>
      <section>
        <Characters/>
      </section>
    </main>
  )
}

export default App
