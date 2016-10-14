import angular from 'angular';
import 'angular-resource';

import groceryPageComponent from './grocery-page.component';
import groceryItemComponent from './grocery-item.component';
import groceryEditComponent from './grocery-edit.component';

import groceryAPIService from './grocery-api.service';

const GroceryModule = angular.module('groceries', [
	'ngResource',
])
	.config(($resourceProvider) => {
		$resourceProvider.defaults.stripTrailingSlashes = false;
	})
	.factory('groceryAPIService', groceryAPIService)
	.component('groceryPage', groceryPageComponent)
	.component('groceryItem', groceryItemComponent)
	.component('groceryEdit', groceryEditComponent);

export default GroceryModule;