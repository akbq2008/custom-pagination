<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-page :background="background" :current-page.sync="currentPage" :page-size.sync="pageSize" :layout="layout"
      :page-sizes="pageSizes" :total="total" v-bind="$attrs" @size-change="handleSizeChange"
      @current-change="handleCurrentChange"></el-page>
  </div>
</template>

<script>
import ElPage from '@/components/elPagination/index.js'
export default {
  name: 'Pagination',
  components: {
    ElPage
  },
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default () {
        return [20, 50, 100]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next'
    },
    background: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    },
    sortField: {
      type: String,
      default: ''
    },
    sortOrder: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('pagination', {
        page: this.currentPage,
        limit: val
      })
    },
    handleCurrentChange (val) {
      this.$emit('pagination', {
        page: val,
        limit: this.pageSize
      })
    }
  }
}

</script>

<style scoped lang="scss">
  .pagination-container {
    background: #fff;
    padding: 32px 16px;
  }

  .pagination-container.hidden {
    display: none;
  }

  /deep/ .el-pagination .el-select .el-input {
    width: 70px;
  }

</style>
