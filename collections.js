
Tags = new orion.collection('tags', {
    singularName: 'Tag',
    pluralName: 'Tags',
    title: 'Tags',
    link: {
        title: 'Tags'
    },
    tabular: {
        columns: [
			{data: 'item',title: 'Tag Item'},
            orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
            orion.attributeColumn('createdAt', 'createdAt', 'Created At')
        ]
    }
});

Tags.attachSchema(new SimpleSchema({
    item: {
        type: String,
        label: 'Tag Item'
    },

    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt'),
    updatedAt: orion.attribute('updatedAt')
}));

if(Meteor.isServer){
	Meteor.publish('tags', function () {
		return Tags.find();
	});
}

Meteor.startup(function(){
	if(Meteor.isClient){
		Meteor.subscribe('tags');
	}
});