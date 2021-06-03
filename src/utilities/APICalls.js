export const getArticles = (section = 'home') => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_KEY}`)
            .then(response => response.json())      
}



