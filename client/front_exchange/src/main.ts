import { platformBrowser, bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';


platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));
