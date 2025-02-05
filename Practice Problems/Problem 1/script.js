//volume of sphere
function calculateVolume() {
    const radius = document.getElementById("radius").value;
    if (radius) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("result").textContent = `The volume of the sphere is ${volume.toFixed(2)} cubic units.`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid radius.";
    }
}

