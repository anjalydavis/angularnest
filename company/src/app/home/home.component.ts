import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordianComponent } from '../unit/accordian/accordian.component';
import { CarousselComponent } from '../unit/caroussel/caroussel.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordianComponent,CarousselComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
