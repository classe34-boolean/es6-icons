// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

const icons = [
    {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
    }, 
    {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
    },
    {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
    },
    {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
    },
    {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
    },
    {
        name: "cocktail",
        prefix: "fa-",
        type: "beverage",
        family: "fas"
    },
    {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
    },
    {
        name: "kiwi-bird",
        prefix: "fa-",
        type: "animal",
        family: "fas"
    },
    {
        name: "horse",
        prefix: "fa-",
        type: "animal",
        family: "fas"
    },
    {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
    },
    {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
    },
    {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
    },
    {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
    },
    {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
    },
    {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
    },
    {
        name: "snowplow",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
    },
    {
        name: "sleigh",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
    }
];

const colors = [
    "lime",
    "coral",
    "dodgerblue",
    "magenta"
];
console.log(colors);

const iconTypes = getTypes(icons);
console.log(iconTypes);

const iconsContainer = document.getElementsByClassName("icons")[0];
const selectTag = document.getElementById("type");
// console.log(iconsContainer);

const coloredIcons = addColors(icons, colors, iconTypes);
console.log(coloredIcons);

print(coloredIcons, iconsContainer);

// const mapping = {
//     animal: "lime",
//     vegetable: "coral",
//     vehicle: "dodgerblue"
// }
printOptions(iconTypes, selectTag);

selectTag.addEventListener("change", function () {
    console.log(this.value);
    let selectedType = this.value;

    const filteredIcons = filterArray(coloredIcons, selectedType);
    print(filteredIcons, iconsContainer);
});

// ------------ FUNCTIONS --------------------
function print(array, container) {

    container.innerHTML = "";
    array.forEach(
        (element) => {
            const { name, prefix, family, color } = element; 

            container.innerHTML += `<div>
                <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                <h2 class="title" style="color: ${color}">${name.toUpperCase()}</h2>
            </div>`;
        }
    );

}

function getTypes(array) {

    const types = [];
    array.forEach(
        (element) => {
            if(!types.includes(element.type)) {
                types.push(element.type);
            }    
        }
    );
    return types;

}

function addColors(array, colorsArray, typesArray) {

    const newArray = array.map(
        (element) => {
            let typeIndex = typesArray.indexOf(element.type);
            // console.log(element.name, element.type, typeIndex);

            const newElement = {
                ...element,
                color: colorsArray[typeIndex]
            };
            return newElement;
        }
    );
    return newArray;

}

function printOptions(typesArray, select) {

    typesArray.forEach(
        (element) => {
            // console.log(element);

            select.innerHTML += `
            <option value="${element}">${element}</option>`;
        }
    );
}

function filterArray(array, type) {

    if(type == "") {
        return array;
    } else {

        const filteredArray = array.filter(
            (element) => {
                return element.type == type;
            }
        );
        return filteredArray;

    }

}
// ------------ FUNCTIONS --------------------
