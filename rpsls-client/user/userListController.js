let userListController = [
  'userService',
  function(userService) {
    let ctrl = this;
    ctrl.init = () => {
      ctrl.users = userService.list();
    };
  }
];

export {
  userListController
}
