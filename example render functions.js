
function renderItem(item) {
    return `
        <a href="${item.link}">
            <img src="${item.imageUrl} />
        </a>
        <h1>${item.title}</h1>
    `
}

function renderList(state, into) {
    into.innerHTML = `
    <ul>
        ${state.items.map((item) => {
            return `<li>${renderItem(item)}</li>`
        })}
    </ul>
    `
}
