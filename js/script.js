const radios = document.querySelectorAll('input[name="shape"]');
const sizeWrappers = document.querySelectorAll('.size-wrapper');
radios.forEach(function(radio){
    radio.addEventListener('change',function(){
        sizeWrappers.forEach(function(sizeWrapper){
            sizeWrapper.classList.add('hidden');
            if(radio.checked === true){
                const selectedWrapper = document.querySelector(`.${radio.value}`);
                selectedWrapper.classList.remove('hidden');
            }
        });
    });
});
