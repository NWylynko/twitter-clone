import "source-map-support/register"

export const extractHashtags = (text: string) => {
  const hashtags = text.match(/#[a-zA-Z0-9_]+/g) || []
  return hashtags.map(hashtag => hashtag.slice(1))
}
