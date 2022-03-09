/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Api from './api';

AppRegistry.registerComponent(appName, () => Api);
