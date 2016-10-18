
function groceryAPIService($resource) {
	const api = {
		groceries: $resource('/api/grocery_items/:id',
			{ id: '@id' },
			{
				update: {
					method: 'PUT',
				},
			}),
	};

	return api;
}

export default groceryAPIService;