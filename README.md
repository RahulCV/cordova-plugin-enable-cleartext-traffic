# cordova-plugin-enable-cleartext-traffic
Fix Cleartext Traffic Error in Android 9 Pie. Cleartext is any transmitted or stored information that is not encrypted or meant to be encrypted. When an app communicates with servers using a cleartext network traffic, such as HTTP, it could raise a risk of eavesdropping and tampering of content.
Android Pie is the newest Android OS and was officially released on August 6th 2018. For feature details, see the Android Pie Features document. Android Pie includes several behavior changes. Most of them affect apps which target Android Pie (API level 28), but you may also find issues with apps targeting an older Android version, running on an Android Pie device.
Below are some features that caused this issue in rDrive application 
 
TLS enabled by default
Transport Layer Security (TLS) is a protocol for providing secure communications over a computer network. TLS is implemented on top of HTTP, allowing for encrypted communication over HTTPS.
When Google released Android Marshmallow (API level 23), it provided a configuration to disable clear text traffic, which would prevent your app from making clear HTTP requests. With the release of Android Pie (API level 28), clear text traffic is disabled by default.
With clear text traffic disabled by default, if your application attempts to do a clear HTTP request, an IOException is thrown with the following message:
Exception: IOException java.io.IOException: Cleartext HTTP traffic to * not permitted
 Google Documentation : https://developer.android.com/about/versions/pie/android-9.0-changes-28#framework-security-changes
These are communications protocols which do not encrypt the communication and thus are vulnerable to eavesdropping.
Telnet‎ (22 P)
File Transfer Protocol
NCSA Telnet
OFTP
Rtelnet
HTTP


Installation
Automatically (CLI / Plugman)
SocialSharing is compatible with Cordova Plugman, compatible with PhoneGap 3.0 CLI, here's how it works with the CLI:
$ phonegap local plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
or with Cordova CLI, from npm:
$ cordova plugin add cordova-plugin-x-socialsharing
$ cordova prepare
or with Ionic  CLI, from npm:
$ ionic cordova plugin add cordova-plugin-x-socialsharing
$ ionic cordova prepare


