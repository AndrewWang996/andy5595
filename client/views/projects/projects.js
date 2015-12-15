Template.projects.helpers({
	getProjects: function() {
		return ProjectsCollection.find();
	}
});