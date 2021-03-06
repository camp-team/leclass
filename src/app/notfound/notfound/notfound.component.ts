import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('404 | Leclass');

    this.meta.addTags([
      { name: 'description', content: '404' },
      { property: 'og:title', content: '404' },
      { property: 'og:description', content: '404'},
      { property: 'og:url', content: location.href },
      { property: 'og:image', content: 'https://leclass-prod.web.app/assets/images/leclass.jpg' }
    ]);
  }

  ngOnInit(): void {
  }

}
