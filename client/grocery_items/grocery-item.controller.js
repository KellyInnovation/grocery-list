import { merge } from 'ramda';

function GroceryItemController() {
	const ctrl = this;
	ctrl.showControls = false;
	ctrl.editMode = false;
	ctrl.groceryToEdit = {};

	ctrl.setShowControls = function setShowControls(showControls) {
		ctrl.showControls = showControls;
	};

	ctrl.setEditMode = function setEditMode(editMode) {
		ctrl.editMode = editMode;
		ctrl.groceryToEdit = merge({}, ctrl.grocery);
	};

	ctrl.editGrocery = function editGrocery(groceryToEdit) {
		ctrl.update({ groceryToUpdate: groceryToEdit });
		ctrl.grocery = groceryToEdit;
		ctrl.editMode = false;
	};

	ctrl.deleteGrocery = function deleteGrocery() {
		ctrl.delete({ groceryToDelete: ctrl.grocery });
	};

	ctrl.checkGrocery = function checkGrocery() {		
		ctrl.grocery.checked = !ctrl.grocery.checked;
		ctrl.update({ groceryToUpdate: ctrl.grocery });
	};
}

export default GroceryItemController;