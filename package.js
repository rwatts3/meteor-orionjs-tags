Package.describe({
	name: 'rwatts:orionjs-tags',
	summary: 'Tags Input for Orionjs',
	version: '0.1.0',
	git: 'https://github.com/rwatts3/meteor-orionjs-tags'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');

	api.use([
		'orionjs:base@1.7.0',
		'orionjs:collections@1.7.0',
		'less@2.5.0_2',
		'benan789:autoform-materialize-tagsinput@0.0.1',
		'jquery'
	]);

	api.imply([
		'benan789:autoform-materialize-tagsinput'
	]);

	api.addFiles([
		'collections.js',
	]);

	api.addFiles([
		'tags.js',
		'tags.less',
	], 'client');
	
	api.export('Tags');
});
