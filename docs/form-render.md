## 基础用法

`formItems` 建议使用 `computed` 属性，当表单项属性发生变化时，便于及时更新表单配置项。

::: tabs#basic

@tab 示例#demo

<FormRenderBasic />

@tab 代码#code

@[code](./.vuepress/components/FormRender/basic.vue)

:::

## 自定义组件

`renderType` 为自定义组件时，需要提前全局或局部注册该自定义组件。

::: tabs#custom

@tab 示例#demo

<FormRenderCustom />

@tab 代码#code

@[code](./.vuepress/components/FormRender/custom.vue)

:::

`CustomSelect.vue`

::: tabs#custom-select

@tab 代码#code

@[code](./.vuepress/components/CustomSelect.vue)

:::

## 事件

### Form 事件

给 `form-render` 组件增加 `ref` 属性，用于获取表单实例，调用表单方法。具体方法名参考 [Form Exposes](https://cn.element-plus.org/zh-CN/component/form#form-exposes)。

::: tabs#form-events

@tab 示例#demo

<FormRenderBasic />

@tab 代码#code

@[code](./.vuepress/components/FormRender/basic.vue)

:::

### FormItem 事件

获取表单实例后，调用 `getField` 方法获取表单项实例，调用表单项方法。具体方法名参考 [FormItem Exposes](https://cn.element-plus.org/zh-CN/component/form#formitem-exposes)。

::: tabs#form-item-events

@tab 示例#demo

<FormItemEvent />

@tab 代码#code

@[code](./.vuepress/components/FormRender/formItemEvent.vue)

:::

## 插槽

### template 插槽

`renderType` 设置为 `slot` ，在 `template` 标签里编写插槽内容

::: tabs#template-slot

@tab 示例#demo

<TemplateSlot />

@tab 代码#code

@[code](./.vuepress/components/FormRender/templateSlot.vue)

:::

### jsx 插槽

`renderType` 正常设置，`comProps` 中设置 `slots` 属性，值为插槽名称。

::: tabs#jsx-slot

@tab 示例#demo

<JsxSlot />

@tab 代码#code

@[code](./.vuepress/components/FormRender/jsxSlot.vue)

:::

> 使用 `jsx` 插槽时，需安装 `@vitejs/plugin-vue-jsx` 插件，`script` 标签需设置 `lang=tsx`

## API

### Form 属性

<style>
  table {
    width: 100%;
  }
  table th:nth-child(1) {
    width: 20%;
  }
  table th:nth-child(2) {
    width: 25%;
  }
  table th:nth-child(3) {
    width: 55%;
  }
</style>

| 属性          | 释义       | 说明    |
| ------------- | ---------- | ------- |
| `formItems`   | 表单配置项 | 默认 [] |
| `formData`    | 表单数据   | 默认 {} |
| `baseColSpan` | 基础列宽度 | 默认 24 |

> 其他属性参考 [el-form](https://cn.element-plus.org/zh-CN/component/form#form-attributes)

### FormItem 属性

| 属性         | 释义              | 说明                                                                                      |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------- |
| `renderType` | 表单项组件类型    | 可以为 element-plus 组件，如(el-input,el-select 等)，也可以为自定义组件                   |
| `visible`    | 表单项是否显示    | 默认 true                                                                                 |
| `colProps`   | el-col 属性       | 参考 [el-col](https://cn.element-plus.org/zh-CN/component/layout#col-api)                 |
| `itemProps`  | el-form-item 属性 | 参考 [el-form-item](https://cn.element-plus.org/zh-CN/component/form#formitem-attributes) |
| `comProps`   | 组件属性          | 参考 el-input、el-select 或自定义组件等自身属性                                           |
| `comEvents`  | 组件事件          | 参考 el-input、el-select 或自定义组件等自身事件，如 onBlur,onChange 等                    |
