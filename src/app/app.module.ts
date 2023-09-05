import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { SvgService } from './services/svg.service';
import { MenuService } from './services/menu-state.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    FooterComponent,
    FormComponent,
    FooterBarComponent,
    SkillsComponent,
    MainComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MenuService,
    SvgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
