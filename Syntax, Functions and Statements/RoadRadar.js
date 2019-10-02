function radar(arr) {

   let speedByArea = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let currentSpeed = Number(arr[0]);
    let area = arr[1];

    if (currentSpeed > speedByArea[area] && currentSpeed <= speedByArea[area] + 20) {
        console.log("speeding");
    }
    else if (currentSpeed > speedByArea[area] + 20 && currentSpeed <= speedByArea[area] + 40) {
        console.log("excessive speeding");
    }
    else if (currentSpeed > speedByArea[area] + 40) {
        console.log("reckless driving");
    }
    else{
        console.log("")
    }

}

radar([91, "city"]);