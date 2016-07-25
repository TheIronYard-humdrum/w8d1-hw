import angular from 'angular';
import 'angular-ui-router';

// Import our Config & Constant
import { config } from './config';
import { serverConstant } from './server.constant';

// Import our Controllers
import { HomeController } from './Controllers/home.controller';
import { AddController } from './Controllers/add.controller'
import { DetailController } from './Controllers/detail.controller'
//Import our Services
import { ContactService } from './Services/contact.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('DetailController', DetailController)
  .service('ContactService', ContactService)
;