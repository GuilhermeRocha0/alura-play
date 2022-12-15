import { connectApi } from './connectApi.js'

const form = document.querySelector('[data-form]')

async function createVideo(e) {
  e.preventDefault()

  const url = document.querySelector('[data-url]').value
  const title = document.querySelector('[data-title]').value
  const image = document.querySelector('[data-image]').value
  const description = Math.floor(Math.random() * 10).toString()
  console.log(description)

  try {
    await connectApi.createVideo(title, description, url, image)
    window.location.href = '../pages/video-sent.html'
  } catch (error) {
    alert(error)
  }
}

form.addEventListener('submit', e => createVideo(e))
