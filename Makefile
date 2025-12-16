.PHONY: build-go build-java copy clean

AAR_FILE=poc.aar
OUTPUT_DIR=./GoInJava/app/libs

install:
	cd poc && go get && gomobile init

build-go: 
	cd poc && mkdir -p "build" && gomobile bind -target=android -androidapi=21 -o ./build/$(AAR_FILE)

copy: build-go
	mkdir -p $(OUTPUT_DIR)
	cp ./poc/build/$(AAR_FILE) $(OUTPUT_DIR)/

build-java:
	cd GoInJava && ./gradlew

clean:
	rm -f $(AAR_FILE)