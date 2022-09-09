import CharacterChar from './CharacterChar'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({chars, isLoading}) => {
  return isLoading ? (<Spinner/>) : (<section className="cards">
    {chars.map((char) => (
      <CharacterChar key={char.char_id} char={char}></CharacterChar>
    ))}
  </section>
  )
}

export default CharacterGrid