<template>
  <div>
  	<!--<div class="uphome" v-show="mode==1">
	  	<div class="title textMain">
	  		请选择上传类型
	  	</div>
	  	<div class="upcon">
	  		<div class="upitem" @click="creatTheme">
	  			<h2 class="textMain h2Title">创建普通专辑</h2>
	  			<p class="textInfo h4Title">粉丝可以免费收听你的专辑</p>
	  		</div>
	  		<div class="upitem">
	  			<h2 class="textMain h2Title">创建数字专辑</h2>
	  			<p class="textInfo h4Title">粉丝需要付费收听你的专辑</p>
	  			<p class="textInfo h4Title">创建要求音乐人指数达到400</p>
	  		</div>
	  	</div>
	  	<div class="upbtn">
	  		<span class="el-icon-plus"></span>
	  		上传作品至已发布专辑
	  	</div>
  	</div>-->
  	<div class="upform" v-show="mode==2">
  		<div class="upformleft">
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专辑名称:
	  			</div>
	  			<div class="fitemr">
	  				<el-input
	  					size="mini"
	  					maxlength="100"
	  					minlength="2"
						  placeholder="请输入内容"
						  v-model="themeObj.special_title"
						  clearable>
						</el-input>
	  			</div>
	  		</div>
	  		<!--<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专辑类型:
	  			</div>
	  			<div class="fitemr">
	  				<el-select size="mini" v-model="themeObj.themetype" clearable placeholder="请选择">
					    <el-option label="专辑" value="1"></el-option>
					  </el-select>
	  			</div>
	  		</div>-->
	  		<!--<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专辑版本:
	  			</div>
	  			<div class="fitemr">
	  				<el-select size="mini" v-model="themeObj.themeversion" clearable placeholder="请选择">
					    <el-option label="专辑" value="1"></el-option>
					  </el-select>
	  			</div>
	  		</div>
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				发行日期:
	  			</div>
	  			<div class="fitemr">
	  				<el-date-picker
	  					size="mini"
				      v-model="themeObj.themetime"
				      type="date"
				      placeholder="选择日期"
				      format="yyyy 年 MM 月 dd 日"
				      value-format="yyyy-MM-dd">
				   	</el-date-picker>
	  			</div>
	  		</div>
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				语种:
	  			</div>
	  			<div class="fitemr">
	  				<el-select size="mini" v-model="themeObj.themelang" clearable placeholder="请选择">
					    <el-option label="国语" value="1"></el-option>
					    <el-option label="粤语" value="2"></el-option>
					    <el-option label="英语" value="3"></el-option>
					  </el-select>
	  			</div>
	  		</div>
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专辑风格:
	  			</div>
	  			<div class="fitemr">
	  				<el-select size="mini" v-model="themeObj.themestyle" clearable placeholder="请选择">
					    <el-option label="流行" value="1"></el-option>
					    <el-option label="土味" value="2"></el-option>
					    <el-option label="嘻哈" value="3"></el-option>
					  </el-select>
	  			</div>
	  		</div>
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专辑标签:
	  			</div>
	  			<div class="fitemr">
	  				<el-tag
	  					size="medium"
						  :key="tag"
						  v-for="tag in dynamicTags"
						  closable
						  :disable-transitions="false"
						  @close="handleClose(tag)">
						  {{tag}}
						</el-tag>
						<el-input
						  class="input-new-tag"
						  v-if="inputVisible"
						  v-model="inputValue"
						  ref="saveTagInput"
						  size="mini"
						  @keyup.enter.native="handleInputConfirm"
						  @blur="handleInputConfirm"
						>
						</el-input>
						<el-button v-else class="button-new-tag" size="mini" @click="showInput">添加标签</el-button>
	  			</div>
	  		</div>-->
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专辑描述:
	  			</div>
	  			<div class="fitemr">
	  				<el-input
						  type="textarea"
						  maxlength="150"
	  					minlength="2"
						  :rows="4"
						  placeholder="请输入内容"
						  v-model="themeObj.special_describe">
						</el-input>
	  			</div>
	  		</div>
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专题默认点赞数:
	  			</div>
	  			<div class="fitemr">
	  				<el-input-number  size="mini" v-model="themeObj.like_base"></el-input-number>
	  			</div>
	  		</div>
	  		<div class="formitem">
	  			<div class="fiteml textMain h3Title">
	  				专题默认分享数:
	  			</div>
	  			<div class="fitemr">
	  				<el-input-number  size="mini" v-model="themeObj.share_base"></el-input-number>
	  			</div>
	  		</div>
  		</div>
  		<div class="upformright">
  			<div class="avatar-uploader">
				 	<label for="avatar2">
				 		<i v-if="!themeObj.special_picture" class="el-icon-plus avatar-uploader-icon"></i>
				 		<img v-if="themeObj.special_picture" :src="themeObj.special_picture" class="avatar">
				 	</label>	
					<input @change="upLoadStart1($event)" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
				</div>
  			<!--<croper></croper>-->	
  		</div>
  	</div>
  	<UpLoadMusic @saveClick="saveClick" @subClick="subClick" :specialid="specialid" :musiclist="musiclist"></UpLoadMusic>
  	<!--<el-button v-if="specialid==''&&mode==2" type="primary" @click="subClick">确认提交</el-button>
  	<el-button v-if="specialid&&mode==2" type="primary" @click="saveClick(1)">保存修改</el-button>
  	<el-button v-if="specialid&&mode==2" type="primary" @click="saveClick(2)">修改音乐</el-button>-->
  </div>
</template>
<script>
import UpLoadMusic from '../UpLoadMusic/UpLoadMusic.vue';
export default {
  name: 'UpLoadHome',
  data () {
    return {
      mode:2,
      musiclist:[],
     	themeObj:{
     		special_picture:'',
     		like_base:0,
     		share_base:0,
     		special_title:'',
     		special_describe:''
     	},
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      specialid:''
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.specialid = this.$route.params.specialid||'';
		if(this.specialid==''){
			this.mode=2;
			this.themeObj.like_base = this.Global.MinorMax(500,1000);
			this.themeObj.share_base = this.Global.MinorMax(300,500);
		}else{
			this.mode=2;
			this.getData();
		};
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		//创建专题
		creatTheme(){
			this.mode = 2;
		},
		//请求数据
		getData(){
			let that = this;
			that.$axios('post',that.Global.PATH.queryspleByid,{
				specialid:that.specialid
			},function(res){
  			if(res.code==200){
  				let obj = {
  					share_base:res.data.share_base,
     				like_base:res.data.like_base,
  					special_picture:res.data.special_picture,
     				special_title:res.data.special_title,
     				special_describe:res.data.special_describe
  				};
  				that.themeObj = obj;
  				let arr = res.data.listmusic;
  				arr.forEach(val=>{
  					val.state = 1;
  				});
  				that.musiclist = arr; 
  			};
  		});
		},
		//提交创建专题
		subClick(arr){
			let obj = this.themeObj;
			if(obj.special_picture==''||obj.special_title==''||obj.special_describe==''||!obj.like_base||!obj.share_base){
				this.$message.error('请仔细检查各项是否填写完整');
				return false;
			};
			let that = this;
			that.$axios('post',that.Global.PATH.addfuspecial,obj,function(res){
  			if(res.code==200){
  				that.$message({
	          message:'已提交',
	          type: 'success'
	        });
  				that.specialid = res.specialid;
  				that.subMusic(arr,1);
  			};
  		});
		},
		subMusic(arr,type){
			let that = this,
			urls = type==1?that.Global.PATH.addSpecialmusic:that.Global.PATH.updatemusicqwe;
				that.$axios1('post',urls,{
		  			specialid:that.specialid,
		  			listmusic:arr
		  		},res=>{
		  			if(res.code==200){
		  				that.$message({
		          	message:'已修改',
		          	type: 'success'
		        	});
		  				that.$router.replace({name:'My-music'});
		  			};
				});
		},
		//保存修改点击
		saveClick(arr){
			let obj = this.themeObj;
			if(obj.special_picture==''||obj.special_title==''||obj.special_describe==''||!obj.like_base||!obj.share_base){
				this.$message.error('请仔细检查各项是否填写完整');
				return false;
			};
			obj.specialid = this.specialid;
			let that = this;
			that.$axios('post',that.Global.PATH.updatesple,obj,function(res){
  			if(res.code==200){
  				that.subMusic(arr,2);
  			};
  		});
		},
		//上传图片
		upLoadStart1(e){
			let that = this;
  		that.$axios2('post',that.Global.PATH.upload,{
  			'mufile':e.target.files[0]
  		},function(res){
  			if(res.code==200){
  				that.themeObj.special_picture = res.url;
  			};
  		});
		},
		handleClose(tag) {
	    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
	 	},
	  showInput(){
	    this.inputVisible = true;
	    this.$nextTick(_ => {
	      this.$refs.saveTagInput.$refs.input.focus();
	    });
	  },
	  handleInputConfirm() {
	    let inputValue = this.inputValue;
	    if (inputValue) {
	      this.dynamicTags.push(inputValue);
	    }
	    this.inputVisible = false;
	    this.inputValue = '';
	  }
	},
	//使用的组件
  components:{
		UpLoadMusic
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./UpLoadHome.css");
</style>
