const random_s = require('randomstring')
const os = require('os')
const fs  = require('fs')
const { default: random } = require('random')
// tnayin 1
// console.log('memory in your computer: ',os.totalmem())


// tnayin 2x
// let b = null
// const a = os.networkInterfaces()
// for (const key in a) {
//     b = a[key]
//     break;
// }
// for (const i of b) {
//     if (i.family  === 'IPv4'){
//         console.log(i.address)
//     }
// }

// tnayin 3
// fs.writeFile(`${random_s.generate(8)}.txt`,`${JSON.stringify(os.cpus())}`,(err)=>{
//     if (err){
//         throw err
//     }
// })
// console.log(os.cpus())
fs.readFile('input.txt','UTF-8',(err,data)=>{
    let a = data.split(' ').join('-')
    fs.writeFile('write.txt',`${a}`,(err)=>{
        if (err){
            throw err
        }
    })
})