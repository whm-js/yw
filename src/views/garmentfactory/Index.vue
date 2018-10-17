<template>
  <div id="garmentfactory-index">
    <el-row class="el-row-top">
      <el-col :span="24">
        <span style="line-height:60px;font-size:20px;">医疗衣物管理平台</span>
        <span @click="LogoutClick" style="float:right;">退出</span>
        <span style="float:right;margin-right:20px;">XXX制衣厂</span>
      </el-col>
    </el-row>

    <el-row class="el-row-content">
      <el-col class="el-col-left" :xs="8" :sm="7" :md="6" :lg="5" :xl="4">
        <el-menu :default-active="routerPath" @select="handleSelect" style="height:100%;" class="el-menu-vertical-demo">
          <el-menu-item index="/GarmentFactoryIndex/ClothesManage">
            <template slot="title">
              <i class="el-icon-sold-out"></i>
              <span>发货管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/GarmentFactoryIndex/ClothesStatistics">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">发货统计</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/GarmentFactoryIndex/ClothesUseManage">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">衣物使用管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/GarmentFactoryIndex/AccountManage">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>账号管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/GarmentFactoryIndex/CleanOrReturn">
            <template slot="title">
              <i class="el-icon-sort"></i>
              <span>洗涤送还登记</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/GarmentFactoryIndex/StockManage">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>存货管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="el-col-right" :xs="16" :sm="17" :md="18" :lg="19" :xl="20">
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-col>
    </el-row>

    <!-- <el-row class="el-row-footer">
      <el-col :span="24">

      </el-col>
    </el-row> -->

  </div>
</template>

<script>
import { mapActions } from "vuex";
import { userLogout } from "../../server/data";
let that;
export default {
  name: "",
  components: {},
  data() {
    return {
      routerPath: "/GarmentFactoryIndex/ClothesManage"
    };
  },
  created() {
    that = this;
  },
  activated() {
    this.$router.push(this.routerPath);
  },
  methods: {
    ...mapActions({ userLogout: "userLogout" }),
    LogoutClick() {
      userLogout().then(() => {
        this.$message({
          message: "退出登录成功！",
          type: "success"
        });
        that.userLogout();
        that.$router.push("/");
      });
    },
    handleSelect(key) {
      if (this.routerPath !== key) this.routerPath = key;
      this.$router.push(key);
    }
  }
};
</script>

<style lang="less">
#garmentfactory-index {
  height: 100%;
}
.el-row-top {
  color: @fontColor-white;
}
</style>
