import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import styles from './Characters.module.css'

const Characters = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setData(data.results)
    }

    if (!data.length) getCharacters()
  }, [])

  if (!data.length) return

  return (
    <section className={styles.container}>{data.map((character) => <CharacterCard key={`${character.name}-card`} character={character}/>)}</section>
  )
}

export default Characters
