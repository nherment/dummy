describe('jquery', function() {

  it("should work", function(done) {

    $.get('http://localhost:3000/hello.txt', function(data) {
      if(data === 'Hello World') {
        done();
      } else {
        done(new Error("data not as expected: "+data))
      }
    })

  })

})