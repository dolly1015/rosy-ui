### 按钮 Button

#### 正常状态（Normal Size）
<div class="component-wrapper">
    <rs-button class="mr10" title="默认按钮">默认按钮</rs-button>
    <rs-button class="mr10" primary>主按钮</rs-button>
    <rs-button class="mr10" secondary>次级按钮</rs-button>
    <rs-button class="mr10" dashed>虚线按钮</rs-button>
    <rs-button class="mr10" link>文字按钮</rs-button>
    <rs-button class="mr10" link href="//www.baidu.com" target="_blank" external>外链按钮</rs-button>
</div>

``` vue
<rs-button class="mr10" title="默认按钮">默认按钮</rs-button>
<rs-button class="mr10" primary>主按钮</rs-button>
<rs-button class="mr10" secondary>次级按钮</rs-button>
<rs-button class="mr10" dashed>虚线按钮</rs-button>
<rs-button class="mr10" link>文字按钮</rs-button>
<rs-button class="mr10" link href="//www.baidu.com" target="_blank" external>外链按钮</rs-button>
```

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

