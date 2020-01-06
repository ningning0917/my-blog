<template>
  <div class="list-wrapper flex-sb-top">
    <div class="left">
      <list :title="label" :data-list="dataList" :total="total" :is-roll="isRoll" />
    </div>
    <div class="right">
      <right />
      <Label class="label-box" />
      <Comment :from="from" />
    </div>
  </div>
</template>

<script>
import Label from '../profile/components/Label'
import List from '../dashboard/components/List'
import Right from '../dashboard/components/right'
import Comment from '../dashboard/components/Comment'
import { getLabelArticle } from '../../api/dashboard'
export default {
  name: 'Index',
  components: { Label, List, Right, Comment },
  data() {
    return {
      dataList: [],
      label: '',
      total: 0,
      from: 'label-list',
      isRoll: false
    }
  },
  mounted() {
    this.label = this.$route.query.label
    this.getLabelArticle()
  },
  methods: {
    getLabelArticle() {
      getLabelArticle({ label: this.label }).then(res => {
        if (res.code === 200) {
          this.dataList = res.data
          this.total = res.total
        }
      })
    }
  }
}
</script>
