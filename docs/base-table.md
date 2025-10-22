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

## 分页

`BaseTable` 支持分页，设置 `total` 属性不为 0（通常为服务器接口返回的总记录数），同时 `is-form` 设置 `false`。

::: tabs#pagination

@tab 示例#demo

<BaseTablePagination />

@tab 代码#code

@[code](./.vuepress/components/BaseTable/pagination.vue)

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

### Table 属性

| 属性           | 释义             | 说明                                                                                              |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `isVirtual`    | 是否虚拟表格     | 默认 false                                                                                        |
| `isForm`       | 是否 Form 模式   | 默认 false                                                                                        |
| `tableColumns` | 表格列配置项     | 参考 [el-table-column](https://cn.element-plus.org/zh-CN/component/table#table-column-attributes) |
| `tableData`    | 表格数据         | 表格数据，默认 []                                                                                 |
| `total`        | 表格数据总数     | 表格数据总数，默认 0                                                                              |
| `pageNum`      | 当前页码         | 默认 1                                                                                            |
| `pageSize`     | 每页条数         | 默认 10                                                                                           |
| `pageSizes`    | 每页条数选项     | 默认 [10, 20, 50, 100, 500]                                                                       |
| `isAutoResize` | 是否自动调整列宽 | 默认 false（`isVirtual`为 true 时才生效）                                                         |

其他属性

- `isVirtual` 为 `true` 时，参考 [el-table-v2](https://cn.element-plus.org/zh-CN/component/table-v2#tablev2-api) 。
- `isVirtual` 为 `false` 时，参考 [el-table](https://cn.element-plus.org/zh-CN/component/table#table-api) 。

### TableColumn 属性

| 属性         | 释义              | 说明                                                                                                                      |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `prop`       | 表单项属性名      | 用于绑定表单数据                                                                                                          |
| `label`      | 列标题            | -                                                                                                                         |
| `renderType` | 渲染类型          | 非必需，通常 `Form` 模式才使用，可以为 element-plus 组件，如(el-input,el-select 等)，也可以为自定义组件                   |
| `children`   | 子列配置项        | 非必需，通常多级表头时才使用                                                                                              |
| `itemProps`  | el-form-item 属性 | 非必需，通常 `Form` 模式才使用，参考 [el-form-item](https://cn.element-plus.org/zh-CN/component/form#formitem-attributes) |
| `comProps`   | 组件属性          | 非必需，通常 `Form` 模式才使用，参考 el-input、el-select 或自定义组件等自身属性                                           |
| `comEvents`  | 组件事件          | 非必需，通常 `Form` 模式才使用，参考 el-input、el-select 或自定义组件等自身事件，如 onBlur,onChange 等                    |

其他属性

- `isVirtual` 为 `true` 时，参考 [el-table-v2-column](https://cn.element-plus.org/zh-CN/component/table-v2#column-attribute) 。
- `isVirtual` 为 `false` 时，参考 [el-table-column](https://cn.element-plus.org/zh-CN/component/table#table-column-%E5%B1%9E%E6%80%A7) 。
