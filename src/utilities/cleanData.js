export const cleanData = (data) => {
  const { results } = data
  return results.map(result => {
    return {
      title: result.title,
      abstract: result.abstract,
      url: result.url,
      byline: result.byline,
      publishedDate: result.published_date,
      image: result.multimedia.find(media => media.format === 'superJumbo')
    }
  })
}