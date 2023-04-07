import React from 'react'
import PropTypes from 'prop-types'
import styles from './CharacterCard.module.css'

const CharacterCard = ({ character }) => {
  return (
    <article className={styles.container}>
      <img src={character.image}/>
      <h3>{character.name}</h3>
    </article>
  )
}

export default CharacterCard

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
}
