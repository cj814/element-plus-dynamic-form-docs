import { defineClientConfig } from 'vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 尝试直接导入组件
import * as ElementPlusDynamicForm from 'element-plus-dynamic-form'
const { FormRender, BaseTable } = ElementPlusDynamicForm
import CustomSelect from './components/CustomSelect.vue'
import QuickFormRenderDemo from './components/QuickFormRenderDemo.vue'
import QuickBaseTableDemo from './components/QuickBaseTableDemo.vue'

// FormRender相关
import FormRenderBasic from './components/FormRender/basic.vue'
import FormRenderCustom from './components/FormRender/custom.vue'
import FormItemEvent from './components/FormRender/formItemEvent.vue'
import TemplateSlot from './components/FormRender/templateSlot.vue'
import JsxSlot from './components/FormRender/jsxSlot.vue'

// BaseTable相关
import BaseTableBasic from './components/BaseTable/basic.vue'
import BaseTableIndex from './components/BaseTable/index.vue'
import BaseTableSelection from './components/BaseTable/selection.vue'
import BaseTableExpand from './components/BaseTable/expand.vue'
import BaseTableAction from './components/BaseTable/action.vue'
import BaseTableFormatter from './components/BaseTable/formatter.vue'
import BaseTableMultiple from './components/BaseTable/multiple.vue'
import BaseTableForm from './components/BaseTable/form.vue'
import BaseTableVirtual from './components/BaseTable/virtual.vue'

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
    app.component('BaseTableBasic', BaseTableBasic)
    app.component('BaseTableIndex', BaseTableIndex)
    app.component('BaseTableSelection', BaseTableSelection)
    app.component('BaseTableExpand', BaseTableExpand)
    app.component('BaseTableAction', BaseTableAction)
    app.component('BaseTableFormatter', BaseTableFormatter)
    app.component('BaseTableMultiple', BaseTableMultiple)
    app.component('BaseTableForm', BaseTableForm)
    app.component('BaseTableVirtual', BaseTableVirtual)
  }
})
