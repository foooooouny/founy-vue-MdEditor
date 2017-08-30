// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/font-awesome.css'
/* 引入reset文件 */
import './assets/css/reset.css'
/* 引入github的markdown样式文件 */
import './assets/css/github_markdown.css'
/* 引入atom的代码高亮样式文件 */
import './assets/css/atom_one_dark.css'

import Vue from 'vue'
import scroll from 'vue-scroll'
import Editor from './components/editor.vue'

Vue.use(scroll)

export default Editor
