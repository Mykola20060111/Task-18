$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').fadeIn(2000);
});

$('.spoilerSecond').hide();

$('.spoilerButtonSecond').on('click', function () {
  $('.spoilerButtonSecond').hide();
  $('.spoilerSecond').fadeIn(2000);
});