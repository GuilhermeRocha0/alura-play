async function getVideos() {
  const req = await fetch(urlApi)
  const data = await req.json()
  return data
}

async function createVideo(title, description, url, image) {
  const req = await fetch(urlApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      description: `${description} mil visualizações`,
      url: url,
      image: image
    })
  })
  if (!req.ok) {
    throw new Error('Não foi possível enviar o vídeo')
  }
}

async function searchVideo(searchData) {
  const req = await fetch(`${urlApi}?q=${searchData}`)
  const data = await req.json()
  return data
}

const urlApi = 'http://localhost:3000/videos'

export const connectApi = {
  getVideos,
  createVideo,
  searchVideo
}
