var AWS = require("aws-sdk")

exports.handler = (event, context, callback) => {
	var s3 = new AWS.s3();
	var sumberBucket = "sumberbucket";
	var tujuanBucket = "tujuanbucket";
	var obyekKunci =  event.Records[0].s3.object.key;
	var copySumber = encodeURI(sumberBucket + "/" + obyekKunci);
	var copyParams = {Bucket: tujuanBucket, CopySource: copySumber, Key: obyekKunci};
	s3.copyObject (copyParams, function(err, data) {
		if (err) {
			console.log(err, err.stack);
		} else {
			console.log("S3 object berhasil di copy.");
		}
	});
}