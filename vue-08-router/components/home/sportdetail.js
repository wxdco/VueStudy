(function(){

    const template = `<div class="jumbotron">
    <h1>{{id}}</h1>
    <h2>{{detail.title}}</h2>
    <p>{{detail.content}}</p>
</div>`

    window.SportDetail = {
        template,
        data() {
            return {
                id : null,
                detail:{}
            }
        },
        created() {
            this.getDetail()
        },
        methods: {
            getDetail(){
                this.id = this.$route.params.id - 0
                axios.get('http://127.0.0.1:5500/vue-08-router/sport.json')
                    .then(response => {
                        this.detail = response.data.find(spd => {
                            return this.id === spd.id
                        })

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
        watch: {
            '$route': function() {
                this.getDetail()
            }
        }
    }
})()