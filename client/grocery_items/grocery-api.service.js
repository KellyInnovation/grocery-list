
function groceryAPIService($resource) {
	const api = {
		groceries: $resource('/api/grocery_items/:id'),
			
	};

	return api;
}

export default groceryAPIService;