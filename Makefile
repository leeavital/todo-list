TSC=./node_modules/.bin/tsc
BROWSERIFY= ./node_modules/.bin/browserify

bundle: compile
	$(BROWSERIFY) out/js/main.js -o out/app.js


compile:
	$(TSC) -p src/

serve:
	cd out/ && python -m SimpleHTTPServer 4000
