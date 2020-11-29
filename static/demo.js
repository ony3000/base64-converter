window.addEventListener('load', function () {
  var $input = document.querySelector('#input');
  var $output = document.querySelector('#output');
  var $invalidInputHelper = document.createElement('p');

  $invalidInputHelper.classList.add('help', 'is-danger');
  $invalidInputHelper.textContent = 'The input text does not seem to be in base64 format.';

  function convertInput(inputText) {
    var hash = location.hash || '#encode';

    if (hash === '#encode') {
      var outputText = converter.base64Encode(inputText);

      $output.value = outputText;
    }
    else if (hash === '#decode') {
      var outputText = converter.base64Decode(inputText);
      var pattern = new RegExp(inputText + '=*$');

      if (converter.base64Encode(outputText).match(pattern)) {
        $input.classList.remove('is-danger');
        $output.value = outputText;

        if ($invalidInputHelper.closest('div.field')) {
          $input.closest('div.field').removeChild($invalidInputHelper);
        }
      }
      else {
        $input.classList.add('is-danger');
        $output.value = '';

        if (!$invalidInputHelper.closest('div.field')) {
          $input.closest('div.field').appendChild($invalidInputHelper);
        }
      }
    }
  }

  $input.addEventListener('input', function (event) {
    convertInput(event.target.value);
  });

  function activateTab() {
    var $existingActivatedTab = document.querySelector('.tabs ul li.is-active');

    if ($existingActivatedTab) {
      $existingActivatedTab.classList.remove('is-active');
    }

    var hash = location.hash || '#encode';

    switch (hash) {
    case '#encode':
    case '#decode':
      document.querySelector(hash + '-tab').classList.add('is-active');
      break;
    default:
      break;
    }
  }

  function initialize() {
    activateTab();

    $input.value = '';
    $output.value = '';
  }

  window.addEventListener('hashchange', initialize);
  initialize();
});
