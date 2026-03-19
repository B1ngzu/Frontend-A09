import '@testing-library/jest-dom/extend-expect'

if (!globalThis.fetch) {
  const { fetch, Headers, Request, Response } = require('undici')
  globalThis.fetch = fetch
  globalThis.Headers = Headers
  globalThis.Request = Request
  globalThis.Response = Response
}