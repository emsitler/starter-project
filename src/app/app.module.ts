import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { BottomNavBarComponent } from './Navigation/bottom-nav-bar/bottom-nav-bar.component';
import { FooterComponent } from './Lab2comps/footer/footer.component';
import { TrendingReleasesComponent } from './Lab2comps/trending-releases/trending-releases.component';
import { ArticlesComponent } from './Lab2comps/articles/articles.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/second-layout/second-layout.component';
import { DiscogsDigsComponent } from './Layouts/discogs-digs/discogs-digs.component';
import { CareersPageComponent } from './Layouts/careers-page/careers-page.component';
import { ApiPageComponent } from './Layouts/api-page/api-page.component';
import { DigsNavbarComponent } from './DigsComps/digs-navbar/digs-navbar.component';
import { DigsCardComponent } from './DigsComps/digs-card/digs-card.component';
import { DigsArticleComponent } from './DigsComps/digs-article/digs-article.component';
import { AccordionCareerComponent } from './CareerComps/accordion-career/accordion-career.component';
import { NewsletterFormComponent } from './CareerComps/newsletter-form/newsletter-form.component';
import { TeamCardComponent } from './CareerComps/team-card/team-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    FooterComponent,
    TrendingReleasesComponent,
    ArticlesComponent,
    CardComponent,
    HomeLayoutComponent,
    SecondLayoutComponent,
    DiscogsDigsComponent,
    CareersPageComponent,
    ApiPageComponent,
    DigsNavbarComponent,
    DigsCardComponent,
    DigsArticleComponent,
    AccordionCareerComponent,
    NewsletterFormComponent,
    TeamCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
