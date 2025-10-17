## 1.安装依赖

```bash
npm install element-plus-dynamic-form
```

## 2.引入组件

在`main.ts`中引入如下代码，`FormRender` 和 `BaseTable`也可局部引入

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { FormRender, BaseTable } from 'element-plus-dynamic-form'

const app = createApp(App)
app.use(ElementPlus)
app.component('FormRender', FormRender)
app.component('BaseTable', BaseTable)

app.mount('#app')
```

## 3.预览

### FormRender

::: tabs#FormRender

@tab 示例#demo

<QuickFormRenderDemo />

@tab 代码#code

@[code](./.vuepress/components/QuickFormRenderDemo.vue)

:::

### BaseTable

::: tabs#BaseTable

@tab 示例#demo

<QuickBaseTableDemo />

@tab 代码#code

@[code](./.vuepress/components/QuickBaseTableDemo.vue)

:::
