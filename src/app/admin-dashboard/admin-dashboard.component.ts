import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
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
