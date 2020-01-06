import Vue from 'vue'
import dragResize from '@/directive/drag-resize/index'
import elDragDialog from '@/directive/el-drag-dialog'
import permission from '@/directive/permission/index'
import tableMove from '@/directive/table-move/index'
import elHeightAdaptiveTable from '@/directive/el-table/index'
import highlight from '@/directive/highlight/index'
import tui from '@/directive/tui/index'

Vue.directive('dragResize', dragResize)
Vue.directive('elDragDialog', elDragDialog)
Vue.directive('permission', permission)
Vue.directive('tableMove', tableMove)
Vue.directive('elHeightAdaptiveTable', elHeightAdaptiveTable)
Vue.directive('highlight', highlight)
Vue.directive('tui', tui)

