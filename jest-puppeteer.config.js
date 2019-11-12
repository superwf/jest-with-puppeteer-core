require('module-alias/register')
const chromePaths = require('chrome-paths')

module.exports = {
  launch: {
    headless: false,
    slowMo: 250,
    timeout: 0,
    executablePath: chromePaths.chrome,
  },
}
