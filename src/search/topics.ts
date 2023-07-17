import axios from "axios";
import { EDGE_SERVER_BASE_URL } from "../constants/url";

export async function loadTopics(element: HTMLDivElement, keyword: string, history: string | null) {
    const histories = history ? history.split('|') : [];
    const response = await axios.post(`${EDGE_SERVER_BASE_URL}/search`, {
       history: histories,
       keyword, 
    });
    if (response.status === 200) {
        const result = response.data;
        if (result.length) {
            for (const topic of result) {
                const topicItemTag = document.createElement('div');
                topicItemTag.setAttribute('class', 'topic_item');
                const topicTitleTag = document.createElement('a');
                topicTitleTag.setAttribute('href', `detail.html?id=${Object.keys(topic)[0]}`);
                topicTitleTag.textContent = Object.values(topic)[0] as string;
                topicItemTag.appendChild(topicTitleTag);
                element.appendChild(topicItemTag);
            }
        } else {
            const messageTag = document.createElement('h2');
            messageTag.textContent = "검색 결과를 찾을 수 없습니다";  
            element.appendChild(messageTag); 
        }
    }
}
