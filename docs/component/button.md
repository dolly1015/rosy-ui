### 按钮 Button

#### 基础使用

::: demo 这是一个基础使用示例
```html
<template>
    <div class="component-wrapper">
        <rs-button round title="默认按钮">默认按钮</rs-button>
        <rs-button plain round @click="makeConsole" type="primary">主按钮</rs-button>
    </div>
</template>
<script>
export default {
    methods: {
        makeConsole() {
            console.log(123456)
        }
    }
}
</script>
```
:::


#### API
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|primary / secondary / dashed / link|按钮类别|Boolean|false|
|color|按钮颜色，可选值：success / warn / danger|String|-|
|size|按钮尺寸，可选值：large / normal / small|String|normal|
|href|link的href属性|String|-|
|disabled|按钮不生效|Boolean|false|
|icon|图标按钮|String|-|
|circle|圆形图标按钮|Boolean|false|
|loading|异步按钮|Boolean|false|

