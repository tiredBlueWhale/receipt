export const NavBar = {
    async render() {
        let view =
        `
        <nav>
            <a href="./">Info</a>
            <a href="./?appetizer">Appetizer</a>
            <a href="./?meals">Meals</a>
            <a href="./?deserts">Deserts</a>
        </nav>
        `
            ;

        return view;
    }
}