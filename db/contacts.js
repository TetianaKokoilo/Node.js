const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// Розкоментуйте і запиши значення
const contactsPath = path.join(__dirname, "contacts.json");
// console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function listContacts() {
	const data = await fs.readFile(contactsPath);
	//   console.log(data);
	return JSON.parse(data);
}

async function getContactById(id) {
	const contacts = await listContacts();
	const result = contacts.find((contact) => contact.id === id);
	return result || null;
}

async function removeContact(id) {
	const contacts = await listContacts();
	const deleteIndex = contacts.findIndex((index) => index.id === id);
	if (deleteIndex === -1) {
		return null;
	}
	const [result] = contacts.splice(deleteIndex, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return result;
}

async function addContact(data) {
	const contacts = await listContacts();
	const newContact = {
		id: nanoid(),
		...data,
	};
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return newContact;
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
