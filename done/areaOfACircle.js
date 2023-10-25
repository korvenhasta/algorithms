function circleArea(radius) {
  if (radius <= 0) {
    throw new Error("Error");
  }

  return parseFloat(Number(Math.PI * Math.pow(radius, 2)).toFixed(3));
}
