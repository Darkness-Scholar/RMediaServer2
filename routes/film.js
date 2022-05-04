import axios from "axios"
import express from 'express'
export const film = express.Router()

var config = {
  method: 'get',
  url: 'https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0',
  headers: { 
    'lang': 'en', 
    'versioncode': '11', 
    'clienttype': 'ios_jike_default'
  }
};

film.get("/homepage", async (req, res) => {
    let page = req.query.page?req.query.page:0
    try {
      let result = await axios.get(`https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=${page}`, { headers:config.headers })
      res.status(200).json(result.data)
    } catch (err) {
      res.status(500).json(err)
    }
})

// https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0
// https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=6432&category=1

film.get("/detail", async (req, res) => {
  let { id, category } = req.query
  if (category == 0) {
    try {
      let result = await axios.get(`https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=0`, { headers:config.headers })
      res.status(200).json(result.data)
    } catch (err) {
      res.status(500).json(err)
    }
  } if (category == 1) {
    try {
      let result = await axios.get(`https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=1`, { headers:config.headers })
      res.status(200).json(result.data)
    } catch (err) {
      res.status(500).json(err)
    }
  }
})