import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


const bootstrapRemoteApp = ()=> {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export { bootstrapRemoteApp };
