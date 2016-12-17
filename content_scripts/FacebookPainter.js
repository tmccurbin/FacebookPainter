var FacebookPainter = function () {
  // CLASS DEFINITION
  console.log('We created an instance!')
};

FacebookPainter.prototype.paint = function (feature, color) {

  // Change the color scheme

  if (feature === 'banner') {

    $('._4kny').css('background-color', color);
    $('._2t-a').css('background-color', color);

  } else if (feature === 'background') {

    $('._li').css('background-color', color);

  } else if (feature === 'border') {

    $('._64b').css('background-color', color);
    $('#contentArea').css('background-color', color);
    $('#contentCol').css('background-color', color);

  }

};