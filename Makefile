TSC=./node_modules/.bin/tsc
BROWSERIFY= ./node_modules/.bin/browserify

bundle: compile
	$(BROWSERIFY) out/js/main.js -o out/app.js


compile:
	$(TSC) -p src/

serve:
	echo "listening at http://localhost:4000"
	cd out/ && python -m SimpleHTTPServer 4000

kill:
	# -t = terse, only print the port
	# -i = --interface
	lsof -t -i :4000 | xargs kill

killserve: kill serve


