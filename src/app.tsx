
import { Hono } from 'hono'

export const app = new Hono()

app.use('*', async (c, next) => {
  c.setRenderer((content, head) => {
    return c.html(
      <html>
        <head>
          <title>{head.title ?? ''}</title>
        </head>
        <body>
          <p>{content}</p>
        </body>
      </html>
    )
  })
  await next()
})
app.get('/about', (c) => {
  return c.render('Hello!', { title: 'Hono SSG Page' })
})
app.get('/', (c) => {
  return c.render('Hello Hono!', { title: 'home'})
})

