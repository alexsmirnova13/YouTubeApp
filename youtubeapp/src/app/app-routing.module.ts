import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './AuthModule/auth/auth.component';
import { AuthGuard } from './AuthModule/guard/auth.guard';
import { IncorrectRoutingPageComponent } from './CoreModule/incorrect-routing-page/incorrect-routing-page.component';
import { AllCardsComponent } from './YoutubeModule/pages/all-items/items-list.component';
import { CreateItemComponent } from './YoutubeModule/pages/create-item/create-item.component';
import { OneItemInfoComponent } from './YoutubeModule/pages/one-item-info/one-item-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'searchResult', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'searchResult', component: AllCardsComponent, canActivate: [AuthGuard] },
  { path: 'searchResult/:id', component: OneItemInfoComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateItemComponent },
  { path: '**', component: IncorrectRoutingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
