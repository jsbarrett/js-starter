import { dirname } from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

const files = Deno.readDirSync(path.resolve(dirname(import.meta), './definitions'))

for (const file of files) {
  import(path.resolve(dirname(import.meta), './definitions/' + file.name))
}

