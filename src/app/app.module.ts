import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './components/header/header';
import { footerComponent } from './components/footer/footer';
import { reactiveFormComponent } from './components/partials/reactiveForm/reactiveForm';
import { TemplateFormComponent } from './components/partials/templateForm/templateForm';
import {DataGridComponent} from './components/partials/data-grid/data-grid';
import { RequestService } from './core/services/requestService';
import { AppDirective } from './components/directives/app-directive.directive';
import { DirectiveComponent } from './components/partials/directive/directive.component';
import { NgUnlessDirective } from './components/structure-directive/ng-unless.directive';
import { AddAccountComponent } from './practice/add-account/add-account.component';
import { ViewAccountComponent } from './practice/view-account/view-account.component';
import { ViewMasterComponent } from './practice/view-master/view-master.component';
import { AccountsService } from './practice/accounts.service';
import { LoggingService } from './practice/logging.service';



const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
{ path: 'account', component: ViewMasterComponent },
    { path: 'reactive', component: reactiveFormComponent },
     { path: 'directives', component: DirectiveComponent },
  { path: 'template', component: TemplateFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    reactiveFormComponent,
    TemplateFormComponent,
    DataGridComponent,
    AppDirective,
    DirectiveComponent,
    NgUnlessDirective,
    AddAccountComponent,
    ViewAccountComponent,
    ViewMasterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    ReactiveFormsModule,
    FormsModule,
     RouterModule.forRoot(routes, { useHash: false}),
  ],
  providers: [RequestService, AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
