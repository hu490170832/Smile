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

export async function searchGoods(page=1,text) {
  var ret
  await axios.get(apiUrl.searchGoods,{
    params:{
      page,
      text,
      categoryId:''
    }
  })
  .then(function (response) {
    ret = response.data
  })
  .catch(function (error) {
    console.log(error);
  });
  return ret
}
