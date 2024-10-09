# To Run

```bash
# using yarn!
yarn install

#Start
npx react-native run-android

# If does NOT start
cd android
./gradlew clean
cd ..

# If assets not loaded
npx react-native-asset

# If packages need to be reinstalled
rm -rf node_modules
>> rm package-lock.json
>> rm yarn.lock
```
