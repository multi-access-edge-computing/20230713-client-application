import "../style.css";
import { setupSearch } from "../search";
import { loadTopics } from "./topics";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header>
        <form>
            <input name='keyword' type='text' />
            <button type='submit'>검색</button>
        </form>
    </header>
    <main>
        <div class="topics_wrapper" />
    </main>
  </div>
`;

setupSearch(document.querySelector<HTMLFormElement>("form")!);
(function updateHistory() {
    const key = "history";
    const params: any = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop: any) => searchParams.get(prop),
    });
    const keyword = params["keyword"].trim();
    const history = localStorage.getItem(key);
    if (keyword) {
        document.querySelector<HTMLInputElement>('input')!.value = keyword;
        loadTopics(document.querySelector<HTMLDivElement>('.topics_wrapper')!, keyword, history);
        if (history) {
            const histories = history.split('|');
            histories.push(keyword);
            localStorage.setItem(key, histories.join('|'));
        } else {
            localStorage.setItem(key, [keyword].join('|'));
        }
    }
})();
