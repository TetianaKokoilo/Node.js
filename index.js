const contacts = require("./db/contacts");
// console.log(contacts);
// index.js
// const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			return console.log(allContacts);
			break;

		case "get":
			const getContactById = await contacts.getContactById(id);
			return console.log(getContactById);
			break;

		case "add":
			const newContact = await contacts.addContact({ name, email, phone });
			return console.log(newContact);
			break;

		case "remove":
			const removeContact = await contacts.removeContact(id);
			return console.log(removeContact);
			break;

		//     default:
		//       console.warn("\x1B[31m Unknown action type!");
	}
}

// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({ action: "add", name: "Tetiana Kokoilo", email: "kokoiloteitana@gmail.com", phone: "(098) 456-9977" });
// invokeAction({ action: "remove", id: "YGV5ZEpjOS5coNKNUfnrb"});
