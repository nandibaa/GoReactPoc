# GoReactPoc

The repository is about to run go code on mobile.

## More detailed plan

- compile Golang package with gomobile
- embed this output into an Android / iOS app mainly with React Native
  - first go is with Android because it is simpler

## Development

1. Install golang. Recommended to use goenv.
2. Install JDK (required by gomobile as well) - version 17 will do it for not. Recommend to use some tool - I have used SDKMAN for it.
3. Install Android Studio for easy SDK/NDK management. Android 16 - Api 36 installed with NDK 29.0.14206865
4. Here are some of my configured env vars maybe it helps you

   ```bash
   GOROOT=/Users/YOUR_USERNAME/.goenv/versions/1.24.2
   GOPATH=/Users/YOUR_USERNAME/go/1.24.2
   ANDROID_HOME=/Users/YOUR_USERNAME/Library/Android/sdk
   ANDROID_NDK_HOME=/Users/YOUR_USERNAME/Library/Android/sdk/ndk/29.0.14206865
   SDKMAN_DIR=/Users/YOUR_USERNAME/.sdkman
   SDKMAN_CANDIDATES_API=https://api.sdkman.io/2
   SDKMAN_BROKER_API=https://broker.sdkman.io
   SDKMAN_PLATFORM=darwinarm64
   SDKMAN_CANDIDATES_DIR=/Users/YOUR_USERNAME/.sdkman/candidates
   binary_input=/Users/YOUR_USERNAME/.sdkman/tmp/java-17.0.12-tem.bin
   ```

5. You maybe need to run `go install golang.org/x/mobile/cmd/gomobile@latest` check it by execute `gomoblie` command in the terminal
6. Run `make install` in project root
7. Run `make copy` in project root - or check the Makefile if you want to do things manually - what this does is:
   1. use gomobile to compile go code
   2. copy the binary where the GoInJava app expects it to be
8. GoInJava project is in Android Studio
   1. To build the project run `make build-java` or `./gradlew` in the GoInJava folder
   2. It uses Gradle and every time you update the \*.aar file you have to run a build otherwise it does not detect the changes
9. Start an emulator in Android Studio and load the app there and you can try
   ![Example](RunningInAndroidJava.png)
