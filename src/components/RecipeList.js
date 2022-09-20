import axios from 'axios'
import { useEffect, useState } from 'react'

const RecipeList = ({ tokenProp }) => {
  const [recipes, setRecipes] = useState(null)
  useEffect(() => {
    const URL = 'http://127.0.0.1:8000/api/recipes'
    axios
      .get(URL, {
        headers: { Authorization: `Token ${tokenProp}` },
      })
      .then((res) => setRecipes(res.data))
  }, [tokenProp])
  return <h1>recipe list</h1>
}

export default RecipeList
