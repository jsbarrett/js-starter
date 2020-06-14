// const fs = require('fs').promises
// const path = require('path')
// const { generateViews } = require('./views')
import { generateRoutes } from './routes.js'
// const { generateModel } = require('./model')
// const { generateController } = require('./controller')
// const { generateMigration } = require('./migration')

// TODO: can definitely do a lot more validation here
const validateInput = ({ tableName, rest }) => {
  rest.forEach(x => {
    if (x.split(':').length !== 3) {
      console.log('You are doing it wrong')
      Deno.exit(1)
    }
  })
}

async function main () {
  if (Deno.args.length > 0) {
    const tableName = Deno.args[0]
    const rest = Deno.args.slice(1)

    validateInput({ tableName, rest })

    const columns = rest.map(x => {
      const [name, dataType, required] = x.split(':')
      return {
        name,
        dataType,
        required
      }
    })

    // await generateMigration({ tableName, columns: rest })
    // await generateViews({ tableName, columns })
    await generateRoutes(tableName)
    // await generateModel({ tableName, columns })
    // await generateController({ tableName, columns })
  } else {
    // run other terminal ui option
    console.log('do other thing')
  }
}

main()
