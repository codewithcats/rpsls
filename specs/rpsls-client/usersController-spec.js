describe('usersController', function() {

  var ds = {
    users: function() {}
  }, ctrl;

  beforeEach(module('rpsls.client'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('usersController', {
      usersDatasource: ds
    });
  }));

  describe('user list', function() {

    it('should store [1,2,3]', function() {
      var users = [1,2,3];
      spyOn(ds, 'users').and.returnValue(users);
      expect(ctrl.users).toBeUndefined();
      ctrl.init();
      expect(ctrl.users).toEqual(users);
    });

    it('should store []', function() {
      var users = [];
      spyOn(ds, 'users').and.returnValue(users);
      expect(ctrl.users).toBeUndefined();
      ctrl.init();
      expect(ctrl.users).toEqual(users);
    });

  });


});
