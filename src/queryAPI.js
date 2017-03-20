import {IMGUR_CLIENT_ID} from './config'
import axios from 'axios'

const API_URL = 'https://api.imgur.com/3/gallery/search/top/'

export const queryAPI = (q, page) => 
    axios.get(API_URL + page + '/?q=' + q, {
        headers: {'Authorization': 'Client-ID ' + IMGUR_CLIENT_ID}
      })
      .then(function (response) {
        return {
            status: true,
            data: response.data.data
        }
      })
      .catch(function (error) {
        return {
            status: false,
            error: error
        }
      });