(function(){

    window.router = new VueRouter({
        routes: [
            {
                path:"/",
                component: AppHome
            },
            {
                path:"/news",
                component: News,
                children:[
                    {
                        path:"sport",
                        component: Sport,
                        children:[
                            {
                                path:"detail/:id",
                                component: SportDetail
                            }
                        ]
                    },
                    {
                        path:"tech",
                        component: Tech
                    },
                    {
                        path:"",
                        redirect:"sport"
                    },
                ]
            },
            {
                path:"/about",
                component: About
            }
        ],
        linkActiveClass: 'active'    
    })
})()