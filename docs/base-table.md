## 基础用法

`tableColumns` 建议使用 `computed` 属性，当表格列属性发生变化时，便于及时更新表格列配置项。

::: tabs#basic

@tab 示例#demo

<BaseTableBasic />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/basic.vue)

:::

## 渲染列

### 序号

`renderType` 设置 `index`

::: tabs#index

@tab 示例#demo

<BaseTableIndex />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/index.vue)

:::

### 选择

`renderType` 设置 `selection`

::: tabs#selection

@tab 示例#demo

<BaseTableSelection />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/selection.vue)

:::

### 展开

`renderType` 设置 `expand`，展开内容可用插槽填充，具体用法同 `FormRender` 插槽用法，使用 [`template`](form-render.html#template-插槽) 或 [`jsx`](form-render.html#jsx-插槽) 插槽，这里采用 `jsx` 插槽举例。

::: tabs#expand

@tab 示例#demo

<BaseTableExpand />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/expand.vue)

:::

### 操作

`renderType` 设置 `slot`，操作内容同样可使用插槽，这里使用 `template` 插槽举例。

::: tabs#action

@tab 示例#demo

<BaseTableAction />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/action.vue)

:::

### 格式化

表格列项增加 `formatter` 属性，用于格式化列项数据，通常用于字典转换、状态转换等场景。

::: tabs#formatter

@tab 示例#demo

<BaseTableFormatter />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/formatter.vue)

:::

### 多级表头

`tableColumns` 支持多级表头，通过 `children` 属性实现。

::: tabs#multiple

@tab 示例#demo

<BaseTableMultiple />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/multiple.vue)

:::

## Form 模式

`BaseTable` 支持 Form 模式，设置 `is-form` 为 `true`。

::: tabs#form

@tab 示例#demo

<BaseTableForm />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/form.vue)

:::

> `is-form` 为 `true` 时，`BaseTable` 本质是一个表单，可通过 `ref` 实例调用 [el-form](https://cn.element-plus.org/zh-CN/component/form#form-exposes) 暴露的方法
> `is-form` 为 `false` 时，`BaseTable` 本质是一个表格，可通过 `ref` 实例调用 [el-table](https://cn.element-plus.org/zh-CN/component/table#table-exposes) 或 [el-table-v2](https://cn.element-plus.org/zh-CN/component/table-v2#tablev2-exposes) 暴露的方法

## 虚拟表格

`BaseTable` 支持虚拟滚动，设置 `is-virtual` 为 `true`。

::: tabs#virtual

@tab 示例#demo

<BaseTableVirtual />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/virtual.vue)

:::

## API

| 属性          | 释义              | 说明                                                                                                  |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------------------- |
| `formItems`   | 表单配置项        | FormRender 自身属性                                                                                   |
| `formData`    | 表单数据          | FormRender 自身属性                                                                                   |
| `baseColSpan` | 基础列宽度        | FormRender 自身属性，默认 8                                                                           |
| `renderType`  | 表单项组件类型    | 表单项属性，可以为 element-plus 组件，如(el-input,el-select 等)，也可以为自定义组件                   |
| `visible`     | 表单项是否显示    | 表单项属性，默认 true                                                                                 |
| `colProps`    | el-col 属性       | 表单项属性，参考 [el-col](https://cn.element-plus.org/zh-CN/component/layout#col-api)                 |
| `itemProps`   | el-form-item 属性 | 表单项属性，参考 [el-form-item](https://cn.element-plus.org/zh-CN/component/form#formitem-attributes) |
| `comProps`    | 组件属性          | 表单项属性，参考 el-input、el-select 或自定义组件等自身属性                                           |
| `comEvents`   | 组件事件          | 表单项属性，参考 el-input、el-select 或自定义组件等自身事件，如 onBlur,onChange 等                    |
