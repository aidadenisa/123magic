import 'reflect-metadata';
import 'zone.js/dist/zone';
// import 'tether';
// import "../../node_modules/bootstrap/scss/bootstrap";
// import '../../node_modules/bootstrap/dist/css/bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./components/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);