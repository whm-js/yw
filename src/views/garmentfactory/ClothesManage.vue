<template>
  <div class="ClothesManage">

    <div class="top">
      <el-button icon="el-icon-plus" style="margin-left:30px;margin-top: 20px;">
        新增发货记录
      </el-button>
      <div style="height:100%;float:right;">
        <el-autocomplete class="inline-input" value-key="Consignor" v-model="seachValue" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect" style="width:300px;margin-top: 20px;">
          <el-button slot="append" icon="el-icon-search" @click.native.prevent="seachClick"></el-button>
        </el-autocomplete>
        <el-button style="margin-left:30px;" @click.native.prevent="bbb">
          显示全部
        </el-button>
      </div>
    </div>

    <el-table :data="ClothesManageData" stripe border :max-height="innerHeight" ref='datatable' id="datatable1" style="width: 100%;">
      <el-table-column type="index" label="序号">
      </el-table-column>
      <el-table-column prop="time" label="发货时间">
      </el-table-column>
      <el-table-column prop="target" label="发货对象">
      </el-table-column>
      <el-table-column prop="commodity" label="发货商品">
      </el-table-column>
      <el-table-column prop="num" label="数量">
      </el-table-column>
      <el-table-column prop="Consignor" label="发货人">
      </el-table-column>
      <el-table-column prop="Consignee" label="收货人">
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="small" @click="modifyClick(scope.row)">
            修改记录
          </el-button>
          <el-button size="small">
            删除记录
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-pagination style="float:right;" v-show="showpage" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[12, 24, 36, 48, 60]" :page-size="currentPageSize" layout="sizes, prev, pager, next" :total="total">
    </el-pagination> -->

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
let that;
import { ClothesManageData } from "@/testdata/testData";
export default {
  name: "",
  components: {},
  data() {
    return {
      msg: "hello",
      innerHeight: window.innerHeight - 150,
      seachValue: "",
      ClothesManageData: ClothesManageData
    };
  },
  created() {
    that = this;
  },
  computed: {
    ...mapGetters(["userLoginInfo"])
  },
  methods: {
    ...mapActions({ setUserLoginInfo: "setUserLoginInfo" }),
    seachClick() {
      this.setUserLoginInfo(this.seachValue);
    },
    querySearch(queryString, cb) {
      var restaurants = this.ClothesManageData;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.Consignor.toLowerCase().indexOf(
            queryString.toLowerCase()
          ) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    modifyClick(row) {
      console.log(row);
    },
    showAll() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    aaa() {
      console.log(this);
    },
    bbb() {
      const p = {
        msg: "hi"
      };
      // this.aaa();
      this.aaa.apply(p);
    }
  },
  mounted() {
    window.onresize = () => {
      that.innerHeight = window.innerHeight - 150;
    };
  }
};
</script>

<style>
.ClothesManage {
  height: 100%;
}
.ClothesManage .top {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 80px;
}
</style>
