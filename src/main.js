/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

import "highlight.js/styles/vs2015.css"; //테마
import hljs from "highlight.js/lib/core"; //코어
import javascript from "highlight.js/lib/languages/javascript"; //언어 타입추가
import xml from "highlight.js/lib/languages/xml"; //언어 타입 추가
import hljsVuePlugin from "@highlightjs/vue-plugin"; //vue 플러그인

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

const app = createApp(App);
app.use(hljsVuePlugin);
registerPlugins(app);

app.mount("#app");
