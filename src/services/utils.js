export function limitAndPushArray(limit, items, itemIn) {
  let arr = [...items]
  let inItems = arr.findIndex(item => item === itemIn)
  if (inItems !== -1) {
    arr.splice(inItems, 1)
  } else {
    if (arr.length === limit) arr.pop()
  }
  arr.unshift(itemIn)
  return arr
}