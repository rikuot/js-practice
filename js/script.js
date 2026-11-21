const button = document.querySelector('.check');
const size = document.querySelector('.size');
const sizeArea = document.querySelector('.size-area');
const paperArea = document.querySelector('.paper-area');
const optionArea = document.querySelector('.option-area');
button.addEventListener('click',function(){
    const params = new URLSearchParams();
    let hasError = false;
    const errors = document.querySelectorAll('.oldError');
    errors.forEach(function(error){
        error.remove();
    });
    if(size.value===""){
        const sizeError = document.createElement('p');
        sizeError.textContent = "サイズを入力せよ";
        sizeError.style.color = 'red';
        sizeError.style.padding = '16px';
        sizeArea.append(sizeError);
        sizeError.classList.add('oldError');
        hasError=true;
    }else{
        params.set('size',size.value);
        
    }

    const radio = document.querySelector('input[name="paper"]:checked');
    if(radio===null){
        const paperError = document.createElement('p');
        paperError.textContent = "用紙入力せよ"
        paperError.style.color = 'red';
        paperError.style.padding = '16px';
        paperArea.append(paperError);
        paperError.classList.add('oldError');
        hasError=true;
    }else{
        params.set('paper',radio.value);
    }

    const options = document.querySelectorAll('input[name="option"]:checked');
    if(options.length===0){
        const optionError = document.createElement('p');
        optionError.textContent="加工入力せよ"
        optionError.style.color = 'red';
        optionError.style.padding = '16px';
        optionArea.append(optionError);
        optionError.classList.add('oldError');
        hasError=true;
    }else{
        options.forEach(function(option){
            params.append('option',option.value);
        });
    }

    if(hasError===true){
        return;
    }
    window.location.href=`next.html?${params.toString()}`;
});
