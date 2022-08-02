const mongoose = require('mongoose')
const randomstring = require('randomstring')

const config = require('../config/config')
const SecretKey = require('../models/SecretKey')

let getTime = () => {
     let dataNow = new Date()
     return (dataNow.getHours() + ':' + dataNow.getMinutes() + ':' + dataNow.getSeconds())
}

let intervalChanger = (key) => {
     setInterval(async() => {
               let newKeyValue = randomstring.generate(50)
               key.Value = newKeyValue
               await key.save().then(console.log('Secret key changed. Time ' + getTime()))
          },config.timeInterval*60000
     )
}

let createSecretKey = async (keyName) => {
     let newKey = new SecretKey({
          Type:keyName,
          Value:''
     })
     await newKey.save().then((key) => {intervalChanger(key)})
}

let findSecretKey = async (keyName) => {
     let findKey = await SecretKey.findOne(
          {Type: keyName}
     )
     .then(async(findKey) => {
          if(!findKey) {
               createSecretKey(keyName)
               console.log('Created new key')     
          } else {
               intervalChanger(findKey)
               console.log('Secret key find')
          }
     })
}

module.exports = findSecretKey(config.keyType)