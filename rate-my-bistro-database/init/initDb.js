// Create database
db._createDatabase(process.env.ARANGO_DB_NAME, null, [{username: process.env.ARANGO_DB_USER, password: process.env.ARANGO_DB_PASSWORD}]);
db._useDatabase(process.env.ARANGO_DB_NAME);

// Create collections
db._create('menus');

// Create mock data
db.menus.save({ id: '1', served_at: '2020-10-10', name: 'Chili Noodles', image: 'http://image-provider.cdn/chili.png', price: { value: 7.99, currency: 'EUR' }, originalSupplements: [{ name: 'Salad', price: { value: 2.99, currency: 'EUR' }}], manadatorySupplements: [{ name: 'Salad', price: { value: 2.99, currency: 'EUR' }}] });
db.menus.save({ id: '2', served_at: '2020-10-11', name: 'Tomato Noodles', image: 'http://image-provider.cdn/tomato.png', price: { value: 5.99, currency: 'EUR' }, originalSupplements: [{ name: 'Fries', price: { value: 3.99, currency: 'EUR' }}], manadatorySupplements: [{ name: 'Salad', price: { value: 2.99, currency: 'EUR' }}] });
