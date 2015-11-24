var mongoose = require('mongoose');

module.exports.isSubmissionValid = function(submission) {
	return (submission.author && submission.content);
};

var helpReqSchema = module.exports.helpReqSchema = mongoose.Schema({
	author: String,
	content: String,
	tags: [String],
	timesubmitted: String,
	timeclosed: String,
	accepted: Boolean,
	closed: Boolean,
	assignedFellow: String,
	feedback: String
});

var bugAlertSchema = module.exports.bugAlertSchema = mongoose.Schema({
	author: String,
	content: String,
	timesubmitted: String
});

var questionSchema = module.exports.questionSchema = mongoose.Schema({
	title: String,
	resources: [String],
	votes: Number
});

var townhallTopicSchema = module.exports.townhallTopicSchema = mongoose.Schema({
	title: String,
	questions: [questionSchema] //sub-document
	//questions: [{body: String, createdAt: Date, resources: [String], votes: Number}],
});


helpReqSchema.methods.speak = function() {
	console.log('-- Help Request --');
	console.log(JSON.stringify(this));
};

bugAlertSchema.methods.speak = function() {
	console.log('-- Bug Alert --');
	console.log(JSON.stringify(this));
};

townhallTopicSchema.methods.speak = function() {
	console.log('-- Townhall Topic --');
	console.log(JSON.stringify(this));
};

var HelpRequest = module.exports.HelpRequest = mongoose.model('HelpRequest', helpReqSchema, 'helprequests');
var BugAlert = module.exports.BugAlert = mongoose.model('BugAlert', bugAlertSchema, 'bugalerts');

module.exports.TownhallTopic = mongoose.model('TownhallTopic', townhallTopicSchema);
