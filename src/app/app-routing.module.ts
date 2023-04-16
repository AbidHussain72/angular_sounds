import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { HolyQuranComponent } from './holy-quran/holy-quran.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'chat',component:ChatComponent,title:'Chat'},
  {path:'help-me',component:HelpMeComponent,title:'Help?'},
  {path:'audio',component:AboutComponent,title:'Audio'},
  {path:'holy_quran',component:HolyQuranComponent, title:'The Holy Quran'},
  {path:'**',component:PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
