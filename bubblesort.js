const bubbleSort = (arr) => {

  let counter = 0;
  if (arr.length < 2) {
      return arr;
  }
  for (let i = 0; i < arr.length - 1; ++i) {
      let curr = arr[i]
      let next = arr[i + 1]
      if (curr > next){
          arr[i] = next
          arr[i + 1] = curr
          ++counter
          swap();
      }
  }
  if (counter === 0) {
      return arr
  } else {
      return bubbleSort(arr);
  }
}


function swap() {
}
