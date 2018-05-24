import storage from 'good-storage'

const GOODSLIST_KEY = '__goodslist__'

export function addGoods(goodsInfo) {
  var goodsList = storage.get(GOODSLIST_KEY,[])
  var hasGoods = false
  if(goodsList.length==0) {
    goodsInfo.num = 1
    goodsList.push(goodsInfo)
  }else {
    goodsList.forEach(item => {
      if(item.goodsId==goodsInfo.goodsId){
        item.num++
        hasGoods =  true
      }
    });
    if(!hasGoods) {
      goodsInfo.num = 1
      goodsList.push(goodsInfo)
    }
  }
  storage.set(GOODSLIST_KEY,goodsList)
}

export function getGoodsList(goodsInfo) {
  return storage.get(GOODSLIST_KEY)
}