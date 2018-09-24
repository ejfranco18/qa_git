(function() {

  errorSelector();
  fakeFunction();

  function errorSelector() {
    var element = document.querySelector('.fakeErrorElement');

    element.classList.add('className');
  }
})();
