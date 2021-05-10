export function limitAndPushArray(limit, items, itemIn) {
  let arr = [...items]
  if (arr.length === limit) arr.pop()
  let inItems = arr.findIndex(item => item === itemIn)
  if (inItems !== -1) arr.splice(inItems, 1)
  arr.unshift(itemIn)
  return arr
}