Package.describe({
    name: 'smaltcreation:autoform-intl-tel-input',
    version: '1.0.0',
    summary: 'International telephone input for autoform'
});

Npm.depends({
    'intl-tel-input': '14.0.6'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');

    // Packages
    api.use([
        'underscore',
        'templating',
        'aldeed:autoform@5.8.1'
    ], 'client');

    // Files
    api.addFiles([
        // Lib
        'css/intlTelInput.css',
        '.npm/package/node_modules/intl-tel-input/build/js/intlTelInput-jquery.js',
        '.npm/package/node_modules/intl-tel-input/build/js/utils.js',
        // Input
        'autoform-intl-tel-input.html',
        'autoform-intl-tel-input.js'
    ], 'client');

    api.addAssets([
        'img/flags.png',
        'img/flags@2x.png',
    ], 'client');
});
