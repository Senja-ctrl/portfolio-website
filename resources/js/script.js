function SetWindowWidth() {
    document.getElementById("i01").setAttribute("width", window.innerWidth);
    const element = document.getElementById("i02")
    let x = 55;
    let y1 = 40;
    let y2 = y1 + 4;
    let y3 = y2 + 1;
    let y4 = y3 + 4;
    let w = window.innerWidth - 40;
    let w2 = w - 5;
    let array = [[x, y1], [w2, y1], [w, y1 - 15], [w, y2], [x + 10, y3], [x + 10, y3], [w2 - 5, y3], [w - 5, y3 - 15], [w - 5, y4], [x, y4], [x, y1]]
    element.setAttribute("points", array);
}

function OpenPortfolio() {
    document.getElementsByClassName("PortfolioDiv");
    open("./portfolio.html", "_self");
}
function OpenItch() {
    open("https://boolianjulian.itch.io", "_self");
}

