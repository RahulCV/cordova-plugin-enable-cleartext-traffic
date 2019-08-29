#!/usr/bin/env node

module.exports = function(context) {
  let fs = context.requireCordovaModule('fs'),
    path = context.requireCordovaModule('path');

  // android platform directory
  let platformAndroidDir = path.join(context.opts.projectRoot, 'platforms/android');

  // android app module directory
  let platformAndroidAppModuleDir = path.join(platformAndroidDir, 'app');

  // android manifest file
  let androidManifestFile = path.join(platformAndroidAppModuleDir, 'src/main/AndroidManifest.xml');

  let legacyandroidManifestFile = path.join(platformAndroidDir, 'AndroidManifest.xml');


  if (fs.existsSync(legacyandroidManifestFile)) {
          fs.readFile(legacyandroidManifestFile, 'UTF-8', function(err, data) {

  //if (fs.existsSync(androidManifestFile)) {

   // fs.readFile(androidManifestFile, 'UTF-8', function(err, data) {

      if (err) {
        throw new Error('Unable to find AndroidManifest.xml: ' + err);
      }

      // the Android Application class that need to config to Android manifest file
        let applicationClassName = '<application';

      if (data.indexOf(applicationClassName) !== -1) {

        let result = data.replace(/<application/g, '<application android:usesCleartextTraffic="true"');
            // result = result.replace(/android:usesCleartextTraffic="false"/g, '');

        fs.writeFile(legacyandroidManifestFile, result, 'UTF-8', function(err) {
          if (err){
                        console.log('file6');

            throw new Error('Unable to write into AndroidManifest.xml: ' + err);
          }
        })
      }
    });
  }
};