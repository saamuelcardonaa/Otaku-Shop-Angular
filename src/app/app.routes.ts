import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';
import { FunkoLuffyComponent } from './components/productos/funko-luffy/funko-luffy.component';
import { FunkoGojoComponent } from './components/productos/funko-gojo/funko-gojo.component';
import { FunkoTanjiroComponent } from './components/productos/funko-tanjiro/funko-tanjiro.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InicioComponent }, // RUTA DE INICIO
  { path: 'contacto', component: ContactoComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },

  // REGISTRO Y LOGIN
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },

  // RUTAS DE PRODUCTOS
  { path: 'producto/funko-luffy', component: FunkoLuffyComponent },
  { path: 'producto/funko-gojo', component: FunkoGojoComponent },
  { path: 'producto/funko-tanjiro', component: FunkoTanjiroComponent }
];
