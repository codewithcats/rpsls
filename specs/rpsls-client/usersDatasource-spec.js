describe('usersDatasource', function() {

  var usersDatasource,
    Firebase;

  beforeEach(module('rpsls.client'));

  beforeEach(inject(function(_usersDatasource_, _Firebase_) {
    usersDatasource = _usersDatasource_;
    Firebase = _Firebase_;
  }));

  it('should return users Firebase object', function() {
    var users = usersDatasource.users();
    expect(users.$ref() instanceof Firebase).toBe(true);
    expect(users.$ref().toString()).toBe('https://rpslsonline.firebaseio.com/users');
  });

});
