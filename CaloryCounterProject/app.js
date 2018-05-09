/* TODO: 
// Functions to Create:
// Cell
// MealRow
// HeaderRow
// TotalRow
// mealBody
*/

const MEALS = [
    {description: 'breakfast', calories: 300},
    {description: 'lunch', calories: 200},
    {description: 'dinner', calories: 150},
];

let {td, th, tr, tbody} = tags;

//creates a cell
function cell(tag, className, value) {
    return tag({className}, value);
};

//creates a meal row
function mealRow(className, meal) {
    return tr({className},[
        cell(td, 'pa2', meal.description),
        cell(td, 'pa2 tr', meal.calories)
    ]);
};

//create the table body
function mealBody(className, meals) {
    // an array containing the rows for each meal, partially applying the stripe-dark class using ramda library.
    const rows= R.map(R.partial(mealRow, ['stripe-dark']), meals);
    return tbody({className}, rows);
}


const node = document.getElementById('app');
const view = mealBody('', MEALS);

node.appendChild(view);