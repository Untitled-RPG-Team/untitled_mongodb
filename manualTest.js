const mongo = require('./index.js');
const {Schema} = require('mongoose');

const schema = [
	{
		name: 'accounts',
		model: new Schema({
			username: {type: String, required: true},
			password: {type: String, required: true},
			created_at: {type: Date, default: Date.now},
			updated_at: {type: Date, default: null},
		}),
	}
];

mongo.initialize('mongo', 'test', schema)
	.then(() => mongo.addAsync('accounts', {username: 'hey', password: '123'}))
	.then(() => mongo.getAsync('accounts'))
	.then((res) => {
		console.log(res);
		return mongo.modifyAsync("accounts", {_id: res._id, username: "test"});
	})
	.then((res) => mongo.deleteAsync('accounts', {_id: res._id}))
	.then(() => mongo.getAsync('accounts'))
	.then(console.log)
	.catch(console.log);
