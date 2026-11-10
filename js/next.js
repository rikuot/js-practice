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
const radios = document.querySelectorAll('input[name="paper"]');
const number = document.querySelector('input[class="size"]');
const checkboxes = document.querySelectorAll('input[name="option"]');
const size = params.get('size');
const paper = params.get('paper');
const options = params.getAll('option');
number.value=size;
radios.forEach(function(radio){
    if(radio.value===paper){
        radio.checked=true;
    }
});
checkboxes.forEach(function(checkbox){
    if(options.includes(checkbox.value)){
        checkbox.checked=true;
    }
});
