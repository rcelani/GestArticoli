import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateArticleFormComponent } from "./create-article-form/create-article-form.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [CreateArticleFormComponent]
})
export class AdminDashboardComponent {
  username: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    /* recupero parametro username dal login */
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
}
