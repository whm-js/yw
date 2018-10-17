<template>
  <div class="clean-main">
    <div class="clean-main-top">
      <el-row>
        <el-input placeholder="请输入医院/衣物/出货人/提货人搜索" prefix-icon="el-icon-search" v-model="searchWord" style="width: 250px;margin-right: 20px;"></el-input>
        <el-button type="primary" plain icon="el-icon-search"> 搜索 </el-button>
        <el-button type="primary" plain icon="el-icon-search"> 显示全部 </el-button>
      </el-row>
      <el-row style="margin-top: 20px;">
        <el-button type="primary" icon="el-icon-plus"  @click="dialogFormVisible = true"> 新增送还记录 </el-button>
      </el-row>
    </div>

    <div class="clean-main-list">
      <el-table :data="listDataJson" height="450" border style="width: 100%">
        <el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="time" label="送还时间" align="center"></el-table-column>
        <el-table-column prop="hospital" label="送还医院" align="center"></el-table-column>
        <el-table-column prop="clothes" label="送还衣物" align="center"></el-table-column>
        <el-table-column prop="number" label="送还数量" align="center">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="查看送还的详情" placement="right">
              <el-button type="text" size="medium"  @click="dialogSurplusVisible = true"> {{scope.row.number}} </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="consignor" label="发货人" align="center"></el-table-column>
        <el-table-column prop="consignee" label="提货人" align="center"></el-table-column>
        <el-table-column label="操作" width="250" align="center">
          <template slot-scope="scope">
						<el-button size="small" icon="el-icon-edit"> 修改记录 </el-button>
						<el-button size="small" icon="el-icon-delete"> 删除记录 </el-button>
					</template>
        </el-table-column>
      </el-table> 
    </div>

    <el-dialog title="新增送还记录" :visible.sync="dialogFormVisible">
      <el-form :model="addRecordData" size="medium" :label-width="formLabelWidth">
        <el-form-item label="送还衣物">
          <el-input v-model="addRecordData.clothesLists"></el-input>
        </el-form-item>
        <el-form-item label="送还数量">
          <el-input v-model="addRecordData.number"></el-input>
        </el-form-item>
        <el-form-item label="送还医院">
          <el-select v-model="addRecordData.hospital" placeholder="请选择活动区域">
            <el-option label="柳州市人民医院" value="shanghai"></el-option>
            <el-option label="柳州市中医院" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提货人">
          <el-input v-model="addRecordData.consignee"></el-input>
        </el-form-item>
        <el-form-item label="发货人">
          <el-input v-model="addRecordData.consignor"></el-input>
        </el-form-item>
        <el-form-item label="送还时间">
          <el-date-picker v-model="addRecordData.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>

    <el-dialog title="衣物编码列表" :visible.sync="dialogSurplusVisible" width="40%">
    <el-table :data="gridSurplusData">
      <el-table-column property="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column property="number" label="衣物编码" align="center"></el-table-column>
    </el-table>
  </el-dialog>

  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      dialogSurplusVisible: false,
      searchWord: "",
      listDataJson: [
        {
          index: 1,
          time: '2017-12-8',
          hospital: '柳州市人民医院',
          clothes: '护士服',
          number: 500,
          consignor: '小王',
          consignee: '小旺'
        },{
          index: 1,
          time: '2017-12-8',
          hospital: '柳州市人民医院',
          clothes: '护士服',
          number: 500,
          consignor: '小王',
          consignee: '小旺'
        },{
          index: 1,
          time: '2017-12-8',
          hospital: '柳州市人民医院',
          clothes: '护士服',
          number: 500,
          consignor: '小王',
          consignee: '小旺'
        },{
          index: 1,
          time: '2017-12-8',
          hospital: '柳州市人民医院',
          clothes: '护士服',
          number: 500,
          consignor: '小王',
          consignee: '小旺'
        }
      ],
      gridSurplusData: [
        {
          index: 1,
          number: 'SDF00258465'
        },
        {
          index: 1,
          number: 'SDF00258465'
        },
        {
          index: 1,
          number: 'SDF00258465'
        },
        {
          index: 1,
          number: 'SDF00258465'
        }
      ],
      addRecordData: {
        clothesLists: '',//[],
        number: 0,
        hospital: '',
        consignee: '',
        consignor: '',
        date: '',
        time: ''
      },
      formLabelWidth: '150px'
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
#clean-main {
  height: 100%;
}
.clean-main-top,.clean-main-list {
  height: auto;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
