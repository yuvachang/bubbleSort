describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); 
      });

      it('swap was called', function () {
        window.bubbleSort([2,3,5,7,1,6,4,9]);
        expect(window.swap.calls.count()).toEqual(8);
      });

///////////////////
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an nonempty array', function(){
        expect( bubbleSort([2,3,5,7,1,6,4,9]) ).toEqual( [1,2,3,4,5,6,7,9] );
      });

    it('handles an nonempty array', function(){
        expect( bubbleSort([2,9,7,5,1,6,4,3]) ).toEqual( [1,2,3,4,5,6,7,9] );
      });

  });

// [2,3,5,7,1,6,4,9] = [1,2,3,4,5,6,7,9]
