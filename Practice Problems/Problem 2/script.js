function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    if (length !== 0 && width !== 0) {
        const area = length * width;
        const perimeter = 2 * (length + width);
        document.getElementById("result").textContent = `The area of the rectangle is ${area} square units, and the perimeter is ${perimeter} units.`
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers for length and width."
    }
}