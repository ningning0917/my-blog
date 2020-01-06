<template>
  <div class="app-container">
    <el-table :data="list" border fit style="width: 100%">
      <el-table-column label="序号" align="center" width="60" fixed="left">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="标题" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="作者" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="发布时间" min-width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.publishTime | parseTime() }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="更改时间" min-width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.modifyTime | parseTime() }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="重要性" min-width="100">
        <template slot-scope="scope">
          <el-rate
            v-model="+scope.row.importance"
            :max="3"
            disabled
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :low-threshold="1"
            :high-threshold="3"
            style="margin-top:8px;"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="摘要" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.summary }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="封面" min-width="160">
        <template slot-scope="scope">
          <img v-if="scope.row.imageUrl" class="image-box" preview="1" :src="scope.row.imageUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column align="center" label="标签" min-width="100">
        <template slot-scope="scope">
          <span class="content">{{ scope.row.label }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="内容" min-width="400">
        <template slot-scope="scope">
          <span class="content">{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否推荐" min-width="100" fixed="right">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.recommend"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="1"
            inactive-value="0"
            @change="RecommendFun(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="编辑" min-width="100" fixed="right">
        <template slot-scope="scope">
          <router-link :to="'/article/edit/'+scope.row.uid">
            <el-button type="primary" size="small" icon="el-icon-edit">
              编辑
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" :auto-scroll="false" @pagination="getPage" />
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination'
import { updateArticle } from '../../api/article' // Secondary package based on el-pagination

export default {
  name: 'ArticleList',
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      recommend: '0'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then(res => {
        if (res.code === 200) {
          this.list = res.data
          this.total = res.total
          this.$notify({
            title: '成功',
            message: res.msg,
            type: 'success',
            duration: 2000
          })
        }
      })
    },
    getPage(v) {
      this.listQuery = v
      this.getList()
      console.log(v, 'v')
    },
    RecommendFun(v) {
      const { label, ...data } = v
      const params = {
        ...data,
        label: label.split(',')
      }
      updateArticle(params).then(res => {
        if (res.code === 200) {
          this.$message.success('更改推荐成功')
          this.getList()
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
  .content {
    display: inline-block;
    height: 200px;
    overflow: auto;
  }
  .image-box {
    width: 120px;
  }
</style>
