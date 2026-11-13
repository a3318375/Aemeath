import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "欢迎来坐坐",
	content: "嗨，我是 yoyo。这里收着我写代码、折腾家里服务器时留下的笔记。遇到过的坑、试过管用的办法，都记下来给以后翻翻。",
	closable: true,
	links: [{ enable: true, text: "逛逛归档", url: "/archive/" }],
};
