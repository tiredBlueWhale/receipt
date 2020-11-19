export const Info = {
    async init() {
    },
    async render() {
        let view =
        `
        <div class="wrapper_info">
        <div>
            <h1>Welcome to Kukka & Luca Cooking</h1>
            <p> This is a personal little receipt collection, feel free to use it :)</p>
            <div class="info_button_wrapper">
                <a href="/#/appetizer">Appetizer</a>
                <a href="/#/meals">Meals</a>
                <a href="/#/deserts">Deserts</a>
            </div>
            </div>
        </div>
        `;
        return view;
    },
    async after_render() {
    }
}