#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ] 
then
    echo "Usage: turtle.sh <expo_username> <expo_password>"
    exit 0
fi
rm -rf ~/expo-apps/*
rm -rf ./build/*
expo publish
turtle build:android -u "$1" -p "$2"
path_to_executable=$(which name_of_executable)
if ! [ -x "/usr/local/bin/bundletool" ] ; then
    echo "bundletool not here: $path_to_executable; downloading"
    u="$USER"
    sudo wget https://github.com/google/bundletool/releases/download/1.9.0/bundletool-all-1.9.0.jar -O /usr/local/bin/bundletool
    sudo chown "$u":"$u" /usr/local/bin/bundletool
    sudo chmod a+x /usr/local/bin/bundletool
fi
mkdir -p build
f=$(ls ~/expo-apps/*.aab)
java -jar /usr/local/bin/bundletool build-apks --bundle="$f" --output=./build/icdroid.apks --mode=universal
cd build
unzip icdroid.apks
echo "APK should be in ./build folder"
