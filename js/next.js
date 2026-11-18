const params = new URLSearchParams(window.location.search);
const sizeParam = params.get('size');
const radioParam = params.get('paper');
const optionsParam = params.getAll('option');
const size = document.querySelector('.size');
const radios = document.querySelectorAll('input[name="paper"]');
const options = document.querySelectorAll('input[name="option"]');
size.value=sizeParam;
radios.forEach(function(radio){
    if(radioParam===radio.value){
        radio.checked=true;
    }
});
options.forEach(function(option){
    option.checked=optionsParam.includes(option.value);
});