import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartService } from './services/cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TestComponent } from './test/test.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { BdCurrencyPipe } from './pipes/bd-currency.pipe';
import { ThemeDirective } from './directives/theme.directive';
import { HiddenDirective } from './directives/hidden.directive';
import { RegisterComponent } from './register/register.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { ReactiveRegisterFormComponent } from './reactive-register-form/reactive-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    TestComponent,
    ProductsComponent,
    ProductComponent,
    BdCurrencyPipe,
    ThemeDirective,
    HiddenDirective,
    RegisterComponent,
    MatchPasswordDirective,
    PasswordPatternDirective,
    ValidateUserNameDirective,
    ReactiveRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
