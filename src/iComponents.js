import Vue from 'vue'
import {
  Button,
  Table,
  Form,
  FormItem,
  Input,
  Icon,
  Notice,
  Row,
  Menu,
  Col,
  Submenu,
  MenuItem,
  MenuGroup,
  Page,
  RadioGroup,
  Radio,
  BackTop,
  Modal
} from 'iview'

export default function () {
  Vue.component('Button', Button)
  Vue.component('Table', Table)
  Vue.component('Form', Form)
  Vue.component('FormItem', FormItem)
  Vue.component('Input', Input)
  Vue.component('Icon', Icon)
  Vue.component('Row', Row)
  Vue.component('Menu', Menu)
  Vue.component('Col', Col)
  Vue.component('Submenu', Submenu)
  Vue.component('MenuItem', MenuItem)
  Vue.component('MenuGroup', MenuGroup)
  Vue.component('Page', Page)
  Vue.component('RadioGroup', RadioGroup)
  Vue.component('Radio', Radio)
  Vue.component('BackTop', BackTop)
  Vue.component('Modal', Modal)
  Vue.prototype.$Notice = Notice
}
