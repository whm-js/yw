<template>
  <div class="stock-main">
	<el-table :data="listDataJson" height="450" border style="width: 100%">
		<el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
		<el-table-column prop="clothes" label="衣物" align="center"></el-table-column>
		<el-table-column prop="inCount" label="进货总量" align="center">
			<template slot-scope="scope">
				<el-tooltip class="item" effect="dark" content="查看进货的详情" placement="right">
					<el-button type="text" size="medium"  @click="dialogInVisible = true"> {{scope.row.inCount}} </el-button>
				</el-tooltip>
			</template>
		</el-table-column>
		<el-table-column prop="outCount" label="发货总量" align="center">
			<template slot-scope="scope">
				<el-tooltip class="item" effect="dark" content="查看发货的详情" placement="right">
					<el-button type="text" size="medium"  @click="dialogOutVisible = true"> {{scope.row.outCount}} </el-button>
				</el-tooltip>
			</template>
		</el-table-column>
		<el-table-column prop="surplusCount" label="剩余总量" align="center">
			<template slot-scope="scope">
				<el-tooltip class="item" effect="dark" content="查看剩余的详情" placement="right">
					<el-button type="text" size="medium"  @click="dialogSurplusVisible = true"> {{scope.row.surplusCount}} </el-button>
				</el-tooltip>
			</template>
		</el-table-column>
	</el-table> 
	
	<el-dialog title="查看进货详情" :visible.sync="dialogInVisible">
	  <el-table :data="gridInData" border>
		<el-table-column property="index" label="序号" width="50" align="center"></el-table-column>
		<el-table-column property="time" label="进货时间" align="center"></el-table-column>
		<el-table-column property="inObj" label="进货对象" align="center"></el-table-column>
		<el-table-column property="inCount" label="进货数量" align="center">
			<template slot-scope="scope">
				<el-tooltip class="item" effect="dark" content="查看进货的详情" placement="right">
					<el-button type="text" size="medium"  @click="dialogSurplusVisible = true"> {{scope.row.inCount}} </el-button>
				</el-tooltip>
			</template>
		</el-table-column>
		<el-table-column property="consignor" label="发货人" align="center"></el-table-column>
		<el-table-column property="consignee" label="提货人" align="center"></el-table-column>
	  </el-table>
	</el-dialog>
	
	<el-dialog title="查看发货详情" :visible.sync="dialogOutVisible">
		<el-table :data="gridOutData" border>
			<el-table-column property="index" label="序号" width="50" align="center"></el-table-column>
			<el-table-column property="time" label="发货时间" align="center"></el-table-column>
			<el-table-column property="outObj" label="发货对象" align="center"></el-table-column>
			<el-table-column property="outCount" label="发货数量" align="center">
				<template slot-scope="scope">
					<el-tooltip class="item" effect="dark" content="查看发货的详情" placement="right">
						<el-button type="text" size="medium"  @click="dialogSurplusVisible = true"> {{scope.row.outCount}} </el-button>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column property="consignor" label="发货人" align="center"></el-table-column>
			<el-table-column property="consignee" label="提货人" align="center"></el-table-column>
		</el-table>
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
      dialogInVisible: false,
      dialogOutVisible: false,
      dialogSurplusVisible: false,
	  listDataJson: [{
		index: 1,
		clothes: '护士服',
		inCount: 500,
		outCount: 400,
		surplusCount: 100
	  },{
		index: 1,
		clothes: '护士服',
		inCount: 500,
		outCount: 400,
		surplusCount: 100
	  },
	  {
	  index: 1,
	  clothes: '护士服',
	  inCount: 500,
	  outCount: 400,
	  surplusCount: 100
	  },
	  {
	  index: 1,
	  clothes: '护士服',
	  inCount: 500,
	  outCount: 400,
	  surplusCount: 100
	  }
	  ],
	  gridInData: [
		  {
		  index: 1,
		  time: '2018-05-25',
		  inObj: 'test',
		  inCount: 500,
		  consignor: 'test002',
		  consignee: 'test100'
		  },
		  {
		  index: 1,
		  time: '2018-05-25',
		  inObj: 'test',
		  inCount: 500,
		  consignor: 'test002',
		  consignee: 'test100'
		  },
		  {
		  index: 1,
		  time: '2018-05-25',
		  inObj: 'test',
		  inCount: 500,
		  consignor: 'test002',
		  consignee: 'test100'
		  }
	  ],
	  gridOutData: [{
		  index: 1,
		  time: '2018-05-25',
		  outObj: '张三',
		  outCount: 500,
		  consignor: '张三002',
		  consignee: '张三100'
		  },
		  {
		  index: 1,
		  time: '2018-05-25',
		  outObj: '张三',
		  outCount: 500,
		  consignor: '张三002',
		  consignee: '张三100'
		  },
		  {
		  index: 1,
		  time: '2018-05-25',
		  outObj: '张三',
		  outCount: 500,
		  consignor: '张三002',
		  consignee: '张三100'
		  }],
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
	  ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
.stock-main {
  height: 100%;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
