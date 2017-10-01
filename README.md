# ion2-calendar bug

To reproduce:

    $ npm install
    $ ionic cordova platform add ios
    $ ionic cordova build ios --prod

Then from XCode, run it in an emulator and click the `Open Calendar` button. You'll notice that the styling is not applied.