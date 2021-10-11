const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

function debug(req) {
  return req.body
}

module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send(debug(req)) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}