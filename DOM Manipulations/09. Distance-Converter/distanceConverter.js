function attachEventsListeners() {

    const meterConverter = {
        "km": function (input) {return input*1000},
        "m": function (input) {return input*1},
        "cm": function (input) {return input*0.01},
        "mm": function (input) {return input*0.001},
        "mi": function (input) {return input*1609.34},
        "yrd": function (input) {return input*0.9144},
        "ft": function (input) {return input*0.3048},
        "in": function (input) {return input*0.0254},
    }

    const converter = {
        "km": function (input) {return input/1000},
        "m": function (input) {return input/1},
        "cm": function (input) {return input/0.01},
        "mm": function (input) {return input/0.001},
        "mi": function (input) {return input/1609.34},
        "yrd": function (input) {return input/0.9144},
        "ft": function (input) {return input/0.3048},
        "in": function (input) {return input/0.0254},
    }
    
    const convertBtn = document.querySelector("#convert");
    convertBtn.addEventListener("click", convert);

    function convert(e){
        const button = e.target;
        const from = button.parentNode.querySelector("#inputUnits").value;
        const fromValue = button.parentNode.querySelector("#inputDistance").value;
        const to = button.parentNode.parentNode.querySelector("#outputUnits").value;
        
        let resultInMeters = meterConverter[from](fromValue);
        let result = converter[to](resultInMeters);

        button.parentNode.parentNode.querySelector("#outputDistance").value = result;
    } 
}