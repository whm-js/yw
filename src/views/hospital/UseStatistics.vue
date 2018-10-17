<template>
	<!--
    	作者：523387314@qq.com
    	时间：2018-10-11
    	描述：搜索
    -->
	<div id="clean-main">
		<div class="clean-main-top">
			<el-row>
				<el-input placeholder="衣服搜索" prefix-icon="el-icon-search" v-model="searchWord" style="width: 250px;margin-right: 20px;"></el-input>
				<el-button type="primary" plain icon="el-icon-search"> 搜索 </el-button>
				<el-button type="primary" plain icon="el-icon-search"> 显示全部 </el-button>
			</el-row>
		</div>

	<!--
    	作者：523387314@qq.com
    	时间：2018-10-11
    	描述：表格
    -->
		<div class="clean-main-list">
			<el-table :data="listDataJson" height="450" border style="width: 100%">
				<el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
				<el-table-column prop="name" label="衣物名称" align="center"></el-table-column>
				<el-table-column prop="count" label="衣物总数量" align="center"></el-table-column>
				<el-table-column prop="count20" label="使用超过20次的衣物件数" align="center"></el-table-column>
				<el-table-column prop="count10" label="使用超过10次的衣物件数" align="center"></el-table-column>
				<el-table-column label="操作" width="250" align="center">
					<template slot-scope="scope">
						<el-button size="small" icon="el-icon-details"> 查看使用详情 </el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

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
				listDataJson: [{
					index:1,
					name:"我是衣物名称",
					count:100,
					count10:10,
					count20:20
				}, {
					index:2,
					name:"我是衣物名称",
					count:100,
					count10:10,
					count20:20
				}, {
					index:3,
					name:"我是衣物名称",
					count:100,
					count10:10,
					count20:20
				}, {
					index:4,
					name:"我是衣物名称",
					count:100,
					count10:10,
					count20:20
				}],
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
	
	.clean-main-top,
	.clean-main-list {
		height: auto;
		margin-top: 20px;
		margin-left: 10px;
	}
</style>