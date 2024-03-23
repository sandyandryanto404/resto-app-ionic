import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'resto-app-ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
