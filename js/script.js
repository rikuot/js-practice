const button = document.querySelector('.check');
const size = document.querySelector('.size');
const sizeArea = document.querySelector('.size-area');
button.addEventListener('click',function(){
    const params = new URLSearchParams();
    let hasError = false;
    if(size.value===""){
        const sizeError = document.createElement('p');
        sizeError.textContent = "サイズを入力せよ";
        sizeError.style.color = 'red';
        sizeError.style.padding = '16px';
        sizeError.classList.add('.size-error');
        sizeArea.append(sizeError);
        hasError = true;
    }else{
        params.set('size',size.value);
        
    }

    const radio = document.querySelector('input[name="paper"]:checked');
    if(radio===null){
        const paperError = document.createElement('p');
        paperError.textContent = "用紙入力せよ"
        paperError.style.color = 'red';
        paperError.style.padding = '16px';
        paperError.classList.add('.paper-error');
        document.querySelector('.paper-area').append(paperError);
        hasError = true;
    }else{
        params.set('paper',radio.value);
    }

    const options = document.querySelectorAll('input[name="option"]:checked');
    if(options.length===0){
        const optionError = document.createElement('p');
        optionError.textContent="加工入力せよ"
        document.querySelector('.kakouArea').append(optionError);
        optionError.style.color = 'red';
        optionError.style.padding = '16px';
        optionError.classList.add('.option-error');
        hasError = true;
    }else{
        options.forEach(function(option){
            params.append('option',option.value);
        });
    }
    if(oldError !== null){
    oldError.remove();
    }   
    if(hasError===true){
        return;
    }
    window.location.href=`next.html?${params.toString()}`;
});
