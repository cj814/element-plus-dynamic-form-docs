import { defineClientConfig } from 'vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 尝试直接导入组件
import * as ElementPlusDynamicForm from 'element-plus-dynamic-form'
const { FormRender, BaseTable } = ElementPlusDynamicForm
import CustomSelect from './components/CustomSelect.vue'
import QuickFormRenderDemo from './components/QuickFormRenderDemo.vue'
import QuickBaseTableDemo from './components/QuickBaseTableDemo.vue'
import FormRenderBasic from './components/FormRender/basic.vue'
import FormRenderCustom from './components/FormRender/custom.vue'
import FormItemEvent from './components/FormRender/formItemEvent.vue'
import TemplateSlot from './components/FormRender/templateSlot.vue'
import JsxSlot from './components/FormRender/jsxSlot.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
    app.component('FormRender', FormRender)
    app.component('BaseTable', BaseTable)
    app.component('CustomSelect', CustomSelect)
    app.component('QuickFormRenderDemo', QuickFormRenderDemo)
    app.component('QuickBaseTableDemo', QuickBaseTableDemo)
    app.component('FormRenderBasic', FormRenderBasic)
    app.component('FormRenderCustom', FormRenderCustom)
    app.component('FormItemEvent', FormItemEvent)
    app.component('TemplateSlot', TemplateSlot)
    app.component('JsxSlot', JsxSlot)
  }
})
