const express = require('express')
const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const AppComponent = require( '../src/app' )

const app = express()

app.get(/\.(js|css|map|ico|json)$/, express.static(path.resolve(__dirname, '../public')))

app.use('*', (req, res) => {
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), {
    encoding: 'utf8'
  })

  let appHTML = ReactDOMServer.renderToString(AppComponent)

  indexHTML = indexHTML.replace(
    '&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;',
    `&lt;div id=&quot;app&quot;&gt;${ appHTML }&lt;/div&gt;`
  )

  res.contentType('text/html')
  res.status(200)

  return res.send(indexHTML)
})

app.listen('9000', () => {
  console.log('Express server started at <http://localhost:9000>')
})