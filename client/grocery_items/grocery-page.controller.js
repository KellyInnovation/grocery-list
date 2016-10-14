import { findIndex } from 'ramda';

function GroceryPageController(groceryAPIService, $interval) {
	const ctrl = this;
	ctrl.editedGrocery = {};

	function getGroceries() {
		groceryAPIService.groceries.get().$promise.then((data) => {
			ctrl.groceries = data.results;
		});
	};

	getGroceries();
	$interval(getGroceries, 5000);

	ctrl.saveGrocery = function saveGrocery(editedGrocery) {
		groceryAPIService.groceries.save(editedGrocery).$promise.then((savedGrocery) => {
			ctrl.groceries = [
				savedGrocery,
					ctrl.grocery,
			];
			ctrl.editedGrocery = {};
			alert('created');
		});
	};



}

export default GroceryPageController;