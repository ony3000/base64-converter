window.addEventListener('load', function () {
  var $input = document.querySelector('#input');
  var $output = document.querySelector('#output');
  var $encodeButton = document.querySelector('#encode-button');
  var $decodeButton = document.querySelector('#decode-button');
  var $clearButton = document.querySelector('#clear-button');

  $encodeButton.addEventListener('click', function () {
    var inputText = $input.value;
    var outputText = converter.base64Encode(inputText);

    $output.value = outputText;
  });

  $decodeButton.addEventListener('click', function () {
    var inputText = $input.value;
    var outputText = converter.base64Decode(inputText);
    var pattern = new RegExp(inputText + '=*$');

    if (!converter.base64Encode(outputText).match(pattern)) {
      console.warn('The input text [' + inputText + '] does not seem to be in base64 format.');
    }
    $output.value = outputText;
  });

  $clearButton.addEventListener('click', function () {
    $input.value = '';
    $output.value = '';
  });
});
