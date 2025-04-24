let fanStatus = false;
let fanSpeed = 0;

function toggleFan() {
    if (fanStatus == false) {
        fanStatus = true;
        fanSpeed = 1
        console.clear()
        console.log(`Fan is Open and fan Speed is ${fanSpeed} `)
    }
    else {
        fanStatus = false;
        console.log(`Fan is close`)
    }
}

function incrementSpeed() {
    if (fanSpeed <= 4 && fanStatus == true) {
        fanSpeed++;
        console.log(`fan speed is ${fanSpeed}`)
    }
}

function decrementSpeed() {
    if (fanSpeed > 1 && fanStatus == true) {
        fanSpeed--;
        console.log(`fan speed is ${fanSpeed}`)

    }
}