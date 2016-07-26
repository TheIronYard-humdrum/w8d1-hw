function DetailController (ContactService, $stateParams, $state, $scope) {

  let vm = this;

  this.edit = false;
  vm.editMode = editMode;
  vm.isEditMode = isEditMode;
  vm.deleteCon = deleteCon;
  vm.submitEdit = submitEdit;

  init();

  function deleteCon (contact, $scope) {
    ContactService.deleteContact(contact).then( (res) => {
      $state.go('root.home')
    });
  }

  function submitEdit() {
    $scope.new.newName !== undefined ? vm.contact.name = $scope.new.newName : vm.contact.name = vm.contact.name;
    console.log(vm.contact);
  }

  function editMode() {
    this.edit = !this.edit;
  }

  function isEditMode() {
    return !this.edit;
  }

  function init() {
    console.log(vm.deleteCon)
    ContactService.getContact($stateParams.contact).then ( (res) => {
      vm.contact = res.data
    });
    console.log(vm.contact)
  }

}
DetailController.$inject = ['ContactService', '$stateParams', '$state', '$scope'];
export { DetailController };