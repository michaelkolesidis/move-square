let areaSize = {
    width: 50,
    height: 50
};

let position = {
    x: 25,
    y: 25
};

let moveRate = 10;
let area = document.getElementById("area");

// Update y-axis position.
function updateYPosition(distance) {
    position.y -= distance;
    // Keep square inside the area
    if (position.y < 0) {
        position.y = 499;
    } else if (position.y > 499) {
        position.y = 0;
    }
}

// Update x-axis position.
function updateXPosition(distance) {
    position.x += distance;
    // Keep square inside the area
    if (position.x < 0) {
        position.x = 499;
    } else if (position.x > 499) {
        position.x = 0;
    }
}

function refreshPosition() {
    let x = position.x - (areaSize.width / 2);
    let y = position.y - (areaSize.height / 2);
    let transform = "translate(" + x + " " + y + ")";

    area.setAttribute("transform", transform);
}

window.addEventListener("keydown", function (event) {
    // console.log(event);
    if (event.defaultPrevented) {
        return;
    }
    if (event.code === "ArrowDown") {
        // Handle "down"
        updateYPosition(-moveRate);
    } else if (event.code === "ArrowUp") {
        // Handle "up"
        updateYPosition(moveRate);
    } else if (event.code === "ArrowLeft") {
        // Handle "left"
        updateXPosition(-moveRate);
    } else if (event.code === "ArrowRight") {
        // Handle "right"
        updateXPosition(moveRate);
    }
    refreshPosition();
    event.preventDefault();
});