import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, ButtonModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'pi pi-github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'pi pi-instagram', url: 'https://instagram.com', label: 'Instagram' }
  ];

  quickLinks = [
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Contact', route: '/contact' }
  ];

}
