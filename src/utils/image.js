import imageLibrary from './imageLibrary.json'

export const getImageFromId = id => {
  for (let i = 0; i < imageLibrary.length; i++) {
    if (imageLibrary[i].id === id) {
      return imageLibrary[i]
    }
  }
  return null
}
