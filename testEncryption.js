try {
  const env = require('./env.json')
  if (env.testEncryption === 'Encryption is working.') {
    console.log('env.json decrypted successfully.')
  }
} catch (error) {
  console.log("Couldn't read env.json.")
  console.log(error)
}
