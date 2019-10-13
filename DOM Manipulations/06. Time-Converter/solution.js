function attachEventsListeners() {

    let convertions = {
        "days": function (days) {
            let hours = days * 24;
            let minutes = hours * 60;
            let seconds = minutes * 60;

            return [hours, minutes, seconds];
        },

        "hours": function (hours) {
            let days = hours / 24;
            let minutes = hours * 60;
            let seconds = minutes * 60;

            return [days, minutes, seconds];
        },

        "minutes": function (minutes) {
            let seconds = minutes * 60;
            let hours = minutes / 60;
            let days = hours / 24;

            return [days, hours, seconds];
        },

        "seconds": function (seconds) {
            let minutes = seconds / 60;
            let hours = minutes / 60;
            let days = hours / 24;

            return [days, hours, minutes];
        }
    }

    let buttons = Array.from(document.querySelectorAll("input[type=button]"));
    buttons.map(x => x.addEventListener("click", function convert(e) {
        let type = e.target.getAttribute("id");
        let number = ""

        if (type === "daysBtn") {
            number = document.getElementById("days").value;
            [hours, minutes, seconds] = convertions["days"](number);
            document.getElementById("hours").value = hours;
            document.getElementById("minutes").value = minutes;
            document.getElementById("seconds").value = seconds;
        }

        if (type === "hoursBtn") {
            number = document.getElementById("hours").value;
            [days, minutes, seconds] = convertions["hours"](number);
            document.getElementById("days").value = days;
            document.getElementById("minutes").value = minutes;
            document.getElementById("seconds").value = seconds;
        }

        if (type === "minutesBtn") {
            number = document.getElementById("minutes").value;
            [days, hours, seconds] = convertions["minutes"](number);
            document.getElementById("days").value = days;
            document.getElementById("hours").value = hours;
            document.getElementById("seconds").value = seconds;
        }

        if (type === "secondsBtn") {
            number = document.getElementById("seconds").value;
            [days, hours, minutes] = convertions["seconds"](number);
            document.getElementById("days").value = days;
            document.getElementById("hours").value = hours;
            document.getElementById("minutes").value = minutes;
        }

    }));

}