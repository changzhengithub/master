module.exports = {
  content: '失信查询',
  router: true,
  vuex: {
    'mutations': false,
    'state': false
  },
  class: {
    'Check': false,
    'Http': false,
    'Router': false,
    'Time': false,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': `'center'`,
    'button': `{
        default: [{
          type: 'primary',
          text: '立即查询'
        }]
      }`,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': `{
        type: 'default',
        placeholder: '输入查询对象的账号/身份证号'
      }`,
    'keyboard': false,
    'modals': false,
    'nav': false,
    'pay-password': false,
    'receipt': false,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '失信查询'
      }`,
    'work-card': false
  }
}
