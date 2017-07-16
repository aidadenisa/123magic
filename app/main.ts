import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./components/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);