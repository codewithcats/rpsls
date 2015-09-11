describe('registerController', function() {

  var ctrl, $httpBackend;

  beforeEach(module('rpsls.client'));

  beforeEach(inject(function($controller, _$httpBackend_) {
    ctrl = $controller('registerController');
    $httpBackend = _$httpBackend_;
  }));

  it('should register user to registration server', function() {
    var username = 'Iff';
    $httpBackend.expectPOST('/register', {name: username}).respond({});
    ctrl.register(username);
    $httpBackend.flush();
  });

  it('should register user to registration server', function() {
    var username = 'Tobey';
    $httpBackend.expectPOST('/register', {name: username}).respond({});
    ctrl.register(username);
    $httpBackend.flush();
  });


});
