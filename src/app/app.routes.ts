import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '', component: Home, loadChildren: () => import('./pages/pages-module').then(m => m.PagesModule)
    }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes, { useHash: true })],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
