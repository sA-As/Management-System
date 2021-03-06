
let list={
    name: 'attend',
  	data () {
	    return {
	    	upIndex:0,
	    	baseParticipateCount:1000,
	    	dialogVisible:false,
	    	dialogPic:'',
	    	dialogReward:0,
	    	isUp:false,
		    value2:true,
		    form:{},
		    time:[],
		    radio3:0,
		    data:{
		    	allDecibel:0,
		    	userCount:0
		    },
		    list:[],
		    tableData:[],
		    downIcon:true,
		    total: 0,
		    page: 1,
		    everyPageCount: 10,
		    id:'',
		    isEnable:"",
	    }
  	},
  	//组件生成时执行事件
  	created:function(){      
      this.getData();
	},
	//方法
	methods:{
		handleClose() {
	        this.dialogVisible = false;
	        this.dialogReward = 0;
            this.dialogPic = '';
	   	},
		disenbleAct(){
			if(this.id){
				this.save();
			};
			
		},
		add(){
			this.dialogVisible = true;
            //this.list.push({key:'15',value:'1000'});
        },
        addSave(){
        	let _this=this,
             	params={
                reward:_this.dialogReward,
                pic:_this.dialogPic
            };
            _this.$axios('post',_this.Global.PATH1.sicrsave,params,res => {
                if(res.code==200){
               		_this.list.push(res.data);
               		_this.dialogReward = 0;
               		_this.dialogPic = '';
					_this.$message({
			          	message: '添加成功',
			          	type: 'success'
			        });
                }else{
                	_this.$message.error(res.msg);
                };
                _this.dialogVisible = false;
            });	
        },
        upLoadStart(e){
			let _this = this;
			_this.upImg(_this.upIndex,e.target.files[0]);
		},
		upImg(index,files){
			let that = this;
			that.upIndex = 0;
			that.$axios2('post',that.Global.PATH.upload,{
	  			'mufile':files
	  		},res=>{
	  			//let obj = that.musiclist[index];
	  			if(res.code==200){
	  				if(index==-1){
	  					that.dialogPic = res.url;
	  				}else{
	  					that.sicrsave(res.url,index);	
	  				};
	  			}else{
	  				_this.$message.error(res.msg);
	  			};
	  			//that.$set(that.musiclist,index,obj);
			});
		},
		changIndex(index){
			this.upIndex = index;
		},
		sicrsave(urls,index){
			let _this=this,
				arr = _this.list[index],
             	params={
                id:arr.cycleId,
                reward:arr.reward,
                pic:urls
            };
            _this.$axios('post',_this.Global.PATH1.sicrupdate,params,res => {
                if(res.code==200){
                	arr.pic = urls;
                	_this.$set(_this.list,index,arr);
					_this.$message({
			          	message: '修改成功',
			          	type: 'success'
			        });
                }else{
                	_this.$message.error(res.msg);
                };
            });
		},
        save(){
            let _this=this;
            let params={
                baseParticipateCount:_this.baseParticipateCount,
                isEnable:_this.isEnable?1:0,
                activeName:_this.form.activeName,
                sharingCopy:_this.form.sharingCopy,
                startTime:_this.time[0],
                endTime:_this.time[1],
                activeDescription:_this.form.activeDescription,
                rewardType:_this.form.rewardType,
                siType:_this.form.siType
            };
            let urls = "",
            	strs = "";
            if(_this.id){
            	strs = "修改成功";
            	params.id = _this.id;
            	urls = _this.Global.PATH1.siruleupdate;
            }else{
            	strs = "添加成功";
            	urls = _this.Global.PATH1.siruleSave;
            };
            _this.$axios('post',urls,params,res => {
                if(res.code==200){
					_this.$message({
			          	message:strs,
			          	type: 'success'
			        });
			        _this.getData();
                }else{
                	_this.isEnable = !_this.isEnable;
                	_this.$message.error(res.msg);
                };
            });
        },
        getData(){
            let _this=this;
            let params={};
            _this.$axios('post', _this.Global.PATH1.siruleGet, params, res => {
                if (res.code == 200) {
                	if(res.data){
                   		_this.form=res.data;
                   		_this.time=[_this.Global.oTime(res.data.startTime),_this.Global.oTime(res.data.endTime)];
                   		_this.list = res.data.siCycleRuleList;
                  		_this.id=res.data.siId;
                  		_this.baseParticipateCount = res.data.baseParticipateCount;
                  		_this.isEnable=res.data.isEnable==0?false:true;
                  	}else{
                  		_this.baseParticipateCount = _this.Global.MinorMax(1000,1500);
                  		_this.form={
                  			activeDescription:"",
                  			activeName:"",
                  			rewardType:0,
                  			sharingCopy:"",
                  			siType:0
                  		};
                   		_this.time=[];
                   		_this.list = [];
                  		_this.id = "";
                  		_this.isEnable = false;	
                  	};
                }
            });
        },
        changePage(){
            this.downIcon=!this.downIcon;
            this.signIn(1);
        },
        del(val,index){
        	let _this = this;
            let params={
                id:val.cycleId
            };
            _this.$axios('post', _this.Global.PATH1.sicrdelete, params, res => {
                if (res.code == 200) {
                	_this.list.splice(index,1);
                	_this.$message({
			          	message: '删除成功',
			          	type: 'success'
			        });
                }else{
                	_this.$message.error(res.msg);
                };
            });   
        },
        handleSizeChange(val) {
            this.everyPageCount = val
        },
        handleCurrentChange(val) {
            this.getData(val);
        },
        signIn(num){
            let _this = this;
            let params={
                pageNum:num,
                pageSize:this.everyPageCount,
            };
            _this.$axios('post', _this.Global.PATH1.statistics, params, res => {
                if (res.code == 200) {
                    _this.tableData=res.data.siStatisticsList;
                    _this.data=res.data;
                    _this.total = res.data.count;
                }
            });
        }
	}
}
export default list;