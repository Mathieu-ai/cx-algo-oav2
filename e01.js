const tri = [8, 1, 6, 4, 9, 5, 2, 7, 3];

function bubbleSort(tri) {
    var order;
    do {
        order = false;
        for (var i = 0; i < tri.length; i++) { // [1, 8, 6, 4, 9, 5, 2, 7, 3]
            if (tri[i] > tri[i+1]) {  // vérifie si l'indice présent est plus grand que que l'indice suivant
                const swap = tri[i]; // définie la constante swap qui est égale à tri avec l'indice présent
                tri[i] = tri[i+1];  // définie que l'indice présent est égale à l'indice suivant, par ex, 8 dans la seconde boucle est éagle à 6
                tri[i+1] = swap;    // définie que l'indice suivant par ex, 6 est égale a 6, donc tri = [1,6,6,4,9,5,2,7,3]
                order = true;       // échange les indices de place, par ex, 6 prends la place de 8 et vice versa
                                    // est cette boucle va itérer juscequ'à que le l'indice présent ne soit plus grand que l'indice suivant
            }
        }
    } 
    while (order);
}

bubbleSort(tri);
console.log(tri);

