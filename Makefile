.PHONY: install build-go pre-build-java pre-build-react-android build-java-android build-react-android run-react-android clean

AAR_FILE=poc.aar
JAVA_OUTPUT_DIR=./GoInJava/app/libs
RN_OUTPUT_DIR=./GoInReact/modules/calculator/android/src/libs


install:
	cd poc && go get && gomobile init

build-go: 
	cd poc && mkdir -p "build" && gomobile bind -target=android -androidapi=21 -o ./build/$(AAR_FILE)

pre-build-java: build-go
	mkdir -p $(JAVA_OUTPUT_DIR)
	cp ./poc/build/$(AAR_FILE) $(JAVA_OUTPUT_DIR)/

pre-build-react-android: build-go
	mkdir -p $(RN_OUTPUT_DIR)
	cp ./poc/build/$(AAR_FILE) $(RN_OUTPUT_DIR)/

build-java-android: pre-build-java
	cd GoInJava && ./gradlew

build-react-android: pre-build-react-android
	cd ./GoInReact/android && ./gradlew app:assembleDebug && ./gradlew installDebug && ./gradlew build --warning-mode all --stacktrace

run-react-android: 
	cd ./GoInReact/android && npm run android

clean:
	rm -f $(AAR_FILE)