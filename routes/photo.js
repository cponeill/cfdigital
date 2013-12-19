var photos = [];
photos.push({
  path: 'https://trello-attachments.s3.amazonaws.com/528feefe2cc43ab73400010c/52b230d75e8bd5ad3e004a0d/f256da508496e80eba1370132eb34457/comingsoonweblogo.jpg'
});

exports.list = function(req, res) {
 res.render('photos', {
   photos: photos
 });
};