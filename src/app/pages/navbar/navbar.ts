import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  isScrolled = false;
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/']
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: ['/about']
    },
    {
      label: 'Services',
      icon: 'pi pi-briefcase',
      items: [
        {
          label: 'Web Development',
          icon: 'pi pi-code',
          routerLink: ['/services/web']
        },
        {
          label: 'Mobile Development',
          icon: 'pi pi-mobile',
          routerLink: ['/services/mobile']
        }
      ]
    },
    {
      label: 'Portfolio',
      icon: 'pi pi-images',
      routerLink: ['/portfolio']
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: ['/contact']
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}