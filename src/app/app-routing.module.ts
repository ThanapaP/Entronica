import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule), //loadChildren
  },
  {
    path: 'verify',
    loadChildren: () =>
      import('./verify/verify.module').then((m) => m.VerifyModule),
  },
  {
    //ถ้าพิมพ์ Path ผิดจะกลับไปหน้า verify
    path: '**',
    redirectTo: '/verify/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
