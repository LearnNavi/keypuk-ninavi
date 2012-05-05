# Makefile for secwepemc-facebook
# Copyright 2012 Kevin Scannell
# License: GPLv3+

all: updategms INSTALL.textile

facebook.pot: strings.txt header.pot
	sed "s/XXXX-XX-XX XX:XX-XXXX/`date '+%Y-%m-%d %H:%M:%S%z' | sed 's/00$$/:00/'`/" header.pot > $@
	cat strings.txt | sed '/^[^#]/{s/"/\\"/g; s/.*/msgid "&"\nmsgstr ""\n/}' >> $@

updatepos: facebook.pot
	find po/ -name '*.po' | while read x; do echo "Updating $$x..."; msgmerge -q --backup=off -U $$x facebook.pot > /dev/null 2>&1; done
	sed -i '/^#~/,$$d' po/*.po
	sed -i '$${/^#, fuzzy$$/d}' po/*.po
	sed -i '$${/^$$/d}' po/*.po

updategms: facebook-ga.user.js

# builds all languages
facebook-ga.user.js: po/*.po template.user.js po2gm.pl generate-gm.sh LINGUAS
	bash generate-gm.sh

INSTALL.textile: LINGUAS INSTALL-template
	cat LINGUAS | egrep -v '^(es|fr|it)[^a-z-]' | sed 's/\t/ | /g' | sed 's/^/| /; s/$$/ |/' | sed 's/\(http:[^ ]*\)/"&":&/g' > table.txt
	sed '/^|_\./r table.txt' INSTALL-template > $@
	rm -f table.txt

clean:
	rm -f facebook.pot facebook-*.user.js INSTALL.textile

FORCE:
