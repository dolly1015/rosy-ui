## Rosy UI
### Usage

```shell
import Vue from 'vue'
import Ange from 'ange-ui'
Vue.use(Ange)
```

### 如何开发
```
npm install

npm run dev
```

第一步新建 `src/components/`新建一个自己的组件index.js

```
// 示例代码 把Test 换成其他的都行
import Test from './src/main' // 组件来源

Test.install = function (Vue, opt) {
    Vue.component(Test.name, Test)
}

export default Test

```

第二步 在文件夹下面新建一个`src/main.vue`
并编写`main.vue`的内容

第三步 在`docs/views`新建自己的`md`文件，这个是一个示例调试（类似于element-ui的文档）可以实现边写文档边调试

第四步 注册侧边栏 在`.vuepress/config.js` `themeConfig.sidebar`，增加自己刚刚写的那个md路径

第五步 查看调试 刷新即可


记住：组件的`name`一定要是`ry-xxx`。

```
```
