// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// }) 


const sumMath = (x, y, callback) => {
    setTimeout(()=>{
        const sum = x + y
        callback(sum)
    }, 2000)
}

sumMath(1, 4, (sum)=>{
    console.log(sum);
})