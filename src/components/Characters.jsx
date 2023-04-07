import React, { useEffect, useState } from 'react'

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
    <>{data.map((character, index) => <h1 key={index}>{character.name}</h1>)}</>
  )
}

export default Characters
