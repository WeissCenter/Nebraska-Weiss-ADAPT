import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  // NgxLoggerLevels: TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
  logLevel: NgxLoggerLevel.OFF,
  API_URL: '',
  VAPID_KEY: 'BIIQ4xWLAy_HAGCKkRrv6s3Dv0x9eKabDrFwFxHzo-w3JFv4z5D3ykVdv7vgJ0akvvzYBxdd0WG4bQR7Vrs1P5I',
  cognitoRegion: 'us-east-1',
  cognitoDomainName: 'ne-prod-adaptadmin',
  s3PublicAssetsDomainName: 'ne-prod-adaptpublicassetsbucket',
  clientId: '',
  contentRoot: 'assets/text',
  contentFileName: 'admin-content-text.json',
  appDomain: 'ne-adapt-admin.adatadata.org',  //'ose-adapt.ade.arkansas.gov',
  enforceLogin: true,
  envLabel: 'LOCAL',
  enforceRole: true,
  callbackUrl: 'https://ne-adapt-admin.adatadata.org/auth/redirect',  //'https://ose-adapt.ade.arkansas.gov/auth/redirect',
  Cognito: {
    userPoolId: '',
    userPoolClientId: '',
  },
  loginContent: 'assets/content-labels.json',
  pagesContent: 'assets/text/admin-content-text.json',
  organizationName: '(OSES) Office of Special Education Services',

  // #### State logo custom settings and footer
  logoStyleClass: 'width-card', // AR: width-card-lg, SC: sc_logo_re-size
  logoPath: 'assets/shared/logos/generic', // generic logos: 'assets/shared/logos/generic'
  logoExtension: 'png',
  copyrightText: 'The State of Nebraska.',
  //################################
};
