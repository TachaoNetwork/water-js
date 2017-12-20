var ua = navigator.userAgent;
if(ua.indexOf("Android")>=0){
    function connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady'
                , function() {
                    callback(WebViewJavascriptBridge)
                },
                false
            );
        }
    }

    connectWebViewJavascriptBridge(function(bridge) {
        bridge.init(function(message, responseCallback) {});
    })	
    
	var Water = {
		createNew : function(){
			var waterCommon = {};
			//基础返回
			waterCommon.commonBaseResult = function(method,param){
            		window.WebViewJavascriptBridge.callHandler(
                		method
                		, JSON.stringify(param)
                		, function(res) {
		            		//判断数据是否存在
		            		if(undefined != res && null != res){
		                		var newRes = JSON.parse(res);
		                		if(newRes.type === "success"){
		                			//判断数据是success否存在
			                		if(param.hasOwnProperty("success")){
			                			param.success(newRes.successData);
			                		}
		                		}else if(newRes.type === "cancel"){
		                			//判断数据是cancel否存在
			                		if(param.hasOwnProperty("cancel")){
			                			param.cancel();
			                		}
		                		}else{
			                		//判断fail是否存在
			                		if(param.hasOwnProperty("fail")){
			                			param.fail(newRes.failData);
			                		}		                			
		                		}
		                		//判断complete是否存在
		                		if(param.hasOwnProperty("complete")){
		                			param.complete();	
		                		}	                			
		            		}                			
                		}
            		); 				
						
			};
			//检查App版本
			waterCommon.checkAppVersion = function(param){
				waterCommon.commonBaseResult('checkAppVersion',param);
			};
			//发送数据请求
			waterCommon.request = function(param){
				waterCommon.commonBaseResult('request',param);
			}
			//文件上传文件
			waterCommon.uploadFile = function(param){
				waterCommon.commonBaseResult('uploadFile',param);
			}			
			//获得应用信息
			waterCommon.getAppInfo = function(param){
				waterCommon.commonBaseResult('getAppInfo',param);
			}
			//获得用户信息
			waterCommon.getUserInfo = function(param){
				waterCommon.commonBaseResult('getUserInfo',param);
			}	
			//获得位置信息
			waterCommon.getLocationInfo = function(param){
				waterCommon.commonBaseResult('getLocationInfo',param);
			}
			//获得网络信息
			waterCommon.getNetworkType = function(param){
				waterCommon.commonBaseResult('getNetworkType',param);
			}	
			//获得设备信息
			waterCommon.getDeviceInfo = function(param){
				waterCommon.commonBaseResult('getDeviceInfo',param);
			}
			//发起支付信息
			waterCommon.requestPayment = function(param){
				waterCommon.commonBaseResult('requestPayment',param);
			}
			//发起信息分享
			waterCommon.shareInfo = function(param){
				waterCommon.commonBaseResult('shareInfo',param);
			}
			//发起扫一扫
			waterCommon.scanCode = function(param){
				waterCommon.commonBaseResult('scanCode',param);
			}			
			//播放视频功能-点播
			waterCommon.playVideo = function(param){
				waterCommon.commonBaseResult('playVideo',param);
			}
			//暂停视频-点播功能
			waterCommon.pauseVideo = function(param){
				waterCommon.commonBaseResult('pauseVideo',param);
			}
			//停止视频-点播功能
			waterCommon.stopVideo = function(param){
				waterCommon.commonBaseResult('stopVideo',param);
			}	
			//获得视频播放信息-点播
			waterCommon.getVideoPlayerState = function(param){
				waterCommon.commonBaseResult('getVideoPlayerState',param);
			}
			//播放视频功能-直播
			waterCommon.playLive = function(param){
				waterCommon.commonBaseResult('playLive',param);
			}	
			//暂停视频功能-直播
			waterCommon.pauseLive = function(param){
				waterCommon.commonBaseResult('pauseLive',param);
			}	
			//停止视频功能-直播
			waterCommon.stopLive = function(param){
				waterCommon.commonBaseResult('stopLive',param);
			}	
			//停止视频功能-直播
			waterCommon.stopLive = function(param){
				waterCommon.commonBaseResult('stopLive',param);
			}
			//获得视频播放信息-直播
			waterCommon.getLivePlayerState = function(param){
				waterCommon.commonBaseResult('getLivePlayerState',param);
			}	
			//播放音频功能
			waterCommon.playAudio = function(param){
				waterCommon.commonBaseResult('playAudio',param);
			}			
			//暂停音频功能
			waterCommon.pauseAudio = function(param){
				waterCommon.commonBaseResult('pauseAudio',param);
			}
			//停止音频功能
			waterCommon.stopAudio = function(param){
				waterCommon.commonBaseResult('stopAudio',param);
			}	
			//获得音频播放信息
			waterCommon.getAudioPlayerState = function(param){
				waterCommon.commonBaseResult('getAudioPlayerState',param);
			}
			//选择图片
			waterCommon.chooseImage = function(param){
				waterCommon.commonBaseResult('chooseImage',param);
			}
			return waterCommon;
		}
	};
	
	var water = new Water.createNew();
    
}