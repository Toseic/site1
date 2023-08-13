import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "nodejs-jieba";
import theme from "./theme.js";



export default defineUserConfig({
    base: "/",
    dest: "dist",
    lang: "zh-CN",
    title: "心理疾病科普",
    description: "vuepress-theme-hope 的文档演示",
    plugins: [
        searchProPlugin({
            indexContent: true,
            autoSuggestions: false,
            queryHistoryCount: 0,
            resultHistoryCount: 0,
            // sortStrategy: "max | total",
            indexOptions: {
                // 使用 nodejs-jieba 进行分词
                tokenize: (text, fieldName) =>
                    fieldName === "id" ? [text] : cut(text, true),
            },
            
        }),
    ],
    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
