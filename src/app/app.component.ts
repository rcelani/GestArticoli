import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponentComponent } from "./footer-component/footer-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponentComponent, FooterComponentComponent]
})
export class AppComponent {
  title = 'GestArticoli';
}
