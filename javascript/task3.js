<!DOCTYPE html>
<html>
<head>
  <title>Multiply and Divide</title>
  <style>
    #resultSection {
      display: none;
    }
  </style>
</head>
<body>

  <h3>1st Number : <input type="text" id="firstNumber"></h3>
  <h3>2nd Number: <input type="text" id="secondNumber"></h3>

  <button onclick="multiply()">Multiply</button>
  <button onclick="divide()">Divide</button>

  <div id="resultSection">
    <h3>The Result Is : <span id="result"></span></h3>
  </div>

  <script>
    function showResult(value) {
      document.getElementById("result").innerText = value;
      document.getElementById("resultSection").style.display = "block";
    }

    function multiply() {
      const num1 = parseFloat(document.getElementById("firstNumber").value);
      const num2 = parseFloat(document.getElementById("secondNumber").value);
      if (!isNaN(num1) && !isNaN(num2)) {
        showResult(num1 * num2);
      }
    }

    function divide() {
      const num1 = parseFloat(document.getElementById("firstNumber").value);
      const num2 = parseFloat(document.getElementById("secondNumber").value);
      if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
          showResult("Cannot divide by zero!");
        } else {
          showResult(num1 / num2);
        }
      }
    }
  </script>

</body>
</html>
