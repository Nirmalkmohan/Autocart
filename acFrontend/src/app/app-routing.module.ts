import { InboxComponent } from './inbox/inbox.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MarketComponent } from './market/market.component';
import { HomeComponent } from './home/home.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellformComponent } from './sellform/sellform.component';
import { ChatComponent } from './chat/chat.component';



const routes: Routes = [
  {path:'user-login', component:UserLoginComponent},
  {path:'seller-signup',component:UserSignupComponent},
  {path:'',component:HomeComponent},
  {path:'marketplace',component:MarketComponent},
  {path:'sell',component:SellformComponent},
  {path:'pro-details',component:ProductDetailComponent},
  {path:'myAds',component:MyAdsComponent},
  {path:'chat',component:ChatComponent},
  {path:'inbox',component:InboxComponent},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
