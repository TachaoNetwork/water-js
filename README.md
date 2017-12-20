# 踏潮基础框架原生App与js交互
## iOS
### iOS 采用WKWebView作为基础承载，数据传输采用JsValue
#### step1
设置JS代理
```
#import <UIKit/UIKit.h>
//导入头文件
#import <JavaScriptCore/JavaScriptCore.h>

@protocol JSObjcDelegate <JSExport>
//water对象调用的JavaScript方法，必须声明！！！
- (void)waterCall:(JSValue*)value;
@end
```
#### step2
设置WebView

#### step3
设置webviewDidFinishLoad
```
- (void)webViewDidFinishLoad:(WKWebView *)webView {

      // 设置javaScriptContext上下文
    self.jsContext = [webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
    //将tianbai对象指向自身
    self.jsContext[@"water"] = self;
    self.jsContext.exceptionHandler = ^(JSContext *context, JSValue *exceptionValue) {
        context.exception = exceptionValue;
        NSLog(@"异常信息：%@", exceptionValue);
    };
}
```

#### step4
设置实现方法
```
- (void)waterCall(JSValue*) value{
    //获得js传过来的普通参数
    NSString * text = [value valueForProperty:@"text"];
    //这里是JS参数中的func 可用于回调执行
    JSValue * func =  [value valueForProperty:@"callbackFun"];

    //调用这个函数(也可为Dict)
    [func callWithArguments:@[@"这里是参数"]];
}
```