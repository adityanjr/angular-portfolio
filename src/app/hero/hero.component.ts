import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  about: string = `I have a passion for developing apps and websites and coding real world
  problems. I never stop learning and take every project as another
  adventure.`;

  bigName: string = "Aditya";

  options: AnimationOptions = {
    path: '/assets/astronaut.json',
  };
  constructor() {}
  ngOnInit(): void {}

  // This is the component function that binds to the animationCreated event from the package
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
