require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

const githubData = {
  "login": "keshavchaudhary",
  "id": 43464967,
  "node_id": "MDQ6VXNlcjQzNDY0OTY3",
  "avatar_url": "https://avatars.githubusercontent.com/u/43464967?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/keshavchaudhary",
  "html_url": "https://github.com/keshavchaudhary",
  "followers_url": "https://api.github.com/users/keshavchaudhary/followers",
  "following_url": "https://api.github.com/users/keshavchaudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/keshavchaudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/keshavchaudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/keshavchaudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/keshavchaudhary/orgs",
  "repos_url": "https://api.github.com/users/keshavchaudhary/repos",
  "events_url": "https://api.github.com/users/keshavchaudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/keshavchaudhary/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Keshav Chaudhary",
  "company": "Kasturi Sanjaal Private Limited",
  "blog": "",
  "location": "Devchuli-17,Kujauli",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2018-09-21T07:17:49Z",
  "updated_at": "2018-12-25T05:52:35Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('keshavdotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1> plaease login in this page </h1>')
})

app.get('/youtube', (req,res) => {
  res.send("<h2>chai aur code</h2>")
})

app.get('/github',(req,res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})