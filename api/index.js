const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send('Test') // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}