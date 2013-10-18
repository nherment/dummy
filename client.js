describe('jquery', function() {

  it("should work", function(done) {

    $.get('http://localhost:3000/hello.txt', function(data) {
      done();
    })

  })

})