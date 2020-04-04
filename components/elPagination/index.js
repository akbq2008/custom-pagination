/*
 * @Author: wang_yechao
 * @Date: 2020-04-01 15:20:39
 */
import Pagination from './src/pagination'
/* istanbul ignore next */
Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination)
}
export default Pagination
