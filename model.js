
if (Meteor.isClient) {

}

if (Meteor.isServer) {
    Meteor.startup(function () {
    	var globalObject=Meteor.isClient?window:global;
		for(var property in globalObject){
			var object=globalObject[property];
			if(object instanceof Meteor.Collection){
				object.remove({});
		    }
		}

    	HacksCollection.insert({
    		hackName: "TripPlanner2000",
    		hackDescription: "Web Application allowing user to create a Path of multiple Locations. The user is able to modify the order of these locations and view the Path using Google Maps API.",
    		hackLink: "http://tripplanner2000.meteor.com/paths"
    	});

        HacksCollection.insert({
            hackName: "MangaScraper",
            hackDescription: "Scrapes your favorite Manga off the popular Manga site called KissManga."
        });

    	ProjectsCollection.insert({
    		projectName: "MyoMIDI",
    		projectDescription: "HackMIT 2015 Team Project. The user wears a Myo Armband that detects gestures and transmits them to the computer. The user can then play a MIDI instrument hooked up to the computer and wave his arm in the X,Y,Z directions to control pitch, volume, vibrato."
    	});

        ProjectsCollection.insert({
            projectName: "Move Your Glass",
            projectDescription: "My project at the MIT Media Lab with Niaja Farve uses the Google Glass, OpenCV, and deep learning algorithms to detect objects such as soda cans in the user's forward environment, circle them in red bold, and give the user certain signals such as 'Don't Drink!'"
        });

        ProjectsCollection.insert({
            projectName: "On Discontinuous Galerkin",
            projectDescription: "Paper on the Discontinuous Galerkin Method: a variant of the Finite Element Method in the context of seismic imaging.",
            projectPath: "/public/files/DG.pdf"
        });

    });
}



