;(function(){
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <!--右边上半区域-->
    <!--<h1 class="page-header">Dashboard</h1>-->
    <slot name="dashboard"></slot>
  <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>
    <!--右边下半区域-->
  <h2 class="sub-header">Section title</h2>
  <home-list :empList="empList" :deleteEmp="deleteEmp"></home-list>
</div>`
    window.AppHome = {
        template,
        components:{
          Dashboard,
          HomeList
        },
        data() {
          return {
            hobbies:  ['coding','吃饭','睡觉','打豆豆'],

            empList: [
              {
                id: 1,
                name: 'wxd',
                salary: 8000
              },
              {
                id: 2,
                name: 'wxd1',
                salary: 80010
              },
              {
                id: 3,
                name: 'wxd2',
                salary: 80002
              },
              {
                id: 4,
                name: 'wxd3',
                salary: 80001
              },
            ]
          }
        },
        methods: {
          deleteEmp(index){
              this.empList.splice(index,1)
          },
          deleteHobby(index){
            this.hobbies.splice(index,1)
            PubSub.publish('changeNum', 1)
          }
        },  
        
        
    }
})()