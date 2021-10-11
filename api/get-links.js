const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

async function getList() {
  const databaseId = 'cbd8aa4912484612850172850d093308';
  const response = await notion.databases.query({ database_id: databaseId });

  const links = response.results
  .map(el => {
    const name = el.properties.Name.title[0].plain_text || ''
    const link = el.properties.Link.url || ''
    return `${name} - ${link}`
  })
  return links
}

module.exports = async (req, res) => { // this function will be launched when the API is called.
  try {
    res.send(await getList()) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}