import storage from 'good-storage'

const GOODSLIST_KEY = '__goodslist__'

export function addGoods(goodsInfo,count) {
  var goodsList = storage.get(GOODSLIST_KEY,[])
  var index = goodsList.findIndex(v=>v.goodsId==goodsInfo.goodsId)
  if(index<0) {
    goodsInfo.num = count
    goodsInfo.checked = true 
    goodsList.push(goodsInfo)
  }else {
    goodsList[index].num+=count
  }
  storage.set(GOODSLIST_KEY,goodsList)
}
export function subGoods(index) {
  var goodsList = storage.get(GOODSLIST_KEY)
  goodsList.splice(index,1)
  storage.set(GOODSLIST_KEY,goodsList)
}

export function changeGoodNum(index,value) {
  var goodsList = storage.get(GOODSLIST_KEY)
  goodsList[index].num = value
  storage.set(GOODSLIST_KEY,goodsList)
}

export function getGoodsList(goodsInfo) {
  return storage.get(GOODSLIST_KEY) ? storage.get(GOODSLIST_KEY): []
}

export function clearGoodsList() {
  storage.remove(GOODSLIST_KEY)
}