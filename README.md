# sunseeker-frontend

## Requirements

## Contribution

- Clone this repository.
- Create a new branch.
- Develop your task.
- Create a pull request.
- Do not push to main branch directly.


## Installation

### Brew

In a terminal execute the following commands:

> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
>
> touch ~/.zshrc


Add this line at the end of .zshrc file:
> export PATH=/opt/homebrew/bin:$PATH

Refresh the environment:
> source ~/.zshrc

Check if Brew is correctly installed:
>brew help


### YARN

> npm install --global yarn

Check Installation:
> yarn --version


### Git

> brew install git



### NodeJS

> brew install node

### Expo library

For our MVP we need the Expo library:
[Expo Installation Page](https://docs.expo.dev/get-started/installation/)

> yarn add expo

### Expo Web system
Not needed because the SunSeeker is <b><i>"mobile first"</i></b> (and only).

Anyhow:
> npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2



### Android emulator

[Android emulator homepage](https://docs.expo.dev/workflow/android-studio-emulator/)


Download Android Studio (almost 1 GByte...) :

[Android Studio](https://developer.android.com/studio)

Install the application.

Run the Android Studio application and set up its configuration.

- Do not import settings

In the Android Studio Setup Wizard select:

- Install type : Standard 
- UI Theme : what you prefer...
- License Agreement:
  - android-sdk-license : Accept
  - android-sdk-arm-dbt-license (or other model in case) : Accept 
- Finish
- Wait....

Inside Android Studio, go to Preferences > Appearance & Behavior > System Settings > Android SDK. Click on the "SDK Tools" tab and make sure you have at least one version of the "Android SDK Build-Tools" installed.

Copy or remember the path listed in the box that says "Android SDK Location".
(in my case: /Users/paolobrunasti/Library/Android/sdk )


Add an environment variable pointing to the Android SDK location in ~/.zshenv - for example:
``` 
export ANDROID_HOME=/Users/paolobrunasti/Library/Android/sdk. 
```

Copy and paste these two lines to do this automatically for Bash and Zsh:
```
[ -d "$HOME/Library/Android/sdk" ] && ANDROID_HOME=$HOME/Library/Android/sdk || ANDROID_HOME=$HOME/Android/Sdk
echo "export ANDROID_HOME=$ANDROID_HOME" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```


Add platform-tools to your ~/.zshenv - for example: 
```
export PATH=/Users/paolobrunasti/Library/Android/sdk. 
```

Copy and paste this line to do this automatically for Bash and Zsh:
```
echo "export PATH=$ANDROID_HOME/platform-tools:\$PATH" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```

Reload the path environment variables by running:

```
source ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```


Finally, make sure that you can run adb from your terminal.

```
adb
```

### Set up a virtual device

On the Android Studio main screen, click "More Actions", then "Virtual Device Manager" in the dropdown.

Press the "Create device" button.

Choose the type of hardware you'd like to emulate.




## Activation of the server

> npx expo start -c

Then in the terminal screen select the Android or iOS simulator

```
Starting project at /Users/paolobrunasti/Work/AND-Bootcamp/sunseeker-frontend
Starting Metro Bundler
warning: Bundler cache is empty, rebuilding (this may take a minute)
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █   █▄█▀▄▀█ ▄▄▄▄▄ █
█ █   █ █ ▀▄ █▀█ ██ █   █ █
█ █▄▄▄█ █▀██▀▀ ▀▄██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀▄█ █ █▄█▄▄▄▄▄▄▄█
█ ▄▀▀ ▄▄▀█▀▀▄▀█▄ ███ ▀▄▄ ▄█
█ █▀ ▄█▄  █▀ ▄█▀▄ ▀ █▄  ▀██
█▀ █▄▀ ▄▄▀█▄█▄▀▄▀▄▀▄▀▀▄ ▀██
████ ▄▄▄▀  ██▀██▄▄▄█▄▀ ▀███
█▄▄▄██▄▄█▀▀ ▄▀▀▄▄ ▄▄▄ ▀ ▄▄█
█ ▄▄▄▄▄ █▀▀▀ ▄██▀ █▄█ ▀▀█▀█
█ █   █ █▄ ██▄▀▄█▄▄ ▄▄▀   █
█ █▄▄▄█ █▀█▄█▀██▄██▄▀█▀▀ ██
█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄████▄▄▄▄▄▄█

› Metro waiting on exp://192.168.2.5:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
› Opening on Android...
```