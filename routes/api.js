const express = require('express')

const router = express.Router()

router.get('/:time', (req, res) => {
    let userInpt = new Date(req.params.time)
    let arr = req.params.time.split('')
    let date = new Date( userInpt.getTime() + Math.abs(userInpt.getTimezoneOffset()*60000))
    
    if(arr.includes('-')){
        res.send(
            {
            unix : date.getTime(),
            utc :  date.toUTCString(),
        }
        )
    } else {
    let unix = req.params.time;
    let date = new Date(parseInt(unix))
    console.log(unix)
        res.send({
            unix : unix,
            utc : date.toUTCString(),
        
        })
    }

    
    
})


module.exports = router