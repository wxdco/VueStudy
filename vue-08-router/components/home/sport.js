(function(){
    const template = `
		  <!--体育栏目-->
		<div>
			<ul>
				<li v-for="sport in sportArry" :key="sport.id">
                    <router-link :to="'/news/sport/detail/' + sport.id">{{sport.title}}</router-link>
                </li>
			</ul>
			<!--详情-->
			<router-view></router-view>
		</div>  
		 `
    window.Sport = {
        template,
        data() {
            return {
                sportArry: []
            }
        },
        created() {
            this.getSportArr();
        },
        methods: {
            getSportArr(){
                axios.get('http://127.0.0.1:5500/vue-08-router/sport.json')
                    .then(response => {
                        // handle success
                        console.log(response);
                        this.sportArry = response.data;
                    })
                    .catch(error => {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        },

    }

})()