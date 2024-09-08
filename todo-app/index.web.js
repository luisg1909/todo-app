import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { registerRootComponent } from 'expo';

// Register the main application component
AppRegistry.registerComponent(appName, () => App);

// Run the application on the web
AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
});
