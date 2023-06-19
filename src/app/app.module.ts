import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrodocComponent } from './registrodoc/registrodoc.component';
import { ContraolvComponent } from './contraolv/contraolv.component';


const appRoutes:Routes=[
  {path:'inicio', component:InicioComponent},
  {path:'login', component:LoginComponent},
  {path:'registrodoc', component:RegistrodocComponent},
  {path:'ayuda', component:AyudaComponent},
  {path:'acercade', component:AcercadeComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'contraolv', component:ContraolvComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AyudaComponent,
    AcercadeComponent,
    PerfilComponent,
    InicioComponent,
    RegistrodocComponent,
    ContraolvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
