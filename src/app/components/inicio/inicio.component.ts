import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule, ContactoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  isHomeRoute = false;

  productos = [
    {
      nombre: 'Funko Pop - Luffy',
      descripcion: 'Figura coleccionable de Monkey D. Luffy (One Piece).',
      imagen: 'assets/img/luffy.png',
      link: '/producto/funko-luffy'
    },
    {
      nombre: 'Figura - Gojo Satoru',
      descripcion: 'Figura de acción detallada de Gojo (Jujutsu Kaisen).',
      imagen: 'assets/img/gojo.png',
      link: '/producto/funko-gojo'
    },
    {
      nombre: 'Funko Pop - Tanjiro',
      descripcion: 'Funko Pop exclusivo de Tanjiro Kamado (Demon Slayer).',
      imagen: 'assets/img/tanjiro.png',
      link: '/producto/funko-tanjiro'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.checkCurrentRoute());
  }

  private checkCurrentRoute() {
    this.isHomeRoute = this.router.url === '/home';
  }
}