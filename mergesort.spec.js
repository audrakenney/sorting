describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    const testArray = [8, 4, 3, 5, 7, 2]
    expect( split(testArray) ).toEqual( [[8], [4], [3], [5], [7], [2]] )
  });

  it('returns whole array if the length is 1', function() {
    expect( split([1]) ).toEqual( [[1]] )
  })
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([3, 4, 8], [2, 5, 7]) ).toEqual( [2, 3, 4, 5, 7, 8] )
  });
});

describe('mergeSort function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([8, 4, 3, 5, 7, 2]) ).toEqual( [2, 3, 4, 5, 7, 8] )
    expect( mergeSort([8, 4, 3, 5, 7]) ).toEqual( [3, 4, 5, 7, 8] )
    expect( mergeSort([11, 53, 76, 1, 99]) ).toEqual( [1, 11, 53, 76, 99] )
    expect( mergeSort([11, -53, 76, 1, -99]) ).toEqual( [-99, -53, 1, 11, 76 ] )
  });
});
