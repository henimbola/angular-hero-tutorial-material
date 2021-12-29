import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() hero!: Hero;

  @Output() onDeleteEvent = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.onDeleteEvent.emit(this.hero);
  }

}
