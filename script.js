 var inputLabel = document.getElementById('inputLabel');
     
    function tekanBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (pushed == 'AC') {
            // All Clear
            inputLabel.innerHTML = '0';
             
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;   
            }
        }
    }