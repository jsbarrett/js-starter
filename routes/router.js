const routes = {
  GET: {
  },
  POST: {
  }
  // "method" -> route
  // 'todos': {
  //   '*': {
  //     'delete': () => {}
  //   }
  // }
}

const registerRoute = (method) => (url, cb) => {
  const parts = url.split('/')
  // ['', 'todos', ':id', 'delete']
  const dynamicParts = parts
    .filter(x => x[0] === ':')
    .map(x => {
      return {
        string: x,
        index: parts.indexOf(x)
      }
    })
    // [{ string: 'id', index: 2 }]

  const withoutFirstIndex = parts.slice(1)

  let routesForMethod = routes[method]
  let parent
  let currKey
  withoutFirstIndex.reduce((o, key) => {
    currKey = (!dynamicParts.map(x => x.string).includes(key))
      ? key
      : '*'
    parent = o
    parent[currKey] = parent[currKey] || {}
    return parent[currKey]
  }, routesForMethod)

  parent[currKey] = someFactoryFnToGetDynamicParts(cb, dynamicParts)
}

const router = {
  get: registerRoute('GET'),
  post: registerRoute('POST')
}

const someFactoryFnToGetDynamicParts = function (cb, dynamicParts) {
  return function (req) {
    const urlParts = req.url.split('/')
    if (dynamicParts.length > 0) req.params = {}

    for (let param of dynamicParts) {
      const name = param.string.slice(1)
      req.params[name] = urlParts[param.index]
    }
    // req.params.id == '12392484'

    return cb(req)
  }
}

/**
 *
 * router.get('/todos/:id', function () {})
 * router.post('/todos/:id/update', function () {})
 * router.post('/todos/:id/delete', (req) => {
 *   req.params.id
 * })
 *
 *
 */

const goGetRoutes = (req) => {
  // const urlPath = req.url.cutoffeverythingafter?
  const parts = req.url.split('/').slice(1)
  // ['', 'todos', '4345']
  // /todos/:id/update/foo/bar/anyother/stuff
  // /todos/:foobar/update/foo/bar/anyother/stuff
  let $ref = routes[req.method]
  let hasRouteHandler = false
  for (let i = 0; i < parts.length; i += 1) {
    const el = parts[i]
    if ($ref[el]) {
      $ref = $ref[el]
    } else if ($ref['*']) {
      $ref = $ref['*']
    } else {
      break
    }

    if (i === parts.length - 1) hasRouteHandler = true
  }

  if (hasRouteHandler) {
    $ref(req)
  } else {
    req.respond({ body: 'hello world' })
  }
}

async function start (server) {
  for await (const req of server) {
    try {
      goGetRoutes(req)
    } catch (err) {
      console.error(err)
      req.respond({ body: 'we do not handle that method yet' })
    }
  }
}

export {
  start,
  router
}
