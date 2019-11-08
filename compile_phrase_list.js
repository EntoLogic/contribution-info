var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

var jf = require('jsonfile'),
		_ = require('underscore');


// var getPhraseType = function(phraseTypeName, list) {
// 	_.find
// };

var file = 'phrase_type_list.json';
jf.readFile(file, function(err, arr) {
  if (err) {
  	console.log("Could not find json file");
  	process.exit();
  }
  var editableOnes = _.filter(arr, function(pT) {
	  console.log(pT.editable);
  	return pT.editable;
  });

  var outputList = _.reduce(editableOnes, function(memo, pT) {
  	derivedAttrs = _.flatten(_.map(pT.deriving, function(deriving) {
  		return _.find(arr, function(deriver) {
  			return deriver.phrase_type == deriving;
  		}).attributes;
  	}));
  	pT.attributes = pT.attributes.concat(derivedAttrs)
  	memo.push(pT);
  	return memo;
  }, []);
  jf.writeFile("compiled_phrase_type_list.json", outputList);
});