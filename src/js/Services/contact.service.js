function ContactService ($http, SERVER) {
  this.createContact = createContact;
  this.getContacts   = getContacts;
  this.getContact    = getContact;
  this.updateContact = updateContact;
  this.deleteContact = deleteContact;

  function createContact (contact) {
    return $http.post(SERVER.URL, contact);
  }

  function getContacts() {
    return $http.get(SERVER.URL);
  }

  function getContact(id) {
    return $http.get(SERVER.URL + id);
  }

  function updateContact(contact) {
    return $http.put(SERVER.URL + contact._id, contact)
  }

  function deleteContact(contact) {
    return $http.delete(SERVER.URL + contact._id);
  }

}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService };