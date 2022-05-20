var formEl = $("searchform");
var searchInput = $("search-input");
var categoryInput = $("category-input");

var submitForm = function (event) {
  event.preventDefault();

  var searchValue = searchInput.value;
  var categoryValue = categoryInput.value;

  if (!searchValue) {
    return;
  }

  //   add new html file in here

  location.assign("result.html");
};

formEl.addEventListener("submit", submitForm);
