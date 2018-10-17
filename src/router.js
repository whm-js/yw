import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import GarmentFactoryIndex from "./views/garmentfactory/Index.vue";
import HospitalIndex from "./views/hospital/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/GarmentFactoryIndex",
      name: "GarmentFactoryIndex",
      component: GarmentFactoryIndex,
      children: [
        {
          path: "/GarmentFactoryIndex/ClothesManage",
          name: "ClothesManage",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/garmentfactory/ClothesManage.vue")
        },
        {
          path: "/GarmentFactoryIndex/ClothesStatistics",
          name: "ClothesStatistics",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/garmentfactory/ClothesStatistics.vue")
        },
        {
          path: "/GarmentFactoryIndex/ClothesUseManage",
          name: "ClothesUseManage",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/garmentfactory/ClothesUseManage.vue")
        },
        {
          path: "/GarmentFactoryIndex/AccountManage",
          name: "AccountManage",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/garmentfactory/AccountManage.vue")
        },
        {
          path: "/GarmentFactoryIndex/CleanOrReturn",
          name: "CleanOrReturn",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/garmentfactory/CleanOrReturn.vue")
        },
        {
          path: "/GarmentFactoryIndex/StockManage",
          name: "StockManage",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/garmentfactory/StockManage.vue")
        }
      ]
    },
    {
      path: "/HospitalIndex",
      name: "HospitalIndex",
      component: HospitalIndex,
      children: [
        {
          path: "/HospitalIndex/UseStatistics",
          name: "UseStatistics",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/hospital/UseStatistics.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
