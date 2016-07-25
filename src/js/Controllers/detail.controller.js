function DetailController (ContactService, $stateParams) {
  let vm = this;
  init();

  function init() {
    ContactService.getContact($stateParams.contact).then ( (res) => {
      vm.contact = res.data
    });
  }
}
DetailController.$inject = ['ContactService', '$stateParams'];
export { DetailController };