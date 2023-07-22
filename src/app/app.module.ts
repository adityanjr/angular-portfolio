import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContactComponent,
    HeaderComponent,
    ProjectComponent,
    SkillComponent,
  ],
  imports: [BrowserModule, LottieModule.forRoot({ player: playerFactory })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
