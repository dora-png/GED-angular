import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  data: any;
  params: any;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => this.data = data);
    this.route.params.subscribe(params => this.params = params);
    if (this.data.title) {
      this.titleService.setTitle(this.data.title + ' | PAGE GES');
    }
  }

}
