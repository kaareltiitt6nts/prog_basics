export function saveViewData(view, data) {
    localStorage.setItem("viewData", {
        view: view,
        data: data
    })
}

export function getViewData() {
    return localStorage.getItem("viewData")
}