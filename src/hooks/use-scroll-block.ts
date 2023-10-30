import { useState } from 'react'

export const useScrollBlock = () => {
  const [blocked, setBlocked] = useState(false)
  const html = document.documentElement
  const { body } = document

  const blockScroll = () => {
    if (!body || !body.style || blocked) return

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    setBlocked(true)
  }

  const allowScroll = () => {
    if (!body || !body.style || !blocked) return

    html.style.overflow = ''
    body.style.overflow = ''
    setBlocked(false)
  }

  return [blockScroll, allowScroll]
}