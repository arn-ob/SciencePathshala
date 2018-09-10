import { SqlService } from './service/sql/sql.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import {ButtonModule} from 'primeng/components/button/button';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { FeedComponent } from './feed/feed.component';
import { SubmitProblemComponent } from './submit-problem/submit-problem.component';
import { IdeaComponent } from './idea/idea.component';
import { EventComponent } from './event/event.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'post', component: SubmitProblemComponent },
  { path: 'idea', component: IdeaComponent },
  { path: 'event', component: EventComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    IndexComponent,
    FeedComponent,
    SubmitProblemComponent,
    IdeaComponent,
    EventComponent,
    ShopComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule,
    SidebarModule,
    CommonModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  providers: [
    MessageService,
    SqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
