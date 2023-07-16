export function setupSearch(element: HTMLFormElement) {
    const textBox = element.querySelector<HTMLInputElement>('input')!;
    element.addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = textBox.value;
        window.location.href = `search.html?keyword=${keyword}`;
    });
}
