import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeeListComponent } from './recipes/recipee-list/recipee-list.component';
import { RecipeeDetailComponent } from './recipes/recipee-detail/recipee-detail.component';
import { RecipeeItemComponent } from './recipes/recipee-list/recipee-item/recipee-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipeeListComponent,
    RecipeeDetailComponent,
    RecipeeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
