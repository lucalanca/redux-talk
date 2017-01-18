export const arrayfyObject = (obj) =>
  Object.keys(obj)
    .map(id => Object.assign({}, obj[id], { id }))

export const removeKeyFromObject = (obj, key) => {
  let res = Object.assign({}, obj)
  delete res[key]
  return res;
}

export const dateToString = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
