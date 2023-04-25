const fs = require('fs');
fs.readFile(__dirname + '\\assinment.txt', 'utf-8', funtion(error, data) {
    if (error) {
        console.error(error);
    } else {
        var count = 0 
        const lines = data.split("\n")
        for (var line in lines) {
            const words = line.split(" ")
            count = count + words.length
        }
        console.log(`Words: ${count}`)
    }

}); 