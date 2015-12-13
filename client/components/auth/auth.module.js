'use strict';

angular.module('richoodApp.auth', [
  'richoodApp.constants',
  'richoodApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
