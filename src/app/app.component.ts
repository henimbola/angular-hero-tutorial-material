import { Component } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of heroes';
  value = 50;

  constructor(private titleService: TitleService) {
    titleService.getTitle().subscribe((data: string) => this.title = data);
  }

  increment(): void {
    this.value == 100 ? 100 : this.value += 1;
  }
}
