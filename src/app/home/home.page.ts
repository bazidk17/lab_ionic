import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  btnShow() {
    var x = document.getElementById("divstory");
    var y = document.getElementById("btnstory");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "Hide Story";
    } else {
      x.style.display = "none";
      y.innerHTML = "Read Story";
    }
  }

  showSkill1() {
    var x = document.getElementById("skillInformation");
    x.style.display = "block";
    x.innerHTML = "Repeatedly strikes the targeted unit with lightning. Each strike damages nearby enemy units in a small radius and slows enemy movement speed and attack speed by 100 for 0.1 seconds. Provides vision of its target.";
  }
  showSkill2() {
    var x = document.getElementById("skillInformation");
    x.style.display = "block";
    x.innerHTML = "Teleports the target hero back to where it was 4 seconds ago. Instantly kills illusions.";
  }
  showSkill3() {
    var x = document.getElementById("skillInformation");
    x.style.display = "block";
    x.innerHTML = "After a short formation time, creates a circular barrier of kinetic energy that enemies can't pass.";
  }
  showSkill4() {
    var x = document.getElementById("skillInformation");
    x.style.display = "block";
    x.innerHTML = "Creates a damaging static storm that also silences all enemy units in the area for the duration. The damage starts off weak, but increases in power over the duration.";
  }
  hideSkillInfo() {
    var x = document.getElementById("skillInformation");
    x.innerHTML = " ";
    x.style.display = "none";
  }
}
