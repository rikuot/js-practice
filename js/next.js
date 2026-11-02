const options = ["cut", "gloss"];

const checkboxes = document.querySelectorAll(
    'input[name="option"]'
);

checkboxes.forEach(function(checkbox) {
    if(options.includes(checkbox.value)){
        checkbox.checked=true;
    }

});