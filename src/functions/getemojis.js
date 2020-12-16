const fetch = require('node-fetch')
const { REACT_APP_FIREBASE_URI } = process.env

console.log(REACT_APP_FIREBASE_URI,'env')

exports.handler = async (event,context) => {
  
  console.log(REACT_APP_FIREBASE_URI,'inside lambda function')
  try {
    const response = await fetch(REACT_APP_FIREBASE_URI)
    const data = await response.json()
    console.log(data)
    return {
      statusCode:200,
      body: JSON.stringify(data)
    }
  } catch(err) {
    return {
      statusCode: 500,
      body: err.toString()
    }
  }
}