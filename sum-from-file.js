import fs from 'fs'

function sumFromFile(pathToFile) {
    function sum(nums) {
        let numsArr = nums.split('\n')
        numsArr = numsArr.map(num => parseInt(num))
        const sum = numsArr.reduce((acc, num) => acc + num)
        return sum
    }

    return new Promise((resolve, reject) => {
        fs.readFile(pathToFile, 'utf8', (error, content) => {
            if(error) reject(error)
            else resolve(sum(content))
        })
    })
}

sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))

