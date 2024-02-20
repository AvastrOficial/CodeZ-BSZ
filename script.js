 function encrypt() {
            var inputText = document.getElementById("inputText").value;
            var shift = parseInt(document.getElementById("shift").value);
            var outputText = "";

            for (var i = 0; i < inputText.length; i++) {
                var char = inputText[i];

                // Solo encriptar letras del alfabeto
                if (char.match(/[a-z]/i)) {
                    var code = inputText.charCodeAt(i);

                    // Mayúsculas
                    if (code >= 65 && code <= 90) {
                        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                    }
                    // Minúsculas
                    else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
                    }
                }
                outputText += char;
            }

            document.getElementById("outputText").value = outputText;
        }

        function decrypt() {
            var inputText = document.getElementById("inputText").value;
            var shift = parseInt(document.getElementById("shift").value);
            var outputText = "";

            // Utilizamos el desplazamiento inverso para desencriptar
            shift = (26 - shift) % 26;

            for (var i = 0; i < inputText.length; i++) {
                var char = inputText[i];

                // Solo desencriptar letras del alfabeto
                if (char.match(/[a-z]/i)) {
                    var code = inputText.charCodeAt(i);

                    // Mayúsculas
                    if (code >= 65 && code <= 90) {
                        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                    }
                    // Minúsculas
                    else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
                    }
                }
                outputText += char;
            }

            document.getElementById("outputText").value = outputText;
        }
