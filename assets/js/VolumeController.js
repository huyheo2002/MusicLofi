function showColor (rangeComponent) {
  let x = rangeComponent.value;
  let color = "linear-gradient(90deg, #f3a952 " + x + "%, #141414 " + x + "%)";
  rangeComponent.style.background = color;
}

export class VolumeController {
  constructor(component) 
  {
    this.component = component;
    this.component.addEventListener('mousemove', showColor(this.component));
  }
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import