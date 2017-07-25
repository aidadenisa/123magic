import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'tether';
// import "bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./components/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);