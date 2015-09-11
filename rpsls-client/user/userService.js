let userService = [
  '$firebaseObject', 'Firebase',
  function($firebaseObject, Firebase) {
    return {
      list() { return $firebaseObject(new Firebase('https://rpslsonline.firebaseio.com/users')); }
    };
  }
];

export {
  userService
}
