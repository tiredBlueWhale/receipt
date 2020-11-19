import { Ingredient } from '../models/receipt.js';
import { meals, appetizers, deserts } from './../data/index.js'

import { update } from './../app.js';

let data;
let dataFiltered;
let searchString;
let sortString;
let sortValues = ["Newest", "Oldest", "A-Z", "Z-A"]

export const Food = {
    async init() {
        let url = location.hash.slice(2).toLowerCase();
        if (url === 'appetizer') {
            data = appetizers;
        } else if (url === 'deserts') {
            data = deserts;
        } else {
            data = meals;
        }
        dataFiltered = data;
        searchString = "";
        sortString = "Newest";
    },
    async render() {
        let view =
        `
        <div class="wrapper_receipt">
            <div class="wrapper_input">
                <input id="searchBar" type="text" placeholder="Search.." value="${searchString}">
                <select id="selectSort">
                    ${sortValues.map(value => `<option value="${value}">${value}</option>`).join("")}
                </select>
            </div>
            ${dataFiltered.flatMap(receipt =>
            `
            <div class="receipt_card">
            <h2>${receipt.title}</h2>
                <div class="wrapper_image">
                ${  receipt.images ?
                    receipt.images.flatMap(image =>
                    `<img class="image_receipt" src="${image}">`).join("\n")
                    :
                    '<span>No Image</span>'
                }
                </div>
                <div class="wrapper_ingridients">
                ${receipt.ingredients?.flatMap(part =>
                    `
                    <div class="wrapper_ingridients_step">
                    ${part.flatMap(ingredient => `<span> ${ingredient.amount} x ${ingredient.name} </span>`).join("\n")}
                    </div>
                    `).join("\n")
                }
                </div>
                <div class="wrapper_steps">
                    <ol type="I">
                    ${receipt.steps?.flatMap(step => `<li>${step}</li>`).join("")}
                    </ol>
                </div> 
                ${receipt.source ? `<a href="${receipt.source}" target="_blank">Source</a>` : "" }
            </div>
            
            `
            ).join("")
            }
            
        </div>
        `
        return view;
    },
    async after_render() {
        let searchBar = document.getElementById('searchBar');
        if (searchString.length > 0) {
            searchBar.focus();
            searchBar.setSelectionRange(searchString.length * 2, searchString.length * 2);
        }
        searchBar.addEventListener('input', () => {
            searchString = searchBar.value;
            filter();
        })

        let select = document.getElementById('selectSort');
        select.value = sortString;
        select.addEventListener('change', () => {
            sortString = select.value;
            sortData();
        })
    },
}

function filter() {
    dataFiltered = data.filter(receipt => receipt.title.toLowerCase().includes(searchString.toLowerCase()));
    update();
}

function sortData() {
    if (sortString === 'Newest') {
        data.sort((a, b) => b.date.getTime() - a.date.getTime());
    } else if (sortString === 'Oldest') {
        data.sort((a, b) => a.date.getTime() - b.date.getTime());
    } else if (sortString === 'A-Z') {
        data.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortString === 'Z-A') {
        data.sort((a, b) => b.title.localeCompare(a.title))
    } else {
        console.error("Sort not supported");
    }
    update();
}
