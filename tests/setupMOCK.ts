import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, graphql, http } from 'msw'

const posts = [
    {
        body: "test text",
        email: "test_text@gmail.com",
        id: 123,
        name: "string",
        postId: 1,
      },
      {
        body: "random text",
        email: "r@gmail.com",
        id: 124,
        name: "string",
        postId: 2,
      }
]

export const restHandlers = [
  http.get('https://jsonplaceholder.typicode.com/posts/1/comments', () => {
    return HttpResponse.json(posts)
  }),
]

const graphqlHandlers = [
  graphql.query('ListPosts', () => {
    return HttpResponse.json(
      {
        data: { posts },
      },
    )
  }),
]

const server = setupServer(...restHandlers, ...graphqlHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())