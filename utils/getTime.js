const getTime = () => {
     let dataNow = new Date()
     return ('Time - ' + dataNow.getHours() + ':' + dataNow.getMinutes() + ':' + dataNow.getSeconds())
}

module.exports = getTime