import { connectApi } from './connectApi.js'

const videosList = document.querySelector('[data-video-list]')

function createVideoCard(title, views, url, image) {
  const videoCard = document.createElement('li')
  videoCard.classList.add('videos__item')

  const videoFrame = document.createElement('iframe')
  videoFrame.width = '100%'
  videoFrame.height = '72%'
  videoFrame.src = url
  videoFrame.title = 'YouTube video player'
  videoFrame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  videoFrame.allowFullscreen = 'true'

  const videoDescription = document.createElement('div')
  videoDescription.classList.add('description-video')

  const videoLogo = document.createElement('img')
  videoLogo.src = image
  videoLogo.alt = 'Logo do canal Alura Cursos Online'

  const videoTitle = document.createElement('h3')
  videoTitle.textContent = title

  const videoViews = document.createElement('p')
  videoViews.textContent = views

  videoDescription.appendChild(videoLogo)
  videoDescription.appendChild(videoTitle)
  videoDescription.appendChild(videoViews)

  videoCard.appendChild(videoFrame)
  videoCard.appendChild(videoDescription)

  videosList.appendChild(videoCard)
}

function errorMessage(message) {
  const errorTitle = document.createElement('h2')
  errorTitle.classList.add('message__title')
  errorTitle.textContent = message

  videosList.appendChild(errorTitle)
}

async function getVideos() {
  try {
    const videos = await connectApi.getVideos()
    videos.forEach(video => {
      createVideoCard(video.title, video.description, video.url, video.image)
    })
  } catch (error) {
    errorMessage('Não foi possível carregar a lista de vídeos')
  }
}

getVideos()

export const showVideos = {
  createVideoCard,
  errorMessage
}
