import "../style.css";
import { setupSearch } from "../search";
import { loadTopicDetail } from "./loadTopicDetail";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header>
        <form>
            <input name='keyword' type='text' />
            <button type='submit'>검색</button>
        </form>
    </header>
    <main>
        <article>
            <h2 class='title'></h2>
            <div>
                <span class='author'></span>
                <time class='createdAt'>2023-07-16</time>
            </div>
            <p class='contents'></p>
        </article>
    </main>
  </div>
`;

setupSearch(document.querySelector<HTMLFormElement>("form")!);
loadTopicDetail(document.querySelector<HTMLElement>("article")!);
