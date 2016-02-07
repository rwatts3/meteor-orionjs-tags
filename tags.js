
Template.autoformTags.events({
	'itemAdded [data-schema-key="tags"]': function (event) {
		var match = Tags.find({
			item: event.item
		}).fetch();
				
		if (match.length == 0) {
			Tags.insert({
				item: event.item
			});
		}		
	}
})