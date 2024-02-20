# CodeZ-BSZ
## Función encrypt()
Esta función toma el texto ingresado por el usuario en el elemento con el ID "inputText" y lo encripta utilizando el cifrado César. El cifrado César desplaza cada letra del texto original un cierto número de posiciones en el alfabeto, según el valor de shift (desplazamiento).

Obtiene el texto de entrada y el valor de desplazamiento (shift) del usuario.
Itera sobre cada carácter del texto de entrada.
Si el carácter es una letra del alfabeto, la función calcula su nuevo valor Unicode aplicando el desplazamiento.
Si el carácter es una letra mayúscula, se asegura de que el nuevo valor esté dentro del rango de códigos Unicode para las letras mayúsculas (65-90).
Si el carácter es una letra minúscula, se asegura de que el nuevo valor esté dentro del rango de códigos Unicode para las letras minúsculas (97-122).
Construye el texto encriptado agregando cada carácter encriptado a la cadena outputText.
Finalmente, establece el valor del elemento con el ID "outputText" en el texto encriptado.

## Función decrypt()
Esta función realiza la operación inversa de encrypt(). Toma el texto encriptado ingresado por el usuario en el elemento con el ID "inputText" y lo desencripta utilizando el cifrado César.

Obtiene el texto encriptado y el valor de desplazamiento (shift) del usuario.
Calcula el valor de desplazamiento inverso para deshacer la encriptación.
Itera sobre cada carácter del texto encriptado.
Si el carácter es una letra del alfabeto, la función calcula su nuevo valor Unicode aplicando el desplazamiento inverso.
Si el carácter es una letra mayúscula, se asegura de que el nuevo valor esté dentro del rango de códigos Unicode para las letras mayúsculas (65-90).
Si el carácter es una letra minúscula, se asegura de que el nuevo valor esté dentro del rango de códigos Unicode para las letras minúsculas (97-122).
Construye el texto desencriptado agregando cada carácter desencriptado a la cadena outputText.
Finalmente, establece el valor del elemento con el ID "outputText" en el texto desencriptado.
Estas funciones permiten al usuario encriptar y desencriptar texto utilizando el cifrado César con un desplazamiento específico.

## link de la pagina :
https://archivador.foroactivo.com/h6-codez-bsz	
