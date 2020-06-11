const fs = require('fs').promises
const path = require('path')
const { generateViews } = require('./views')
const { generateRoutes } = require('./routes')
const { generateModel } = require('./model')
const { generateController } = require('./controller')
const { generateMigration } = require('./migration')

// TODO: can definitely do a lot more validation here
const validateInput = ({ tableName, rest }) => {
  rest.forEach(x => {
    if (x.split(':').length !== 3) {
      console.log('You are doing it wrong')
      process.exit(1)
    }
  })
}

async function main () {
  if (process.argv.length > 2) {
    const tableName = process.argv[2]
    const rest = process.argv.slice(3)

    validateInput({ tableName, rest })

    const columns = rest.map(x => {
      const [name, dataType, required] = x.split(':')
      return {
        name,
        dataType,
        required
      }
    })

    await generateMigration({ tableName, columns: rest })
    await generateViews({ tableName, columns })
    await generateRoutes(tableName)
    await generateModel({ tableName, columns })
    await generateController({ tableName, columns })
  } else {
    // run other terminal ui option
  }
}

main()
