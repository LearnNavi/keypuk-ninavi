// Keypuk nìNa'vi! v .1
// Translated and edited by Richard Littauer
// No (c) on the translations, whatsoever.
// https://github.com/RichardLitt/keypuk-ninavi
//
// Based on:
// Secwepemc Facebook!
// version 0.1 BETA!
// 2010-08-25
// Copyright (c) 2010, Neskie Manuel
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Secwepemctsin Facebook", and click Uninstall.
//
// To install on Chrome, just drag it into a window. It'll work.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Nìna'vi Facebook
// @namespace     https://github.com/RichardLitt/keypuk-ninavi
// @description   script to change the Facebook
// @include       http://www.facebook.com/*
// ==/UserScript==

// Array of words to change.
// Unsorted
var es = new Array();
es["Home"] = "Kelutral";
es["No"] = "Kehe";
es["Yes"] = "Srane";
es["Maybe"] = "Kxawm";
es["News Feed"] = "Fmawnä Payfya";
es["Friends"] = "Eylan";
es["Like"] = "Sunu";
es["Unlike"] = "Sunu ke";
es["Comment"] = "Plltxe";
es["Books"] = "Fuk";
es["Female"] = "Tuté";
es["Male"] = "Tutan";
es["Say hello."] = "Kaltxì si";
es["Say hi."] = "Kaltxì si";
es["on Friday."] = "Trrpuvemì.";
es["on Saturday."] = "Trrkivemì.";
es["Tomorrow"] = "Trray";
es["Today"] = "Fìtrr";
es["Yesterday"] = "Trram";
es["What are you planning?"] = "Pehemit ngal hawl?";
es["Where?"] = "Peseng?";
es["Phone"] = "Syawyu lefngap";
es["Mobile Phone"] = "Syawyu lefngap";
es["Children:"] = "Eveng:";
es["Birthday:"] = "Ftxozä:";
es["See All"] = "Tse'a Nìwotx";
es["Who's invited?"] = "Pesu ziva'u?";
es["This Month"] = "Fìvospxì";
es["Share"] = "Käsrin fì'ut";
es["Who are you with?"] = "Pesumì nga lu?";
es["Where are you?"] = "Tsengpe nga lu?";
es["via Twitter"] = "ìlä Yayotsyìp"; 
es["Upload photo/video"] = "Fpe' rusikxa relit/relit";
es["Create photo album"] = "Relä pukit ngop"; 
es["Create event"] = "Tìlenit ngop";
es["Update status"] = "Leykatem tìfkeytokit";
es["Add photo/video"] = "Sung (rusikxa) relit";
es["Ask question"] = "Pawm fì'ut";
es["SORT"] = "WÌNTXU";
es["Top stories"] = "Vurä fäpa";
es["Most Recent"] = "Vur asok";
es["Account Settings"] = "Fìpoä Sìfkeytok";
es["Privacy Settings"] = "Le'aw 'awpoä Sìfkeytok";
es["Log out"] = "Hum";
es["Help"] = "Srung";
es["and"] = "sì";
es["Photos"] = "Ayrel";
es["Music"] = "Pamtseo";
es["Notes"] = "Famreltsyìp";
es["Questions"] = "Sìpawm";
es["Links"] = "Saheylu";
es["Apps and Games"] = "Sìkangkemvi sì Ayuvan";
es["Apps"] = "Tìkangkemvi";
es["Pages"] = "Ayrìk";
es["Groups"] = "Fongu";
es["Events"] = "Sìlen";
es["Messages"] = "Upxare";
es["Favourites"] = "Oeyä sweya ayu";
es["Facebook"] = "Keypuk";
es["Use webcam"] = "Sar kusrrnekxti rusikxa ayrelä";
es["English (US)"] = "'Ìnglìsì (Yu.E.Sey.)";
es["English (UK)"] = "'Ìnglìsì (Yu.Key.)";
es["Privacy"] = "Kxukea Säomum";
es["Terms"] = "Lawa Aylì'u";
es["More"] = "Nì'ul";
es["About"] = "Teri";
es["Advertising"] = "Txanewa Lusawk";
es["Careers"] = "Fnetxintìn";
es["Create a Page"] = "Ngop Rìkti";
es["Developers"] = "Ayngopyu";
es["Add to my page's favourites"] = "Sung fì'u oey rìkä sweya ayune";
es["Get updates via RSS"] = "Tel ayfmawnit ìlä RSS";
es["Report Page"] = "Kulat rìkit";
es["like this"] = "fì'u sunu";
es["talking about this"] = "";
es["Wall"] = "'Awkx";
es["Info"] = "Säomum";
es["Friend activity"] = "Tìn eylanä";
es["Photos"] = "Ayrel";
es["See all"] = "Kame nìwotx";
es["Recommended Pages"] = "Lawnawka Ayrìk";
es["Discover new games"] = "Run mipa ayuvanti";
es["Find friends"] = "Run eylanit";
es["Product/Service"] = "Kìte'e";
es["Life event"] = "Tìlen tìreyä";
es["Place"] = "Tsenge";
es["Photo"] = "Rel";
es["Status"] = "Tìfkeytok";
es["Update info"] = "Leykatem säomumit";
es["Activity log"] = "Sìnä 'ok";
es["Likes"] = "Susunua ayfì'u";
es["Map"] = "Atxkxerel";
es["Born"] = "'Amongokx";
es["Richard Littauer"] = "Taronyu"; // Just for me. :D
es["See friendship"] = "Tse'a tì'eylanti";
es["Sponsored"] = "Awneyk";
es["Create an advert"] = "Ngop nusewìt";
es["Subscriptions"] = "Tsawne'a";
es["More Recent Activity"] = "";
es["View As..."] = "Tse'a na...";
es["Add a badge to your site"] = "Sung pätsìt ne ngey 'awm";
es["Edit"] = "Latem";
es["Timeline"] = "Krrä Payfya";
es["Now"] = "Set";
es["Use Facebook as:"] = "Sar Keypukit na:";
es["Translations"] = "Lusatem lì'fya";
es["Friend requests"] = "Ätxäle sì'eylanä";
es["No new requests"] = "Kea mipa ayätxäle";
es["See all friend requests"] = "Tse'a fraätxäleti";
es["Messages"] = "'Upxare";
es["Send a new message"] = "Fpe' mipa 'upxareti";
es["See all messages"] = "Tse'a fraupxaret";
es["Notifications"] = "Fmawn";
es["See all notifications"] = "Tse'a fmawnit nìwotx";
es["Post"] = "Yem";
es["Cancel"] = "Ftang";
es["Select an image or video file on your computer"] = "Ftxey relit fu relit arusikx mì ngeyä eltu lefngap";
es["Choose file"] = "Ftxey 'uoti";
es["No file chosen"] = "Ke'ut ke ftxoley"
es["Add year"] = "Sung zìsìtit";
es["Change Cover"] = "Leykatem Keyit";
es["Edit Profile Picture"] = "Leykatem Txina Relit";
es["Chat Sounds"] = "Puslltxea Fam";
es["Advanced Settings"] = "Ngäzìka Sìfkeytok";
es["Go offline"] = "Kämakto!";
es["Hide Sidebar"] = "Wan Pa'oä Payfyat";
es["Subscribed"] = "Tsere'a";
es["More stories"] = "Nì'ul ayvul";
es["Edit options"] = "Leykatem sìftxeyt";
es["Find friends"] = "Fwew eylanit";
es["Basic Information"] = "Ftuea säomum";
es["Website"] = "Kelutral";
es["Founded"] = "Sngä'ikrr";
es["Mission"] = "Tìkan";
es["Email"] = "Ikran lì'u";
es["Add Friends to chat..."] = "Zamunge eylanti ne Pawnlltxe";
es["See Full Conversation"] = "Tse'a puslltxet nìwotx";
es["Clear window"] = "Law si nìwotx";
es["Report as spam"] = "Kulat na tìkawng";
es["Unfollow post"] = "Ftang nirvong kìng";
es["No new requests"] = "Kea mipa ayätxäle.";
es["You like this"] = "Fì'u sunu.";
// es["There are no more posts to show."] = ""; 

// Months and dates
es["Friday"] = "Trrpuve";
es["Monday"] = "Trrmuve";
es["Tuesday"] = "Trrpxeyve";
es["Wednesday"] = "Trrtsìve";
es["Thursday"] = "Trrmrrve";
es["Saturday"] = "Trrkive";
es["Sunday"] = "Trr'awve";
es["January"] = "'Awvea vospxì";
es["February"] = "Muvea vospxì";
es["March"] = "Pxeyvea vospxì";
es["April"] = "Tsìvea vospxì";
es["May"] = "Mrrvea vospxì";
es["June"] = "Puvea vospxì";
es["July"] = "Kivea vospxì";
es["August"] = "Volvea vospxì";
es["September"] = "Volawvea vospxì";
es["October"] = "Vomuvea vospxì";
es["November"] = "Vopeyvea vospxì";
es["December"] = "Vosìvea vospxì";

// Photos
es["Add a description"] = "Sung tìsla'tsut";
es["Tag photo"] = "Pesul relit tok?";
es["Add location"] = "Sung tsenget";
es["On your timeline"] = "Mì ngeyä Krrä Payfya";
es["Remove"] = "'Aku";
es["Profile pictures"] = "Txina Ayrel";
es["Change date"] = "Leykatem trrit";
es["Rotate left"] = "Rikx nìftär";
es["Rotate right"] = "Rikx nìskien";
es["Download"] = "Kanom";
es["Make this my Profile picture"] = "Oel new futa oeyä Txìna Ayrel.";
es["Delete this photo"] = "'Aku fìrelit";
es["Press esc to close"] = "Ftxey esc fte tstu si";
es["Remove tag"] = "'Aku tstxot";
// es["Cover photos"] = "";

// Friend page.
// es["Search by name"] = "";
// es["Search by friends of"] = "";
// es["Search by current city"] = "";
// es["Search by school"] = "";
// es["Search by workplace"] = "";
// es["Search by home town"] = "";
// es["Search by interest"] = "";

// Map page
// es["All"] = "";
// es["Place Lived"] = "";
// es["Trips"] = "";
// es["Life Event"] = "";
// es["Add Photos to Map"] = "";
// es["Country"] = "";
// es["Edit place details"] = "";
// es["City"] = "";
// es["Show comments"] = "";
// es["Local business"] = "";
// es["Historical place"] = "";
// es["University"] = "";
// es["Get Directions"] = "";

//es[""] = "";

// Broken words
// es["What's on your mind?"] = "’ìn ngeyä fyape nìfkrr?"; breaks input
// es["Go Offline to "] = "Wan ftu "; doesn't work
// es["Search"] = "Fwew"; 
// es["shared a"] = "käsrin";
// es["via"] = "ìlä";
// es["Lives in"] = "Kelku si mì";
// es["In a relationship with"] = "Muntxa susi mì";
// es["mutual friends"] = "tsaheylu tì'eylanä";
// es["minutes ago"] = "ayswawkam";

//Basic Tag altering.
function translate_tag(tag) {
	var fbelem = document.getElementsByTagName(tag);
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}
}

//Basic Tag altering.
function translate_class(classname) {
	var fbelem = document.getElementsByClassName(classname);

	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}
}

function loadSecwepemc() {
	translate_tag('a');
	translate_tag('th');
	translate_tag('td');
	translate_tag('span');
	translate_tag('h3');
	translate_tag('dt');

	translate_class('ego_social_context');

	var fbelem = document.getElementsByTagName('input');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('value') in es) {
		thisElem.setAttribute('value',es[thisElem.getAttribute('value')]);
	    }
	}

	var fbelem = document.getElementsByTagName('textarea');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('title') in es) {
		thisElem.setAttribute('title',es[thisElem.getAttribute('title')]);
	    }
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}

//	var fbelem = document.getElementsByClassName('UIImageBlock_Content UIImageBlock_ICON_Content');
//	for (var i = 0; i < fbelem.length; i++) {
//	    var thisElem = fbelem[i];
//	    //finds if one person likes this.
//	    if (thisElem.textContent.match('likes this.')){
//		icon = thisElem.childNodes[0]
//		link = thisElem.childNodes[1]
//		link.textContent = link.textContent.replace('likes this.', 'r xwexwistes.');
//		thisElem.textContent = '';
//		thisElem.appendChild(icon);
//		thisElem.appendChild(link);
//	    }
//	    if (thisElem.textContent.match('like this.')){
//		icon = thisElem.childNodes[0]
//		link = thisElem.childNodes[1]
//		link.textContent = link.textContent.replace('like this.', 'r xwexwistep.');
//		thisElem.textContent = '';
//		thisElem.appendChild(icon);
//		thisElem.appendChild(link);
//	    }
//	}

	var fbelem = document.getElementsByTagName('h2');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		icon = thisElem.childNodes[0]
		thisElem.textContent = es[thisElem.textContent];
		thisElem.appendChild(icon);
	    }
	}
}

loadSecwepemc();

function changedNode(e) {
	translate_tag('a');
	translate_tag('th');
	translate_tag('td');
	translate_tag('span');
	translate_tag('h3');
	translate_tag('dt');

	translate_class('ego_social_context');

	var fbelem = e.target.getElementsByTagName('input');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.getAttribute('placeholder') in es) {
		    		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
		    	    }
		    if (thisElem.getAttribute('value') in es) {
		    		thisElem.setAttribute('value',es[thisElem.getAttribute('value')]);
		    	    }
		}
	var fbelem = e.target.getElementsByTagName('textarea');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('title') in es) {
		thisElem.setAttribute('title',es[thisElem.getAttribute('title')]);
	    }
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}

//	var fbelem = e.target.getElementsByClassName('UIImageBlock_Content UIImageBlock_ICON_Content');
//	for (var i = 0; i < fbelem.length; i++) {
//	    var thisElem = fbelem[i];
//	    //finds if one person likes this.
//	    if (thisElem.textContent.match('likes this.')){
//		icon = thisElem.childNodes[0]
//		link = thisElem.childNodes[1]
//		link.textContent = link.textContent.replace('likes this.', 'r xwexwistes.');
//		thisElem.textContent = '';
//		thisElem.appendChild(icon);
//		thisElem.appendChild(link);
// 	    }
//	    if (thisElem.textContent.match('like this.')){
//		    cnodes = thisElem.childNodes;
//		    for (var j = 0; j < cnodes.length; j++){
//			    cnode = cnodes[j];
//			    thisElem.appendChild(cnode);
//		    }
//	    }
//	}

	var fbelem = e.target.getElementsByTagName('h2');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		icon = thisElem.childNodes[0]
		    		thisElem.textContent = es[thisElem.textContent];
		    		thisElem.appendChild(icon);
		    	    }
		}
}

document.addEventListener('DOMNodeInserted', changedNode, false);
