const changeImage = (props) => {
  const getQuery = document.querySelector("#mainImage");

  getQuery.src = props;
};

const increaseCount = (a, b) => {
  var input = b.nextElementSibling;
  var val = parseInt(input.value);
  val = isNaN(val) ? 0 : val;
  val++;
  input.value = val;
};

const decreaseCount = (a, b) => {
  var input = b.previousElementSibling;
  var val = parseInt(input.value);
  if (val > 1) {
    val = isNaN(val) ? 0 : val;
    val--;
    input.value = val;
  }
};
