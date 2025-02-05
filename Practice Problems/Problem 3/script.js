function calculateCuboid() {
    const length = parseFloat(document.getElementById("length").value);
    const breadth = parseFloat(document.getElementById("breadth").value);
    const height = parseFloat(document.getElementById("height").value);

    const totalSurface = 2 * (length * breadth + breadth * height + length * height);
    const volume = length * breadth * height;
    document.getElementById("result").textContent = `The TSA of cuboid is ${totalSurface} and the volume of cuboid is ${volume}.`;
}