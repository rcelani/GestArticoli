import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  username: string = '';
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /* recupero parametro username dal login */
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
}

