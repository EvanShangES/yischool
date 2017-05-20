/******************************************************************************
 * Configurations : Application
 ******************************************************************************/
'use strict';

var appConfig = window.appConfig || {};

window.appConfig = appConfig;

/******************************************************************************
 * Configurations : Components and Dependencies
 ******************************************************************************/
'use strict';

var $appId = 'yixue';

var $dependencies = [
    'ui.router'
];

var $components = [
    'yixue.layout',
    'yixue.home',
    'yixue.auth',
    'yixue.start_here'
];

$dependencies = $dependencies.concat($components);

