# Vue2 & Cordova featuring development environment

Use cordova & Vue2 to make Android & iOS applications, featuring flexible development environment

## Environment

This repo contains a setup where you never have to re-run commands manually to see updates. Instead, upon file change, both vue and cordova will rebuild and publish. 

Painless, like a development environment should be.

* Vue2
* Cordova
* TailwindCSS
* MomentJS
* vue-property-decorator
* vue-router
* FontAwesome

# Setup project

## Requirements

1. node v16
2. JDK v8
3. Android studio
   * Gradle
   * Android SDK Command-line Tools 
   * Android build tools version 30.0.3


## Windows & Bash

bashrc on windows, update `<YourUser>` 

```
# JDK 8
export JAVA_HOME="C:\Program Files (x86)\Java\jdk1.8.0_351"
export PATH=$PATH:$JAVA_HOME/bin

# Android SDK
export ANDROID_HOME="C:\Users\<YourUser>\AppData\Local\Android\sdk"
export PATH=$PATH:$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/build-tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Setup

After having the required softwares/dependencies, clone the repository to any folder.

* Start Android Studio & create a configuration
    * Connect your device OR start the emulator
* In the repository, run `yarn install`
* In the repository, run `cordova platform add android` or `cordova platform add ios`
* To start the development environment, run `yarn start`
    * This will rebuild vue & the app upon file change. See package.json for additional scripts.


## Common problems

### Gradle

> Error occurred during initialization of VM, Could not reserve enough space for 2097152KB object heap

* Create if not exists `C:\Users\.gradle\gradle.properties`
* Add entry: `org.gradle.jvmargs=-XX\:MaxHeapSize\=256m -Xmx256m`


### Android build tools

> No installed build tools found. Please install the Android build tools version 30.0.3.

* Click on `More` -> `SDK Manager`
* Click from the first tab `SDK Platforms` to `SDK Tools`.
* SDK Tools and click on `show package details` and install `30.0.3`
