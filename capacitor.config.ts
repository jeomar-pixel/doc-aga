import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.fa0cc69c441c4305b8c2e99c9ca1b5ea',
  appName: 'Doc Aga',
  backgroundColor: '#FF166534',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    hostname: 'localhost'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#166534",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#166534",
    },
    Camera: {
      // Prefer non-fullscreen presentation where available (iOS sheet / Android picker)
      presentationStyle: 'popover',
    },
  },
};

export default config;
