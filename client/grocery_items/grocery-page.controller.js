import { findIndex } from 'ramda';

function GroceryPageController(groceryAPIService, flashesService, $interval) {
	const ctrl = this;
	ctrl.editedGrocery = {};


	function getGroceries() {
		groceryAPIService.groceries.get().$promise.then((data) => {
			ctrl.groceries = data.results;
		});
	};



	getGroceries();
	$interval(getGroceries, 50000);

	ctrl.saveGrocery = function saveGrocery(editedGrocery) {
		groceryAPIService.groceries.save(editedGrocery).$promise.then((savedGrocery) => {
			ctrl.groceries = [
				savedGrocery,
					ctrl.grocery,
			];
			ctrl.editedGrocery = {};
			flashesService.displayMessage('Item Added!', 'success');
		});
	};

	ctrl.updateGrocery = function updateGrocery(groceryToUpdate) {
		groceryAPIService.groceries.update(groceryToUpdate).$promise.then(() => {
			flashesService.displayMessage('Grocery Updated', 'success');
		});
	};

	ctrl.deleteGrocery = function deleteGrocery(groceryToDelete) {
		const findGrocery = findIndex(item => groceryToDelete.id ===item.id);
		const index = findGrocery(ctrl.groceries);

		if (index !== -1) {
			ctrl.groceries.splice(index, 1);
		}

		groceryAPIService.groceries.delete(groceryToDelete).$promise.then(() => {
			flashesService.displayMessage('Item Deleted', 'success');
		});
	};

}

export default GroceryPageController;