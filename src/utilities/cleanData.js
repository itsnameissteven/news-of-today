export const cleanData = (data) => {
  const { results } = data
  return results.map(result => {
    const date = new Date(result.published_date).toDateString()
    return {
      title: result.title,
      abstract: result.abstract,
      url: result.url,
      byline: result.byline,
      publishedDate: date,
      image: result.multimedia.find(media => media.format === 'superJumbo')
    }
  })
}