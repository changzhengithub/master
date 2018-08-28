module.exports = {
  content: '我要借款',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Data': false,
    'Http': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard-list': false,
    'button': `{
        default: {
          type: 'primary',
          text: '发布借条'
        }
      }`,
    'deadline': false,
    'detail-list': false,
    'inputs': false,
    'modals': false,
    'tab': false,
    'tip': `{
        type: 'default',
        content: '已同意协议',
        protocol: '借条大师协议',
        icon: 'cong',
        selected: 'true'
      }`,
    'title': `{
        contentText: '我要借款'
      }`,
    'work-card': false
  }
}
