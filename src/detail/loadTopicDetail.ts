import axios from "axios";
import { EDGE_SERVER_BASE_URL } from "../constants/url";

export async function loadTopicDetail(element: HTMLElement) {
    const params: any = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop: any) => searchParams.get(prop),
    });
    const topicId = params["id"];
    if (topicId) {
        const response = await axios.get(`${EDGE_SERVER_BASE_URL}/topics/${topicId}`);
        const topicDetail = response.data;
        if (topicDetail) {
            const titleTag = element.querySelector('.title')!;
            titleTag.textContent = topicDetail.title.S;
            const authorTag = element.querySelector('.author')!;
            authorTag.textContent = topicDetail.author.S;
            const createdAtTag = element.querySelector('.createdAt')!;
            createdAtTag.textContent = topicDetail.createdAt.S;
            const contentsTag = element.querySelector('.contents')!;
            contentsTag.textContent = topicDetail.contents.S;
        }
    }
}
