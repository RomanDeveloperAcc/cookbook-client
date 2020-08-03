import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public foodImg = {
    pizza: 'assets/img/about-page/pizza.jpg',
    food: 'assets/img/about-page/food.jpg',
    healthy: 'assets/img/about-page/healthy.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
