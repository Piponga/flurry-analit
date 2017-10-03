//
//  FlurryPlugin.h
//

#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVPluginResult.h>

@interface FlurryAnalyticsPlugin : CDVPlugin

- (void)logEvent:(CDVInvokedUrlCommand*)command;
- (void)logScreenView:(CDVInvokedUrlCommand*)command;
- (void)endTimedEvent:(CDVInvokedUrlCommand*)command;

@end
