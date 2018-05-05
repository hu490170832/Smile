import axios from 'axios'
import apiUrl from './config'

export async function getIndexData() {
  var ret
  await axios.get(apiUrl.index)
  .then(function (response) {
    ret = response.data
  })
  .catch(function (error) {
    console.log(error);
  });
  return ret
}