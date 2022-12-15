import { connectApi } from './connectApi.js'
import { showVideos } from './showVideos.js'

const videosList = document.querySelector('[data-video-list]')

async function searchVideo(e) {
  e.preventDefault()

  const searchData = document.querySelector('[data-search-data]').value
  const videos = await connectApi.searchVideo(searchData)
  console.log(videos)

  while (videosList.lastChild) {
    videosList.removeChild(videosList.lastChild)
  }

  videos.forEach(video => {
    showVideos.createVideoCard(
      video.title,
      video.description,
      video.url,
      video.image
    )
  })

  if (videos.length == 0) {
    showVideos.errorMessage('Não foram encontrados vídeos com esse termo')
  }
}

const searchButton = document.querySelector('[data-search-button]')
searchButton.addEventListener('click', e => searchVideo(e))
