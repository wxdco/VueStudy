; (function () {
  const template = `<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <router-link to="/" tag="li" exact><a>首页</a></router-link>
    <router-link to="/news" tag="li"><a>新闻</a></router-link>
    <router-link to="/about" tag="li"><a>关于</a></router-link>
  </ul>
</div>`
  window.AppLeft = {
    template,
    data() {
      return {
        delNum: 0
      }
    },
    created() {
      PubSub.subscribe('changeNum', (event, data) => {
        this.delNum = this.delNum + data
      })
    },
  }
})()