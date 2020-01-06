const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  itemOptions: state => state.app.itemOptions,
  consumerNo: state => state.execute.consumerNo,
  transStatus: state => state.execute.transStatus,
  hospitalNo: state => state.execute.hospitalNo,
  IdentifyType: state => state.execute.IdentifyType,
  province: state => state.execute.province,
  agentCode: state => state.execute.agentCode,
  seriousAuthor: state => state.execute.seriousAuthor,
  isUpload: state => state.data.isUpload,
  illCheckUpload: state => state.data.illCheckUpload,
  topInfo: state => state.data.topInfo
}
export default getters
