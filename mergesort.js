/* eslint-disable complexity */
const split = (wholeArray) => {

  if (wholeArray.length === 1) {
    return [wholeArray]
  }

  let sliceIndex = Math.round(wholeArray.length / 2)

  let firstHalf = wholeArray.slice(0, sliceIndex)
  let secondHalf = wholeArray.slice(sliceIndex)

  return [...split(firstHalf), ...split(secondHalf)]
}

const merge = (arr1, arr2) => {
  let mergedArr = [];
  const newMergeFunc = () => {
    if (arr1.length === 0 || !arr1) {
      mergedArr.push(...arr2)
      return mergedArr;
    } else if (arr2.length === 0 || !arr2) {
      mergedArr.push(...arr1)
      return mergedArr;
    } else if (arr1.length === 1 && arr2.length === 1) {
      if (arr1[0] < arr2[0]) {
        mergedArr.push(arr1[0])
        mergedArr.push(arr2[0])
        return mergedArr;
      } else {
        mergedArr.push(arr2[0])
        mergedArr.push(arr1[0])
        return mergedArr
      }
    }

    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1[0])
      arr1.shift()
    } else {
      mergedArr.push(arr2[0])
      arr2.shift()
    }
    return newMergeFunc(arr1, arr2);
  }
  newMergeFunc(arr1, arr2)
  return mergedArr;
}

const mergeSort = (arr) => {
  let splitArr = split(arr)

  while (Array.isArray(splitArr[1])) {
    splitArr.push(merge(splitArr[0], splitArr[1]))
    splitArr.shift()
    splitArr.shift()
  }
  return splitArr[0];
}
