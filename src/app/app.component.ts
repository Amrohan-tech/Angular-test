import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component'; // Imported ParentComponent
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ParentComponent,FormComponent], // Imported ParentComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
}
