# ion2-calendar bug

To reproduce:

    $ npm install
    $ ionic cordova platform add ios
    $ ionic cordova build ios --prod

Then from XCode, run it on an emulate and click the `Open Calendar` button. You'll notice that the styling is not applied.