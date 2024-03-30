// Create a class named DevProphet
class DevProphet {
    constructor() {
        this.predictions = [];
    }

    // Method: make a prediction
    makePrediction(prediction) {
        this.predictions.push(prediction);
        console.log(`Made a prediction: ${prediction}`);
    }

    // Method: list all predictions
    listPredictions() {
        console.log("Predictions made by DevProphet:");
        this.predictions.forEach(prediction => {
            console.log(prediction);
        });
    }

    // Method: clear all predictions
    clearPredictions() {
        this.predictions = [];
        console.log("All predictions cleared.");
    }
}

// Create an instance of DevProphet named myDevProphet
const myDevProphet = new DevProphet();

// Make predictions
myDevProphet.makePrediction("Tomorrow's weather will be sunny.");
myDevProphet.makePrediction("The next big tech trend will be AI.");

// List all predictions
myDevProphet.listPredictions();

// Clear predictions
myDevProphet.clearPredictions();

// List predictions after clearing
myDevProphet.listPredictions();
