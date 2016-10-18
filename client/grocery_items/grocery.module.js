import angular from 'angular';
import 'angular-resource';
import 'angular-animate';
import 'angular-filter';

import FlashesModule from '../flashes/flashes.module';

import groceryPageComponent from './grocery-page.component';
import groceryItemComponent from './grocery-item.component';
import groceryEditComponent from './grocery-edit.component';

import groceryAPIService from './grocery-api.service';

const GroceryModule = angular.module('groceries', [
	'ngResource',
	'ngAnimate',
	'angular.filter',
	FlashesModule.name,
])
	.config(($resourceProvider) => {
		$resourceProvider.defaults.stripTrailingSlashes = false;
	})
	.factory('groceryAPIService', groceryAPIService)
	.component('groceryPage', groceryPageComponent)
	.component('groceryItem', groceryItemComponent)
	.component('groceryEdit', groceryEditComponent);

export default GroceryModule;