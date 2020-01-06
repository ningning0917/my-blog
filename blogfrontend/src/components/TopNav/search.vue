<template>
  <div class="search-wrapper">
    <form
      target="_blank"
      action="/search"
      accept-charset="UTF-8"
      method="get"
      :class="{'focus': isFocus}"
    >
      <el-popover
        v-model="isFocus"
        placement="top-start"
        width="240"
        trigger="manual"
      >
        <div>
          <div class="search-recent">
            <ul class="search-recent-item-wrap">
              <li>
                <a href="/search?q=%E5%B0%A4%E5%A4%A7&amp;utm_source=desktop&amp;utm_medium=search-recent" target="_blank" class="flex-sb">
                  <div>
                    <svg-icon icon-class="time" />
                    <span>尤大</span>
                  </div>
                  <div>
                    <i class="el-icon-close" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <input slot="reference" type="text" autocomplete="on" placeholder="搜索" class="search-input" @focus="handleFocus" @blur="handleBlur" />
      </el-popover>
      <a class="search-btn" href="javascript:void(null)">
        <i class="el-icon-search" />
      </a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    focus: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isFocus: false
    }
  },
  watch: {
    focus() {
      this.handleBlur()
      const input = document.querySelector('.search-input')
      input.blur()
    }
  },
  methods: {
    handleFocus() {
      this.isFocus = true
    },
    handleBlur() {
      this.isFocus = false
    }
  }
}
</script>

<style lang="scss">
  .el-icon-search {
    transition: all .3s;
  }
  .focus {
    .search-btn {
      background: #969696;
      border-radius: 100%;
      .el-icon-search {
        color: #fff;
      }
    }
  }
</style>
<style scoped lang="scss">
  input:focus {
    outline: none;
  }
  .search-wrapper {
    padding-left: 15px;
  }
  .search-wrapper li {
    margin-right: 10px;
  }
  .search-wrapper form {
    position: relative;
  }

  .search-input {
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width .5s;
    -moz-transition: width .5s;
    -webkit-transition: width .5s;
    -o-transition: width .5s;
    transition-delay: .1s;
    float: left;
  }
  .focus {
    .search-input {
      width: 240px;
    }
  }

  .search-btn {
    position: absolute;
    top: 4px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    color: #969696;
    text-align: center;
    transition: all .2s;
  }
  .search-recent .search-recent-item-wrap li {
    display: block;
  }
  .search-recent .search-recent-item-wrap li a {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    padding: 0 10px;
    &:hover {
      background: #eee;
    }
  }

</style>
