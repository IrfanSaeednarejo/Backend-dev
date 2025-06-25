const fs = require('fs')

const readStream= fs.createReadStream('./docs/page2.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/page3.txt')


readStream.on('data', (chunk) => {
    console.log('----New Chunk----')
    console.log(chunk)
    writeStream.write('\nNEW CHUNK:\n')
    writeStream.write(chunk)
})

// Pipe
// readStream.pipe(writeStream)