import { InicioComponent } from './components/inicio/inicio.component';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TranslateModule } from '@ngx-translate/core'; 
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  
    FooterComponent, 
    ContactoComponent,
    TranslateModule, // Añade esto para usar el pipe 'translate' en el template
    InicioComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private translate = inject(TranslateService); // Inyecta el servicio de traducción

  constructor() {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
    this.translate.use('es'); // Usa el idioma español inicialmente
  }
}