import angular from 'angular';

import GroceryModule from '../grocery_items/grocery.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
	GroceryModule.name,
])
    .component('app', appComponent);

export default AppModule;
