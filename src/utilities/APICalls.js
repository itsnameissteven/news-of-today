export const getTopStories = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_KEY}`)
            .then(response => response.json())      
}

