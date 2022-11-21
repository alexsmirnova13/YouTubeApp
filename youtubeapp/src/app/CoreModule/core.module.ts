import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthButtonComponent } from './header/auth-button/auth-button.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterComponent } from './header/search/search-filter/search-filter.component';
import { SearchInputComponent } from './header/search/search-input/search-input.component';
import { SearchLogoComponent } from './header/search/search-logo/search-logo.component';
import { SearchComponent } from './header/search/search.component';
import { SortingPanelComponent } from './sorting-panel/sorting-panel.component';
import { IncorrectRoutingPageComponent } from './incorrect-routing-page/incorrect-routing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateButtonComponent } from './header/create-button/create-button.component';
import { KeyInterceptor } from './key.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from './url.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './redux/reducers/storeReducer';
import { PostsEffects } from './redux/effects/storeEffects';
import { OneItemInfoEffects } from './redux/effects/oneCardEffect';

@NgModule({
  declarations: [
    HeaderComponent,
    SortingPanelComponent,
    SearchFilterComponent,
    SearchInputComponent,
    SearchLogoComponent,
    SearchComponent,
    AuthButtonComponent,
    IncorrectRoutingPageComponent,
    CreateButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects, OneItemInfoEffects]),
  ],
  exports: [HeaderComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  ],
})
export class CoreModule {}
