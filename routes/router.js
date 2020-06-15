const routes = {
  GET: {},
  POST: {}
}

const registerRoute = (method) => (url, cb) => {
  const parts = url.split('/')
  const dynamicParts = parts
    .filter(x => x[0] === ':')
    .map(x => {
      return {
        string: x,
        index: parts.indexOf(x)
      }
    })

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
  return function (ctx) {
    const urlParts = ctx.request.url.pathname.split('/')
    if (dynamicParts.length > 0) ctx.request.params = {}

    for (let param of dynamicParts) {
      const name = param.string.slice(1)
      ctx.request.params[name] = urlParts[param.index]
    }

    return cb(ctx)
  }
}

const goGetRoutes = (ctx) => {
  const parts = ctx.request.url.pathname.split('/').slice(1)

  let $ref = routes[ctx.request.method]
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
    $ref(ctx)
  } else {
    ctx.response.body = 'That route is not recognized'
  }
}

async function start (ctx) {
  try {
    goGetRoutes(ctx)
  } catch (err) {
    console.error(err)
    req.respond({ body: 'there was a problem with the request' })
  }
}

export {
  start,
  router
}
