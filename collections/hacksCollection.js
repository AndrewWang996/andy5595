HacksSchema = new SimpleSchema({
	hackName: {
		type: String,
		label: "Name of the hack... May be software, hardware, psychological, business, etc..."
	},
	hackDescription: {
		type: String,
		label: "Description of the hack... Try to make it around 50 words"
	},
	hackLink: {
		type: String,
		regEx: SimpleSchema.RegEx.Url,
		optional: true,
		label: "URL Link to the hack"
	},
	hackPicture: {
		type: String,
		optional: true,
		label: "File path to the picture of the hack"
	},
	hackPath: {
		type: String,
		optional: true,
		label: "File path to the actual hack."
	}
});

HacksCollection = new Mongo.Collection('hacks');
HacksCollection.attachSchema(HacksSchema);
