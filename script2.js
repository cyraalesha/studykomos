function catLoader() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("cate")) {
        var categ = params.get("cate");
        document.querySelector("#category").text=categ;
    }
}