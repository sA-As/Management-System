let arr = [
	{
    	'name':'管理员首页',
    	'path':'AdminPage',
    	'icon':'',
    	'showType':5,
    	'index':'/home/AdminPage',
    	'isSon':false
    },
    {
    	'name':'艺人首页',
    	'path':'Artist',
    	'icon':'',
    	'showType':2,
    	'index':'/home/Artist',
    	'isSon':false
    },
    {
    	'name':'设备',
    	'path':'voicebox',
    	'isSon':true,
    	'showType':5,
    	'index':'/home/voicebox',
    	'icon':'',
    	'list':[
    		{
    			'name':'小未音箱',
    			'path':'VoiceBox',
    			'index':'/home/voicebox',
    			'isSon':false
            },
            {
    			'name':'黑珍珠',
    			'path':'BlackPearl',
    			'index':'/home/blackpearl',
    			'isSon':false
    		},
    		{
    			'name':'播放记录',
    			'path':'PlayRecord',
    			'index':'/home/playrecord',
    			'isSon':false
            },
            {
    			'name':'音箱设置',
    			'path':'BoxSetting',
    			'index':'/home/boxsetting',
    			'isSon':false
            },
            {
    			'name':'SN管理',
    			'path':'SnAdmin',
    			'index':'/home/snadmin',
    			'isSon':false
            }
    	]
    },
    {
    	'name':'音乐管理',
    	'path':'MyMusic',
    	'isSon':true,
    	'showType':99,
    	'index':'/home/MyMusic',
    	'icon':'',
    	'list':[
    		{
    			'name':'上传专题',
    			'path':'UpLoadHome',
    			'index':'/home/uploadhome',
    			'isSon':false
			},
			{
    			'name':'上传推荐',
    			'path':'UpLoadTheme',
    			'index':'/home/UpLoadTheme',
    			'isSon':false
            },
            {
    			'name':'我的音乐',
    			'path':'MyMusic',
    			'index':'/home/MyMusic',
    			'isSon':false
			}
			
    	]
    },
    {
    	'name':'粉丝管理',
    	'path':'fans',
    	'icon':'',
    	'showType':99,
    	'index':'/home/fans',
    	'isSon':true,
    	'list':[
    		{
				'name':'粉丝趋势',
				'path':'/home/fans',
				'icon':'',
				'index':'/home/fans',
				'isSon':false
			},
			{
				'name':'粉丝列表',
				'path':'/home/fanslist',
				'icon':'',
				'index':'/home/fanslist',
				'isSon':false
			},
			{
				'name':'打赏记录',
				'path':'/home/FansReward',
				'icon':'',
				'index':'/home/FansReward',
				'isSon':false
			},
			{
				'name':'粉丝互动',
				'path':'/home/FansInteract',
				'icon':'',
				'index':'/home/FansInteract',
				'isSon':false
			}
		]
    }






];
export  default arr;