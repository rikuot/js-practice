// const options = ["cut", "gloss"];

// const checkboxes = document.querySelectorAll(
//     'input[name="option"]'
// );

// checkboxes.forEach(function(checkbox) {
//     if(options.includes(checkbox.value)){
//         checkbox.checked=true;
//     }

// });
const params = new URLSearchParams(window.location.search);
const checkboxes = doucument.querySelectorAll('input[name="option"]:checked');
const size = params.get('size');
const paper = params.get('paper');
const options = params.getAll('option');

