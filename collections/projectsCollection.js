ProjectsSchema = new SimpleSchema({
	projectName: {
		type: String,
		label: "Name of the project... May be software, hardware, psychological, business, etc..."
	},
	projectDescription: {
		type: String,
		label: "Description of the project... Try to make it around 50 words"
	},
	projectLink: {
		type: String,
		regEx: SimpleSchema.RegEx.Url,
		optional: true,
		label: "URL Link to the project"
	},
	projectPicture: {
		type: String,
		optional: true,
		label: "File path to the picture of the project"
	},
	projectPath: {
		type: String,
		optional: true,
		label: "File path to the actual project."
	}
});

ProjectsCollection = new Mongo.Collection('projects');
ProjectsCollection.attachSchema(ProjectsSchema);
