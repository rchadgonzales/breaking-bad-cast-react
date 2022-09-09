import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css';

const App = () => {
  const [chars, setChars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchChars = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setChars(result.data)
      setIsLoading(false)
    }
    fetchChars()
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} chars={chars}/>
    </div>
  )
}

export default App
