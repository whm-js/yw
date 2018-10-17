<template>
  <div class="statistics-main">
    <div class="statistics-main-top">
			<el-row>
				<span class="demonstration">统计时间范围：</span>
				<el-date-picker v-model="searchDate" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
				</el-date-picker>
			</el-row>
			<el-row style="margin-top: 20px;text-align: center;line-height: 35px;background-color: #67C23A;color: #ffffff;">
				<el-row>
					<el-col :span="8">发货总数量</el-col>
					<el-col :span="8">购买的分销商数量</el-col>
					<el-col :span="8">购买的医院数量</el-col>
				</el-row>
				<el-row style="color: #F56C6C;font-weight: bold;">
					<el-col :span="8">55555</el-col>
					<el-col :span="8">10000</el-col>
					<el-col :span="8">20000</el-col>
				</el-row>
			</el-row>
		</div>
		
    <div class="statistics-main-list" style="background-color: #ffffff;">
			<el-tabs type="card" @tab-click="handleClick">
				<el-tab-pane>
					<span slot="label"><i class="el-icon-menu"></i> 按分销商</span>
					<el-table :data="listDataJson" height="450" border style="width: 100%">
						<el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
						<el-table-column prop="name" label="分销商名称" align="center"></el-table-column>
						<el-table-column prop="agentCode" label="所属代理商" align="center"></el-table-column>
						<el-table-column prop="agentRange" label="所属省区" align="center"></el-table-column>
						<el-table-column prop="number" label="发货数量" align="center"></el-table-column>
						<el-table-column label="操作" align="center">
							<template slot-scope="scope">
								<el-button size="small" icon="el-icon-view"  @click="dialogTableVisible = true"> 查看详情 </el-button>
							</template>
						</el-table-column>
					</el-table> 
				</el-tab-pane>
				<el-tab-pane>
					<span slot="label"><i class="el-icon-menu"></i> 按医院</span>
					<el-table :data="listDataJson2" height="450" border style="width: 100%">
						<el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
						<el-table-column prop="name" label="医院名称" align="center"></el-table-column>
						<el-table-column prop="agentCode" label="所属分销商" align="center"></el-table-column>
						<el-table-column prop="agentRange" label="所属省区" align="center"></el-table-column>
						<el-table-column prop="number" label="发货数量" align="center"></el-table-column>
						<el-table-column label="操作" align="center">
							<template slot-scope="scope">
								<el-button size="small" icon="el-icon-view"  @click="dialogTableVisible = true"> 查看详情 </el-button>
							</template>
						</el-table-column>
					</el-table> 
				</el-tab-pane>
			</el-tabs>
		</div>
		
		<el-dialog title="查看详情" :visible.sync="dialogTableVisible">
			<el-row style="margin-top: 20px;text-align: center;line-height: 35px;background-color: #67C23A;color: #ffffff;">
				<el-row>
					<el-col :span="8">购买总数量</el-col>
					<el-col :span="8">购买衣物种类</el-col>
				</el-row>
				<el-row style="color: #F56C6C;font-weight: bold;">
					<el-col :span="8">555</el-col>
					<el-col :span="8">20</el-col>
				</el-row>
			</el-row>
			<el-table :data="gridData">
				<el-table-column property="index" label="序号" width="150" align="center"></el-table-column>
				<el-table-column property="name" label="购买衣物名" width="200" align="center"></el-table-column>
				<el-table-column property="number" label="购买衣物数量" align="center"></el-table-column>
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
      pathIndex: "/ClothesStatistics",
			dialogTableVisible: false,
			searchDate: '',
			pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
				listDataJson: [
					{
						index: 1,
						name: '柳州酷玩',
						agentCode: '柳州酷奇',
						agentRange: '柳州',
						number: 2000
					},
					{
						index: 1,
						name: '柳州酷玩',
						agentCode: '柳州酷奇',
						agentRange: '柳州',
						number: 2000
					},
					{
						index: 1,
						name: '柳州酷玩',
						agentCode: '柳州酷奇',
						agentRange: '柳州',
						number: 2000
					},
					{
						index: 1,
						name: '柳州酷玩',
						agentCode: '柳州酷奇',
						agentRange: '柳州',
						number: 2000
					}
				],
				listDataJson2: [
					{
						index: 1,
						name: '梧州市人民医院',
						agentCode: '梧州桂玲',
						agentRange: '梧州',
						number: 2000
					},
					{
						index: 1,
						name: '柳州市工人医院',
						agentCode: '柳州酷奇',
						agentRange: '柳州',
						number: 2000
					},
					{
						index: 1,
						name: '厦门市中医院',
						agentCode: '厦门宏兴',
						agentRange: '厦门',
						
						number: 2000
					}
				],
				gridData: [
					{
						index: 1,
						name: '护士服',
						number: 200
					},
					{
						index: 2,
						name: '医师服',
						number: 200
					},
					{
						index: 3,
						name: '药师服',
						number: 200
					}
				]
    };
  },
  created() {},
  methods: {
		handleClick(tab, event) {
        console.log(tab, event);
      }
	}
};
</script>

<style>
.statistics-main {
  height: 100%;
}

.statistics-main-top,.statistics-main-list {
  height: auto;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
