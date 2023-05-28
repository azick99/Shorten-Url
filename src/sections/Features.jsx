import { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const Features = () => {
  const [urlInput, setUrlInput] = useState('')
  const [shortLink, setShortLink] = useState('')
  const [urls, setUrls] = useState([])
  const [status, setStatus] = useState('typing')
  const [error, setError] = useState(null)

  const urlId = uuidv4()
  const inputEmpty = urlInput.length === 0

  const url = `https://api.shrtco.de/v2/shorten?url=${urlInput}`

  const fetchData = async () => {
    setStatus('submitting')
    try {
      const response = await axios.get(url)
      setShortLink(response.data.result)
      setStatus('success')
    } catch (error) {
      setStatus('typing')
      setError(error)
    }
  }

  useEffect(() => {
    if (status === 'success') {
      setUrls((prevUrls) => [...prevUrls, { ...shortLink, id: urlId }])
    }
  }, [status, shortLink])

  useEffect(() => {
    const savedUrls = localStorage.getItem('savedUrls')
    if (savedUrls) {
      setUrls(JSON.parse(savedUrls))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('savedUrls', JSON.stringify(urls))
  }, [urls])

  const handleCopyClick = (fullShortLink, id) => {
    navigator.clipboard
      .writeText(fullShortLink)
      .then(() => {
        // Update the 'urls' state with the copied flag
        setUrls((prevUrls) =>
          prevUrls.map((url) =>
            url.id === id ? { ...url, copied: true } : url
          )
        )
      })
      .catch((error) => {
        console.error('Error copying URL to clipboard:', error)
      })
  }

  const handleUrlChange = (event) => {
    setUrlInput(event.target.value)
    setStatus('typing')
    setError(null)
  }

  const handleRemoveClick = (id) => {
    setUrls(urls.filter((url) => url.id !== id))
  }

  const handleButtonClick = async () => {
    if (inputEmpty) {
      setStatus('empty')
    }
    if (!inputEmpty) {
      fetchData()
    }
    setUrlInput('')
  }

  let errorContent

  if (status === 'empty') {
    errorContent = (
      <p className="mt-2 sm:absolute static text-pink-600 text-sm">
        <i>Please add a link</i>
      </p>
    )
  }
  if (error !== null) {
    errorContent = (
      <p className="mt-2 sm:absolute static text-pink-600 text-sm">
        <i>Link is wrong! try again</i>
      </p>
    )
  }

  return (
    <section
      id="features"
      className=" bg-gray/20 w-full h-full sm:mt-[8rem] mt-[5rem] scroll-mt-40"
    >
      <div className="w-[85vw] mx-auto p-4 sm:flex block sm:flex-col flex-row sm:gap-x-4  -translate-y-20">
        <div className="sm:p-10 p-4 shorten flex sm:flex-row flex-col">
          <div className="sm:w-4/5 w-full">
            <input
              type="text"
              value={urlInput}
              onChange={handleUrlChange}
              placeholder="Shorten a link here..."
              className={`border-2 ${
                status === 'empty' || error !== null
                  ? '!border-red placeholder:text-red/50'
                  : ' '
              }  py-2 px-8 w-full rounded-md  border-very-dark-blue`}
              required
            />
            {errorContent}
          </div>
          <button
            onClick={handleButtonClick}
            type="button"
            className="sm-rounded-btn sm:ml-5 ml-0 sm:mt-0 mt-3 sm:self-start self-auto py-2"
            disabled={status === 'submitting'}
          >
            Shorten it!
          </button>
        </div>
        <div>
          {urls.map((url) => {
            const { id, original_link, full_short_link2, copied } = url
            return (
              <div
                key={id}
                className="mt-5 flex sm:flex-row flex-col w-full bg-white sm:py-3 sm:px-5 py-0 px-0 items-center rounded-md gap-x-4 "
              >
                <p className="basis-4/6 overflow-x-auto sm:border-0 border-b sm:mb-0 sm:p-0 p-4 w-full">
                  {' '}
                  {original_link}
                </p>
                <div className="basis-2/6 flex sm:flex-row flex-col sm:gap-y-0 gap-y-3 gap-x-2 items-center sm:p-0 p-4 w-full">
                  <a href={full_short_link2} className="text-cyan w-full">
                    {full_short_link2}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyClick(full_short_link2, id)}
                    className={`${
                      copied ? 'dark-btn' : 'sm-rounded-btn'
                    } w-full`}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveClick(id)}
                    className="sm-rounded-btn w-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
