export const cleanData = (data) => {
  const { results } = data
  return results.map(result => {
    const date = new Date(result.published_date).toDateString();
    const image = !result.multimedia ? [] : result.multimedia?.find(media => media.format === 'superJumbo');
    const uri = result.uri.replace('nyt://', "");
    return {
      title: result.title,
      abstract: result.abstract,
      url: result.url,
      uri,
      byline: result.byline,
      publishedDate: date,
      image 
    }
  })
}