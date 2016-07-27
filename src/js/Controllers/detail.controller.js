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

  function submitEdit (edit) {
    if ( edit !== undefined ) {
      $scope.edit.name !== undefined ? vm.contact.name = $scope.edit.name : vm.contact.name = vm.contact.name;
      $scope.edit.email !== undefined ? vm.contact.email = $scope.edit.email : vm.contact.email = vm.contact.email;
      $scope.edit.phone !== undefined && Number($scope.edit.phone) ? vm.contact.phone = $scope.edit.phone : vm.contact.email = vm.contact.email;
      $scope.edit.address !== undefined ? vm.contact.phone = $scope.edit.address : vm.contact.email = vm.contact.email;
    }
    ContactService.updateContact(vm.contact).then( (res) => {
      $state.go('root.detail', {id: res.data._id}, {reload: true})
    });
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