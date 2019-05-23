describe('Bubble Sort', function(){
  beforeEach(() => {
      spyOn(Array.prototype, "sort").and.callThrough();
      spyOn(window, "swap").and.callThrough();
  })


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one item', function(){
      expect( bubbleSort([1]) ).toEqual( [1] );
    });
  it('it correctly sorts the array with ascending values', function(){
      expect( bubbleSort([8, 4, 5, 3, 7]) ).toEqual( [3, 4, 5, 7, 8] );
    });
  it('it modifies the original array', function(){
      let originalArr = [8, 4, 5, 3, 7]
      bubbleSort(originalArr)
      expect(originalArr).toEqual( [3, 4, 5, 7, 8] );
    });
  it('it should not use Array.prototype.sort', function(){
      let originalArr = [8, 4, 5, 3, 7]
      bubbleSort(originalArr)
      expect(Array.prototype.sort.calls.any()).toBe(false);
    });
  it('swap', function(){
      let originalArr = [8, 4, 5, 3, 7]
      bubbleSort(originalArr)
      expect(Array.prototype.sort.calls.any()).toBe(false);
    });
});



