// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocatio){
    const hqLocation = 42;
    return Math.abs(pickupLocatio - hqLocation);
}

// Function to calculate the distance in feet from Scuber headquarters
function distanceFromHqInFeet(pickupLocatio){
    const blocks= distanceFromHqInBlocks(pickupLocatio);
    const feetPerBlock= 264;
    return blocks * feetPerBlock;
}

// Function to calculate the distance traveled in feet between two locations
function distanceTravelledInFeet(startBlock, distinationBlock){
    const blockTravelled= Math.abs(distinationBlock - startBlock);
    const feetPerBlock=264;
    return blockTravelled * feetPerBlock;
}
// Function to calculate the fare price based on distance
function calculatesFarePrice(startBlock, distinationBlock){
    const feetTravelled=distanceTravelledInFeet(startBlock, distinationBlock);

// Fare calculation
    if (feetTravelled <= 400) {
        return 0; // First 400 feet are free
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
    // Price for distance between 400 and 2000 feet
        const pricePerFoot = 0.02;
        return (feetTravelled - 400) * pricePerFoot;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
    // Flat fare for distance between 2000 and 2500 feet
        return 25;
    } else {
    // Scuber does not allow rides over 2500 feet
        return 'cannot travel that far';
    }
}