  function product() {
            var a = document.getElementById("A").value;
            var b = document.getElementById("B").value;
            window.alert("Product of A and B: " + (a * b));
        }

        function remainder() {
            var a = document.getElementById("A").value;
            var b = document.getElementById("B").value;
            window.alert("Remainder when A is divided by B: " + (a % b));
        }

        function power() {
            var a = document.getElementById("A").value;
            var b = document.getElementById("B").value;
            window.alert("A raised to the power of B: " + (a ** b));
        }

        function checkEquality() {
            var a = document.getElementById("A").value;
            var b = document.getElementById("B").value;
            window.alert(a == b ? "A is equal to B" : "A is NOT equal to B");
        }
