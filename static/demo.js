if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) {
        return el;
      }

      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

Element.prototype.addClass = function () {
  var el = this;
  var classNames = Array.prototype.slice.call(arguments);

  if ('classList' in Element.prototype) {
    classNames.forEach(function (className) {
      el.classList.add(className);
    });
  }
  else {
    var temp = (el.getAttribute('class') || '').split(' ');

    classNames.forEach(function (className) {
      var index = temp.indexOf(className);

      if (index === -1) {
        temp.push(className);
      }
    });

    el.setAttribute('class', temp.join(' '));
  }
};

Element.prototype.removeClass = function () {
  var el = this;
  var classNames = Array.prototype.slice.call(arguments);

  if ('classList' in Element.prototype) {
    classNames.forEach(function (className) {
      el.classList.remove(className);
    });
  }
  else {
    var temp = (el.getAttribute('class') || '').split(' ');

    classNames.forEach(function (className) {
      var index = temp.indexOf(className);

      if (index !== -1) {
        temp.splice(index, 1);
      }
    });

    el.setAttribute('class', temp.join(' '));
  }
};

window.addEventListener('load', function () {
  var $input = document.querySelector('#input');
  var $output = document.querySelector('#output');
  var $invalidInputHelper = document.createElement('p');

  $invalidInputHelper.addClass('help', 'is-danger');
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
        $input.removeClass('is-danger');
        $output.value = outputText;

        if ($invalidInputHelper.closest('div.field')) {
          $input.closest('div.field').removeChild($invalidInputHelper);
        }
      }
      else {
        $input.addClass('is-danger');
        $output.value = '';

        if (!$invalidInputHelper.closest('div.field')) {
          $input.closest('div.field').appendChild($invalidInputHelper);
        }
      }
    }
  }

  $input.addEventListener('keyup', function (event) {
    convertInput(event.target.value);
  });

  function activateTab() {
    var $existingActivatedTab = document.querySelector('.tabs ul li.is-active');

    if ($existingActivatedTab) {
      $existingActivatedTab.removeClass('is-active');
    }

    var hash = location.hash || '#encode';

    switch (hash) {
    case '#encode':
    case '#decode':
      document.querySelector(hash + '-tab').addClass('is-active');
      break;
    default:
      break;
    }
  }

  function initialize() {
    activateTab();

    $input.value = '';
    $output.value = '';

    $input.removeClass('is-danger');

    if ($invalidInputHelper.closest('div.field')) {
      $input.closest('div.field').removeChild($invalidInputHelper);
    }
  }

  window.addEventListener('hashchange', initialize);
  initialize();
});
