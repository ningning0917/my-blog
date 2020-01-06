<template>
  <div class="divider-select-wrapper">
    <el-divider />
    <div class="flex-sb divider-box">
      <div>
        <el-tag type="success">{{ tableTitle }}</el-tag>
      </div>
      <div>
        <slot />
      </div>
      <el-select v-if="item" v-model="itemValue" :style="{width: width}" class="select-box" multiple placeholder="请选择" value="" @change="change">
        <el-option
          v-for="items in itemOptions"
          :key="items"
          :label="items"
          :value="items"
        />
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DividerSelect',
  props: {
    tableTitle: {
      type: String,
      default: ''
    },
    item: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '40%'
    }
  },
  data() {
    return {
      itemValue: [],
      itemOptions: []
    }
  },
  mounted() {
    const routeName = this.$route.name
    if (routeName === 'PlatformTrading') {
      this.itemOptions = this.$store.state.item.platformOpt
      this.itemValue = this.$store.state.item.platformVal
    } else if (routeName === 'DiseaseDiagnosis') {
      this.itemOptions = this.$store.state.item.diseaseOpt
      this.itemValue = this.$store.state.item.diseaseVal
    } else if (routeName === 'CheckIn') {
      this.itemOptions = this.$store.state.item.checkInOpt
      this.itemValue = this.$store.state.item.checkInVal
    }
  },
  methods: {
    change(val) {
      const routeName = this.$route.name
      if (routeName === 'PlatformTrading') {
        this.$store.dispatch('item/setPlatformVal', val)
      } else if (routeName === 'DiseaseDiagnosis') {
        this.$store.dispatch('item/setDiseaseVal', val)
      } else if (routeName === 'CheckIn') {
        this.$store.dispatch('item/setCheckInVal', val)
      }
      this.$bus.emit('itemValue')
    }
  }
}
</script>

<style scoped lang="scss">
  .divider-select-wrapper {
    margin-bottom: 5px;
  }
</style>
