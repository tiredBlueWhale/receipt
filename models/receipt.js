export class Receipt {
    constructor(title, images, ingredients, steps, date, source) {
        this.title = title;
        this.images = images;
        this.ingredients = ingredients;
        this.steps = steps;
        this.date = date;
        this.source = source;
    }
}

export class Ingredient {
    constructor(amount, name) {
        this.amount = amount;
        this.name = name;
    }
}