const mongoose = require('mongoose');

/**
 * All the existing collections
 * @type {any}
 */
let models = {};

/**
  * Connecting to the mongo database
  *
  * @param {string} link
  * @param {string} database
  *
  * @return {Promise<any>}
  */
async function connection(link, database) {
	return await mongoose.connect(`mongodb://${link}/${database}`);
}

/**
 * Initialize the database and models
 *
 * @param {string} link
 * @param {string} database
 * @param {[{name: string, model: mongoose.Schema}]} schema
 *
 * @return {object} with model names as keys and schema as value
 */
async function initialize(link, database, schema) {
	await connection(link, database);
	for(let i = 0; i < schema.length; i++) {
		models[schema[i].name] = await mongoose.model(schema[i].name, schema[i].model);
	}
	return models;
}

/**
 * Get all data that fits the query object from the collection
 *
 * @param {string} collection
 * @param {object} criteria
 * @param {boolean} all
 *
 * @return {Promise<*>}
 */
async function getAsync(collection, criteria = {}, all = false) {
	isValidCollection(collection, true);
	if (all) {
		return await models[collection].find(criteria);
	}
	return await models[collection].findOne(criteria);
}

/**
 * Add a document in a collection
 *
 * @param {string} collection
 * @param {object} criteria
 * @param {boolean} replace
 *
 * @return {Promise<*>}
 */
async function addAsync(collection, criteria, replace = false) {
	isValidCollection(collection, true);
	if (replace) {
		return await models[collection].findOneAndReplace(criteria);
	}
	return await models[collection](criteria).save();
}

/**
 * Modify documents in a collection
 *
 * @param {string} collection
 * @param {object} criteria
 * @param {boolean} all
 *
 * @return {Promise<*>}
 */
async function modifyAsync(collection, criteria, all = false) {
	isValidCollection(collection, true);
	if (all) {
		return await models[collection].findAndModify(criteria._id, criteria);
	}
	return await models[collection].findOneAndUpdate(criteria._id, criteria);
}

/**
 * Delete documents in a collection fitting the criteria
 *
 * @param {string} collection
 * @param {object} criteria
 * @param {boolean} all
 *
 * @return {Promise<*>}
 */
async function deleteAsync(collection, criteria, all = false) {
	isValidCollection(collection, true);
	if (all) {
		return await models[collection].deleteMany(criteria);
	}
	return await models[collection].deleteOne(criteria);
}

/**
 * Verify if the collection is in the models object
 *
 * @param {string} collection
 * @param {boolean} throws
 */
function isValidCollection(collection, throws = false) {
	if (!throws) {
		return models[collection];
	}
	if (!models[collection]) {
		throw new Error(`${collection} is not a valid collection`);
	}
}

module.exports = {
	initialize,
	isValidCollection,
	getAsync,
	addAsync,
	modifyAsync,
	deleteAsync,
	Schema: mongoose.Schema
}
