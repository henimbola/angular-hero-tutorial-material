import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((datas: Hero[]) => this.heroes = datas);
  }

  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe();
    this.heroes = this.heroes.filter(h => h !== hero);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({ name } as Hero).subscribe((hero: Hero) => { this.heroes.push(hero) })
  }

}
