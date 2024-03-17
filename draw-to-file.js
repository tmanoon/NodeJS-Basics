import fs from 'fs'

// drawSquareToFile()

function drawSquareToFile() {
    return new Promise((resolve, reject) => {
        const str = getSquare(getRandomIntInclusive(3, 20))
        drawToFile(str)
            .then(() => {
                resolve(setTimeout(drawSquareToFile, 6000))
            })
            .catch(err => reject(err))
    })
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    }
    str += '*'.repeat(size) + '\n'
    return str
}

function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min) + min) }

function drawToFile(str) {
    return new Promise((resolve, reject) => {
      fs.writeFile("data/pic.txt", str, (err) => {
        if (err) {
          reject(err)
        } else {
          fs.readFile("data/pic.txt", "utf8", (err, data) => {
            if (err) {
              reject(err)
            } else {
              console.log(data)
              resolve()
            }
          })
        }
      })
    })
  }