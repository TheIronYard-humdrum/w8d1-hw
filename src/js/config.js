function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      templateUrl: 'templates/layout.tmpl.html',
      abstract: true
    })
    .state('root.home', {
      url: "/",
      templateUrl: './templates/home.tmpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.add', {
      url: "/add",
      templateUrl: './templates/addContact.tmpl.html',
      controller: 'AddController as vm'
    })
    .state('root.detail', {
      url: "/detail/:contact",
      templateUrl: './templates/detail.tmpl.html',
      controller: 'DetailController as vm'
    });

    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider']
export { config }