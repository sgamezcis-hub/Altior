const fs = require('fs')
const path = require('path')

const outDir = path.resolve(__dirname, '..', 'out')
const noJekyllPath = path.join(outDir, '.nojekyll')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

fs.writeFileSync(noJekyllPath, '')
console.log(`Created ${noJekyllPath}`)
