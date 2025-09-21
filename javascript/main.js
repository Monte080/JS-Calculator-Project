

let result = document.getElementById("result");

    function appendValue(val) {
      result.value += val;
    }

    function clearResult() {
      result.value = "";
    }

    function deleteLast() {
      result.value = result.value.slice(0, -1);
    }

    function calculateResult() {
      try {
        result.value = eval(result.value); // evaluates the string expression
      } catch (e) {
        result.value = "Error";
      }
    }
    
    function calculateResult() {
      let expression = result.value.replace(/%/g, '/100');
      try {
        result.value = eval(expression); // evaluates the string expression
      } catch (e) {
        result.value = "Error";
      }   
    }          

//evnt listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    }
else if (key === 'Escape') {
        clearResult();
    }
  else if (key === 'c' || key === 'C') {
        clearResult();
    } 
    else if (key === 'Delete') {
        clearResult();
    } 
    else if (key === 'd' || key === 'D') {
        deleteLast();
    }         
    else if (key === 'x' || key === 'X') {
        appendValue('*');
    }                   
    else if (key === 'p' || key === 'P') {
        appendValue('%');
    }
});