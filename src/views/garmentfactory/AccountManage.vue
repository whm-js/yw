<template>
    <div class="account-main">
        <div class="account-top">
            <el-row>
                <el-input placeholder="请输入/账号/名称" prefix-icon="el-icon-search" v-model="searchWord" style="width: 250px;margin-right: 20px;"></el-input>
                <el-button type="primary" plain icon="el-icon-search"> 搜索 </el-button>
                <el-button type="primary" plain icon="el-icon-search"> 显示全部 </el-button>
            </el-row>
            <el-row style="margin-top: 20px;">
                <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true"> 新增账号 </el-button>
            </el-row>
        </div>
        <div class="account_list">
            <el-table :data="AccountData" stripe border :max-height="innerHeight" ref='datatable' id="datatable1" style="width: 100%;">
                <el-table-column type="index" label="序号">
                </el-table-column>
                <el-table-column prop="account" label="账号">
                </el-table-column>
                <el-table-column prop="name" label="名称">
                </el-table-column>
                <el-table-column prop="provincial" label="所属省区">
                </el-table-column>
                <el-table-column prop="classification" label="分类">
                </el-table-column>
                <el-table-column prop="Contacts" label="联系人">
                </el-table-column>
                <el-table-column prop="Contactnumber" label="联系电话">
                </el-table-column>
                <el-table-column label="操作" width="320">
                    <template slot-scope="scope">
                        <el-button size="small" @click="modifyClick(scope.row)">
                            修改账号
                        </el-button>
                        <el-button size="small">
                            重置密码
                        </el-button>
                        <el-button size="small">
                            删除账号
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--<el-dialog title="新增账号记录" :visible.sync="dialogformvisible">
        <el-form :model="addrecorddata" size="medium" :label-width="formlabelwidth">
            <el-form-item label="账号">
                <el-input v-model="addrecorddata.clotheslists"></el-input>
            </el-form-item>
            <el-form-item label="账号名称">
                <el-input v-model="addrecorddata.number"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-select v-model="addrecorddata.hospital" placeholder="请选择分类">
                    <el-option label="制衣厂" value="shanghai"></el-option>
                    <el-option label="代理商" value="beijing"></el-option>
                    <el-option label="经销商" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属省区">
                <el-select v-model="addrecorddata.hospital" placeholder="请选择所属省区">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="重庆" value="chongqing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="联系人">
                <el-input v-model="addrecorddata.consignee"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="addrecorddata.consignor"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogformvisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogformvisible = false">保 存</el-button>
        </div>
    </el-dialog>-->

    </div>
</template>


<script>
    export default {
        name: "",
        components: {},
        data() {
            return {
                dialogFormVisible: false,
                searchWord: "",
                AccountData: [
                    {
                        index: 1,
                        account: 'yiuuu1111',
                        name : '王静',
                        provincial: '北京',
                        classification: '制衣厂',
                        Contacts: '小王',
                        Contactnumber: '1897777777'
                    }, {
                        index: 2,
                        account: 'yiuuu1111',
                        name: '王静',
                        provincial: '北京',
                        classification: '制衣厂',
                        Contacts: '小王',
                        Contactnumber: '1897777777'
                    }, {
                        index: 3,
                        account: 'yiuuu1111',
                        name: '王静',
                        provincial: '北京',
                        classification: '制衣厂',
                        Contacts: '小王',
                        Contactnumber: '1897777777'
                    }, {
                        index: 4,
                        account: 'yiuuu1111',
                        name: '王静',
                        provincial: '北京',
                        classification: '制衣厂',
                        Contacts: '小王',
                        Contactnumber: '1897777777'
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
        created() { },
        methods: {}
    };
</script>

<style>

    #account-main {
        height: 100%;
    }

    .account-top, .account-list {
        height: auto;
        margin-top: 20px;
        margin-left: 10px;
    }
</style>
