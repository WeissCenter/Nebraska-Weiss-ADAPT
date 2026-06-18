import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  // NgxLoggerLevels: TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
  logLevel: NgxLoggerLevel.OFF,
  API_URL: 'https://bbyzh7hxyk.execute-api.us-east-1.amazonaws.com/ne-prod/',
  VAPID_KEY: 'BIIQ4xWLAy_HAGCKkRrv6s3Dv0x9eKabDrFwFxHzo-w3JFv4z5D3ykVdv7vgJ0akvvzYBxdd0WG4bQR7Vrs1P5I',
  cognitoRegion: 'us-east-1',
  cognitoDomainName: 'ne-prod-adaptadmin',
  s3PublicAssetsDomainName: 'ne-prod-adaptpublicassetsbucket',
  clientId: '6j0g8eu28kg0qrsjouej93hn1m',
  contentRoot: 'assets/text',
  contentFileName: 'admin-content-text.json',
  appDomain: 'adapt-admin.education.ne.gov',  //'ose-adapt.ade.arkansas.gov',
  enforceLogin: true,
  envLabel: 'Prod',
  enforceRole: true,
  callbackUrl: 'https://adapt-admin.education.ne.gov/auth/redirect',  //'https://ose-adapt.ade.arkansas.gov/auth/redirect',
  Cognito: {
    userPoolId: 'us-east-1_fb7ILezdq',
    userPoolClientId: '6j0g8eu28kg0qrsjouej93hn1m',
  },
  loginContent: 'assets/content-labels.json',
  pagesContent: 'assets/text/admin-content-text.json',

  // #### State logo custom settings and footer
  logoStyleClass: 'width-card-lg',
  logoPath: 'assets/shared/logos/states/ne',
  logoExtension: 'png',
  copyrightText: 'The State of Nebraska.',
  organizationName: 'Nebraska IDEA Part C and Part B Data',
  //################################
};
