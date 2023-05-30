
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { SellformComponent } from './sellform/sellform.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { CategoryComponent } from './category/category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    UserSignupComponent,
    HomeComponent,
    MarketComponent,
    SellformComponent,
    UserLogoutComponent,
    UserNavbarComponent,
 
    ProductDetailComponent,
    MyAdsComponent,
    CategoryComponent,
    ChatComponent,
    InboxComponent,
    FooterComponent,
   
  
    
   
  ],
  imports: [
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
