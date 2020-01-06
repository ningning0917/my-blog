<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.status | statusFilter">
          {{ scope.row.loginNum }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { userList } from '@/api/user'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'success',
        1: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      // return str.substring(0, 30)
      return str
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        pageNo: 1,
        pageSize: 50
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      userList(this.listQuery).then(response => {
        this.list = response.data.user
      })
    }
  }
}
</script>
