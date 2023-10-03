var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
	data:
	{
		type: String,
		require:true
	}
});

const Image = mongoose.model('Image', imageSchema);
export default Image;