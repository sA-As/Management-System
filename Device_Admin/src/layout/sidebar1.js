let arr = [
	{
    	'name':'管理员首页',
    	'icon':'',
    	'showType':5,
    	'path':'/home/AdminPage',
    	'isSon':false
    },
    {
    	'name':'音乐人首页',
    	'icon':'',
    	'showType':2,
    	'path':'/home/Artist',
    	'isSon':false
    },
    {
    	'name':'设备管理',
    	'isSon':true,
    	'showType':5,
    	'path':'/home/voicebox',
    	'icon':'',
    	'list':[
    		{
    			'name':'小未音箱',
    			'path':'/home/voicebox',
    			'isSon':false
            },
            {
    			'name':'黑珍珠',
    			'path':'/home/blackpearl',
    			'isSon':false
    		},
    		{
    			'name':'播放记录',
    			'path':'/home/playrecord',
    			'isSon':false
            },
            {
    			'name':'音箱设置',
    			'path':'/home/boxsetting',
    			'isSon':false
            },
            {
    			'name':'SN管理',
    			'path':'/home/snadmin',
    			'isSon':false
            }
    	]
    },
    {
    	'name':'资产管理',
    	'isSon':true,
    	'showType':5,
    	'path':'/home/AssetsList',
    	'icon':'',
    	'list':[
    		{
    			'name':'币种管理',
    			'path':'/home/AssetsList',
    			'isSon':false
            },
            {
    			'name':'提币管理',
    			'path':'/home/ChangeBit',
    			'isSon':false
    		},
    		{
    			'name':'资产管理',
    			'path':'/home/playrecord',
    			'isSon':false
            }
    	]
    },
    {
    	'name':'音乐管理',
    	'isSon':true,
    	'showType':99,
    	'path':'/home/MyMusic',
    	'icon':'',
    	'list':[
    		{
    			'name':'上传专题',
    			'path':'/home/uploadhome',
    			'isSon':false
			},
			{
    			'name':'上传推荐',
    			'path':'/home/UpLoadTheme',
    			'isSon':false
            },
            {
    			'name':'音乐管理',
    			'path':'/home/MyMusic',
    			'isSon':false
			},
			{
    			'name':'音乐推荐',
    			'path':'/home/MusicRecommend',
    			'isSon':false
			}
			
    	]
    },
    {
    	'name':'粉丝管理',
    	'icon':'',
    	'showType':99,
    	'path':'/home/fans',
    	'isSon':true,
    	'list':[
    		{
				'name':'粉丝趋势',
				'icon':'',
				'path':'/home/fans',
				'isSon':false
			},
			{
				'name':'粉丝列表',
				'icon':'',
				'path':'/home/fanslist',
				'isSon':false
			},
			{
				'name':'打赏记录',
				'icon':'',
				'path':'/home/FansReward',
				'isSon':false
			},
			{
				'name':'粉丝互动',
				'icon':'',
				'path':'/home/FansInteract',
				'isSon':false
			}
		]
    }






];
export  default arr;