export const Error = {
    async init() {
    },
    async render() {
        let view =
        `
        <h1>Sorry, page does not exist</h1>
        <a href="/#/meals">Meals</a>
        `;
        return view;
    },
    async after_render() {
    }
}