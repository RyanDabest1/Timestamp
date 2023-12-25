const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    let date = new Date()
    res.send(
        {
        unix : date.getTime(),
        utc : date.toUTCString(),
        }
    )
})

router.get('/:date', (req, res) => {
    let userInpt = new Date(req.params.date)
    let arr = req.params.date.split('')
    let date = new Date( userInpt.getTime() + Math.abs(userInpt.getTimezoneOffset()*60000))
    
    if(arr.includes('-')){
        if(date == "Invalid Date"){
            res.send({
                error : "Invalid Date"
            })
        }
        res.send(
            {
            unix : date.getTime(),
            utc :  date.toUTCString(),
        }
        )
    } else {
    let unix = req.params.date;
    let date = new Date(parseInt(unix))
    console.log(unix)
        res.send({
            unix : date.getTime(),
            utc : date.toUTCString(),
        
        })
    }

    
    
})


module.exports = router