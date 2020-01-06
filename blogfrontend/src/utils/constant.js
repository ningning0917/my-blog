import { selectCode } from '../api/permission/user'

export const dataPickerOptions = {
  disabledDate(time) {
    return time.getTime() > Date.now()
  },
  shortcuts: [{
    text: '最近一周',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}
export const pickerOptions = {
  shortcuts: [{
    text: '最近一周',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}

export const userTypeOpt = [
  {
    value: '0',
    label: '公司'
  }, {
    value: '1',
    label: '个人'
  }
]

export const shareFlagOpt = [
  {
    value: '0',
    label: '否'
  }, {
    value: '1',
    label: '是'
  }
]

// 数据请求成功的状态
export const S_OK = '0000'

// 业务类型
export const businessTypeOptions = [{
  value: '0',
  label: '门诊'
}, {
  value: '1',
  label: '住院'
}]

// 市
export function getCity(parentValue) {
  const data = { 'codeType': 'city', 'parentValue': parentValue }
  return new Promise((resolve, reject) => {
    selectCode(data).then(res => {
      if (res) {
        return resolve(res.codeData)
      } else {
        return reject(false)
      }
    })
  })
}

// 区
export function getArea(parentValue) {
  const data = { 'codeType': 'area', 'parentValue': parentValue }
  return new Promise((resolve, reject) => {
    selectCode(data).then(res => {
      if (res) {
        return resolve(res.codeData)
      } else {
        return reject(false)
      }
    })
  })
}

// 浙江省代码
export const ZHEJIANG = '330000'

// 交易结果
export const resultStatusOptions = [
  {
    value: '1',
    label: '成功'
  }, {
    value: '2',
    label: '失败'
  }
]

// 日志类型
export const logTypeOptions = [
  {
    value: '1',
    label: '发起方请求报文'
  }, {
    value: '2',
    label: '内部请求转化报文'
  }, {
    value: '3',
    label: '内部请求响应报文'
  }, {
    value: '4',
    label: '发起方请求响应报文'
  }, {
    value: '5',
    label: '内部发起请求报文'
  }, {
    value: '6',
    label: '内部发起响应报文'
  }, {
    value: '其它',
    label: '其它'
  }
]

// 调查类型
export const investigateTypeOpt = [
  {
    value: '1',
    label: '健康调查'
  }, {
    value: '2',
    label: '就诊核实'
  }, {
    value: '3',
    label: '大病核实'
  }
]

// 授权文件类型
export const illnessAuthType = [
  {
    value: '0',
    label: '授权文件'
  }, {
    value: '9',
    label: '其他'
  }
]

// 大病授权状态
export const illnessStatus = [
  {
    value: 'N',
    label: '有效'
  }, {
    value: 'Y',
    label: '无效'
  }
]

// 批次状态
export const batchStatus = [
  {
    value: '0',
    label: '临时状态'
  }, {
    value: '1',
    label: '处理中'
  }, {
    value: '2',
    label: '处理完成'
  }, {
    value: '3',
    label: '处理失败'
  }
]

// 同步/ 异步标识
export const asyncFlagOpt = [
  {
    value: '0',
    label: '异步'
  }, {
    value: '1',
    label: '同步'
  }
]

// 交易子状态
export const subStatusOptions = [
  {
    value: '0',
    label: '待处理'
  }, {
    value: '1',
    label: '处理中'
  }, {
    value: '2',
    label: '处理成功'
  }, {
    value: '3',
    label: '推送成功'
  }, {
    value: '10',
    label: '调用失败'
  }, {
    value: '21',
    label: '处理失败'
  }, {
    value: '31',
    label: '推送失败'
  }
]

// 交易子类型
export const subTypeOpt = [
  {
    value: 'DISCHARGE',
    label: '出院登记交易'
  }, {
    value: 'FEEDETAIL',
    label: '住院费用明细交易'
  }, {
    value: 'INSPECT',
    label: '住院检查检验报告交易'
  }, {
    value: 'LIB',
    label: '住院实验报告交易'
  }, {
    value: 'MZDETAIL',
    label: '门诊实时交易'
  }, {
    value: 'SETTLE',
    label: '住院结算信息交易'
  }, {
    value: 'SUMMARY',
    label: '病例信息交易'
  }
]

export const receiptTypeOpt = [
  {
    value: '1',
    label: '门诊'
  }, {
    value: '2',
    label: '住院'
  }
]

export const res = '问题描述：在使用element-ui el-date-picker组件时，我需要控制日期选择范围，比如开始时间小于结束时间，结束时间大于开始时间\n' +
  '![image.png](https://upload-images.jianshu.io/upload_images/10949559-5f4e3d4edd065800.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
  '![image.png](https://upload-images.jianshu.io/upload_images/10949559-0f5713dba24a6052.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
  '\n' +
  '\n' +
  '代码如下\n' +
  '\n' +
  '```\n' +
  '<el-form-item label="查询开始时间:" prop="startDate">\n' +
  '        <el-date-picker\n' +
  '          v-model="ruleForm.startDate"\n' +
  '          align="right"\n' +
  '          type="date"\n' +
  '          placeholder="选择日期"\n' +
  '          clearable\n' +
  '          value-format="yyyy-MM-dd"\n' +
  '          :picker-options="startTime"\n' +
  '        />\n' +
  '      </el-form-item>\n' +
  '      <el-form-item label="查询结束时间:" prop="endDate">\n' +
  '        <el-date-picker\n' +
  '          v-model="ruleForm.endDate"\n' +
  '          align="right"\n' +
  '          type="date"\n' +
  '          placeholder="选择日期"\n' +
  '          clearable\n' +
  '          value-format="yyyy-MM-dd"\n' +
  '          :picker-options="endTime"\n' +
  '        />\n' +
  '      </el-form-item>\n' +
  '\n' +
  ' <script>\n' +
  'export default {\n' +
  'data() {\n' +
  '  return {\n' +
  '    startTime: {\n' +
  '        disabledDate: time => {\n' +
  '          if (this.ruleForm.endDate) {\n' +
  '            return (\n' +
  '              time.getTime() > new Date(this.ruleForm.endDate).getTime()\n' +
  '            )\n' +
  '          }\n' +
  '        }\n' +
  '      },\n' +
  '      endTime: {\n' +
  '        disabledDate: time => {\n' +
  '          if (this.ruleForm.startDate) {\n' +
  '            return (\n' +
  '              time.getTime() < new Date(this.ruleForm.startDate).getTime() - 24 * 3600 * 1000\n' +
  '            )\n' +
  '          }\n' +
  '        }\n' +
  '      }\n' +
  '  }\n' +
  '}\n' +
  '</script>\n' +
  '```\n' +
  '\n' +
  '还有一种需求是在第一种情况基础上加上时间范围，比如结束时间大于开始时间并且不能大于开始时间加一个月\n' +
  '\n' +
  '效果如下\n' +
  '![image.png](https://upload-images.jianshu.io/upload_images/10949559-4093cb48ef33ee1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
  '![image.png](https://upload-images.jianshu.io/upload_images/10949559-2131bb0bc2e8e00d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
  '\n' +
  '代码如下\n' +
  '```\n' +
  'data() {\n' +
  '    return {\n' +
  '      startTime: {\n' +
  '        disabledDate: time => {\n' +
  '          if (this.ruleForm.endDate) {\n' +
  '            return (\n' +
  '              time.getTime() > new Date(this.ruleForm.endDate).getTime() || time.getTime() < new Date(this.ruleForm.endDate).getTime() - 30 * 24 * 3600 * 1000\n' +
  '            )\n' +
  '          }\n' +
  '        }\n' +
  '      },\n' +
  '      endTime: {\n' +
  '        disabledDate: time => {\n' +
  '          if (this.ruleForm.startDate) {\n' +
  '            return (\n' +
  '              time.getTime() < (new Date(this.ruleForm.startDate).getTime() - 24 * 3600 * 1000) || time.getTime() > (new Date(this.ruleForm.startDate).getTime() + 30 * 24 * 3600 * 1000)\n' +
  '            )\n' +
  '          }\n' +
  '        }\n' +
  '      },\n' +
  '  }\n' +
  '}\n' +
  '```\n' +
  '结束了，如果喜欢欢迎点赞，评论，关注我😄😄😄\n'
