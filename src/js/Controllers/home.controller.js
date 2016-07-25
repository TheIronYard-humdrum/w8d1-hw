function HomeController (ContactService) {
  let vm = this;

  init();

  function init() {
    ContactService.getContacts().then( (res) => {
      vm.contacts = res.data;
    })
  }

}

HomeController.$inject = ['ContactService'];
export { HomeController };