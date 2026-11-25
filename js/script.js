const radios = document.querySelectorAll('input[name="shape"]');
const sizeWrappers = document.querySelectorAll('.size-wrapper');
radios.forEach(function(radio){
    radio.addEventListener('change',function(){
        sizeWrappers.forEach(function(sizeWrapper){
            if(radio.checked === true){
                let a = document.querySelector(`.${radio.value}`);
                sizeWrapper.classList.add('hidden');
                
            }else{
                a.classList.remove('hidden');
            }

        });
    });
});
