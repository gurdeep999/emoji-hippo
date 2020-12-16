const fetch = require('node-fetch')
const { REACT_APP_FIREBASE_URI } = process.env



exports.handler = async (event,context) => {
  
  console.log('inside lambda function')
  try {
    const response = await fetch(`${REACT_APP_FIREBASE_URI}`)
    const data = await response.json()
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