//FETIH
function fetih1() {
  decreaseCounter(1, "fetihCount");
  }

  function fetih5() {
    decreaseCounter(5, "fetihCount");
  }

  function fetih10() {
    decreaseCounter(10, "fetihCount");
  }

  function fetih20() {
    decreaseCounter(20, "fetihCount");
  }

  function fetih50() {
    decreaseCounter(50, "fetihCount");
  }

  function fetih100() {
    decreaseCounter(100, "fetihCount");
  }

  function fetih200() {
    decreaseCounter(200, "fetihCount");
  }

  //YASIN

  function yasin1() {
    decreaseCounter(1, "yasinCount");
  }

  function yasin5() {
    decreaseCounter(5, "yasinCount");
  }

  function yasin10() {
    decreaseCounter(10, "yasinCount");
  }

  function yasin20() {
    decreaseCounter(20, "yasinCount");

  }

  function yasin50() {
    decreaseCounter(50, "yasinCount");
  }

  function yasin100() {
    decreaseCounter(100, "yasinCount");
  }

  function yasin200() {
    decreaseCounter(200, "yasinCount");

  }

  //CEVSEN 

  function cevsen1() {
    decreaseCounter(1, "cevsenCount");
  }

  function cevsen5() {
    decreaseCounter(5, "cevsenCount");
  }

  function cevsen10() {
    decreaseCounter(10, "cevsenCount");
  }

  function cevsen20() {
    decreaseCounter(20, "cevsenCount");

  }

  function cevsen50() {
    decreaseCounter(50, "cevsenCount");
  }

  function cevsen100() {
    decreaseCounter(100, "cevsenCount");
  }

  function cevsen200() {
    decreaseCounter(200, "cevsenCount");

  }

  function decreaseCounter(piece, elementName) {
    var countElement = document.getElementById(elementName);
    var count = Number(countElement.innerHTML);
    count = count - piece;
    countElement.innerHTML = count;

  }

