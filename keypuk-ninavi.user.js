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
// @include       https://www.facebook.com/*
// ==/UserScript==

// Array of words to change.
// Section: Unsorted
var es = new Array();
es["Home"] = "Kelutral";
es["No"] = "Kehe";
es["Yes"] = "Srane";
es["Maybe"] = "Kxawm";
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
es["Ask question"] = "Pawm tìpawmit";
es["SORT"] = "WÌNTXU";
es["Top stories"] = "Vurä fäpa";
es["Most Recent"] = "Vur asok";
es["Account Settings"] = "Fìpoä Sìfkeytok";
es["Privacy Settings"] = "Le'aw 'awpoä Sìfkeytok";
es["Log out"] = "Hum";
es["Help"] = "Srung";
es["Facebook"] = "Keypuk";
es["Use webcam"] = "Sar kusrrnekxti rusikxa ayrelä";
es["English (US)"] = "Na'vi";
es["English (UK)"] = "Na'vi";
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
// es["Discover new games"] = "Run mipa ayuvanti";
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
// es["Sponsored"] = "Awneyk";
es["Create an advert"] = "Ngop nusewìt";
es["Subscriptions"] = "Tsawne'a";
es["More Recent Activity"] = "Mipa hemti nì'ul";
es["View As..."] = "Tse'a na...";
es["Add a badge to your site"] = "Sung pätsìt ne ngey 'awm";
es["Edit"] = "Latem";
es["Timeline"] = "KrrPayfya";
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
es["There are no more posts to show."] = "Ke lu lahea upxare a tsun tsive'a"; 
es["There are no more posts to show at the moment"] = "Ke lu ayupxare alahe a tsun tse'a set"; 
es["commented on your"] = "poltxe teri ngeyä";
es["Hidden Activity..."] = "Wawnana Ayhem";
es["Follow post"] = "Nong fì'u";
es["Birthdays"] = "Ayftxozä";
es["See more"] = "Tse'a nì'ul";
es["Add friend"] = "Sung 'eylanit";
es["Close"] = "Tstu si";
// es["What's on your mind?"] = "’ìn ngeyä fyape nìfkrr?"; breaks input
// es["Go Offline to "] = "Wan ftu "; doesn't work
// es["Search"] = "Fwew"; 
// es["shared a"] = "käsrin";
// es["via"] = "ìlä";
// es["Lives in"] = "Kelku si mì";
// es["In a relationship with"] = "Muntxa susi mì";
// es["mutual friends"] = "tsaheylu tì'eylanä";
// es["minutes ago"] = "ayswawkam";


/*/ Section: Sidebar
// es["and"] = "sì";
// es["Photos"] = "Ayrel";
// es["Music"] = "Pamtseo";
// es["Notes"] = "Famreltsyìp";
// es["Questions"] = "Sìpawm";
// es["Links"] = "Saheylu";
// es["Apps and Games"] = "Sìkangkemvi sì Ayuvan";
// es["Apps"] = "Tìkangkemvi";
// es["Pages"] = "Ayrìk";
// es["Groups"] = "Fongu";
// es["Messages"] = "Upxare";
// es["News Feed"] = "Fmawnä Payfya";
// es["Favourites"] = "Oeyä sweya ayu";
// es["MORE"] = "NÌ'UL";

// Section: Groups
es["Open Group"] = "";
es["Chat with group"] = "";
es["Edit Group"] = "";
es["Write post"] = "";
es["Group Info"] = "";
es["Who else should be in this group?"] = "";
es["Report Group"] = "";
es["Provide Feedback"] = "";
es["Leave Group"] = "";
es["On"] = "";
es["Off"] = "";
es["Settings..."] = "";
es["Choose a unique image for your group"] = ""; */
es["Add friends to group"] = "Sung eylanit pongune";

// Section: Months and dates
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
es["about an hour ago"] = "teri trrtsyìpkam";
es["2 hours ago"] = "Mune srrtsyìpkam";
es["3 hours ago"] = "Pxey srrtsyìpkam";
es["4 hours ago"] = "Tsìng srrtsyìpkam";
es["5 hours ago"] = "Mrr srrtsyìpkam";
es["6 hours ago"] = "Pukap srrtsyìpkam";
es["7 hours ago"] = "Kinä srrtsyìpkam";
es["8 hours ago"] = "Mevol srrtsyìpkam";
es["9 hours ago"] = "Mevolaw srrtsyìpkam";
es["10 hours ago"] = "Mevomum srrtsyìpkam";
es["11 hours ago"] = "Mevopey srrtsyìpkam";
es["12 hours ago"] = "Mevosìng srrtsyìpkam";

// Section: Photos
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
es["Press Esc to close"] = "Ftxey esc fte tstu si";
es["Remove tag"] = "'Aku tstxot";
// es["Choose from photos..."] = "";
// es["Upload photo..."] = "";
// es["Reposition..."] = "";
// es["Remove..."] = "";
// es["Cover photos"] = "";

// Section: Friend page.
// es["Search by name"] = "";
// es["Search by friends of"] = "";
// es["Search by current city"] = "";
// es["Search by school"] = "";
// es["Search by workplace"] = "";
// es["Search by home town"] = "";
// es["Search by interest"] = "";

// Section: Friend profile.
es["Message"] = "'Upxare si";
// es["Poke "] = "";
es["Suggest friends"] = "Mok eylanit";
es["Unfriend"] = "Ke 'eylan si";
es["Report/Block"] = "Kulat/Fpe' neto";
es["Close friends"] = "Sìltsana eylan";
es["Acquaintences"] = "Súte";
es["Show all lists"] = "Wìntxu nìwotx";
es["How many updates?"] = "Holpxaype lawnatema ayu?";
es["All updates"] = "Lawnatema fra'u";
es["Most updates"] = "Lawnatema ayuä txampì";
es["Only important"] = "Nì'aw letsrantena ayu";
es["What types of updates?"] = "Pefnel lawnatema ayuä?";
es["Life events"] = "Tìreyä sìlen";
es["Status updates"] = "Tìfkeytok alawnatem";
es["Games"] = "Ayuvan";
es["Comments and likes"] = "Aysäplltxevi sì sawnunu ayu";
es["Music and Videos"] = "Pamtseo sì Rusikxa Rel";
es["Other activities"] = "Lahea sìlen";
es["Unsubscribe"] = "Ftang nirvong";

// Section: Map page
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

/*
// Section: About page
es["Basic info"] = "";
es["Men"] = "";
es["Women"] = "";
es["Men and women"] = "";
es["Networks"] = "";
es["Contact info"] = "";
es["Anniversary"] = "";
es["Religion"] = "";
es["Description"] = "";
es["Political Views"] = "";
es["What are your religious beliefs?"] = "";
es["What are your political beliefs?"] = "";
es["Show my full birthday on my timeline"] = "";
es["Show only month & day on my timeline"] = "";
es["Don't show my birthday on my timeline"] = "";
es["I am"] = "Oe lu";
es["Select a relation:"] = "";
es["It's complicated"] = "";
es["Na'vi"] = "Ayoengeyä lì'fya";
es["Single"] = "";
es["Engaged"] = "";
es["Married"] = "";
es["Widowed"] = "";
es["Divorced"] = "";
es["In an open relationship"] = "";
es["With"] = "";
es["Separated"] = "";
es["Show my sec on my timeline"] = "";
es["Living"] = "";
es["Birthday"] = "";
es["Interested in"] = "";
es["Relatinship Status"] = "";
es["Languages"] = "";
es["Favourite quotations"] = "";
es["In a relationship"] = "";
es["Current location"] = "";
es["Hometown"] = "";
es["Secondary school"] = "";
es["University"] = "";
es["University (postgraduate)"] = "";
es["Employers"] = "";
es["Work and education"] = "";
es["History by year"] = "";
es["About you"] = "";
es["Public"] = "";
es["Friends"] = "";
es["Friends excpet acquaintances"] = "";
es["Only me"] = "";
es["Custom"] = "";
es["See all lists..."] = "";
es["Where have you worked?"] = "";
es["Where did you go to college/university?"] = "";
es["Add a project"] = "";
es["Add a class"] = "";
es["Where did you go to secondary school?"] = "";
es["Save"] = "";
es["Finished editing"] = "";

// Section: Family
es["Add another family member"] = "Sung lahea túte soaiä";
es["Remove from family"] = "'Aku soaiata";
// es["Show on profile"] = "Wìntxu ";
es["Wife"] = "Muntxate";
es["Husband"] = "Muntxatan";
es["Auntie"] = "Sa'semä tsmuke";
es["Uncle"] = "Sa'semä tsmukan";
es["Aunt"] = "Sa'semä tsmuke";
es["Neice"] = "Tsmukä 'ite";
es["Nephew"] = "Tsmukä 'itan";
es["Cousin (female)"] = "Sa'semä tsmukä 'ita";
es["Cousin (male)"] = "Sa'semä tsmukä 'itan";
es["Grandmother"] = "";
es["Grandfather"] = "";
es["Granddaughter"] = "";
es["Grandson"] = "";
es["Stepmother"] = "";
es["Stepfather"] = "";
es["Stepsister"] = "";
es["Stepbrother"] = "";
es["Stepdaughter"] = "";
es["Stepson"] = "";
es["Relationship"] = "";
es["Family"] = "Soaia";
es["Brother"] = "Tsmukan";
es["Sister"] = "Tsmuke";
es["Father"] = "Sempul";
es["Mother"] = "Sa'nok";
// es["Brother (Pending)"] = "";
// es["Sister (Pending)"] = "";
es["Sister-in-law"] = "";
es["Brother-in-law"] = "";
es["Father-in-law"] = "";
es["Mother-in-law"] = "";
es["Son-in-law"] = "";
es["Daughter-in-law"] = "";
es["Partner (male)"] = "";
es["Partner (female)"] = "";
*/

// Section: Event page
// es["Event for"] = "Tìlen fpi";
// es["By "] = "Fa ";
// es["Going"] = "Kerayä";
// es["Maybe"] = "Kxawm";
// es["Invited"] = "Vawnin";
es["Export"] = "Fpe' käsatseng";
es["Report"] = "Kulat";
// es["Link"] = "Tsaheylu si"; // Makes replying impossible. 
es["Video"] = "Rusikxa Rel";
// es["until"] = "vaykrr";
es["Events"] = "Sìlen";
es["Not Going"] = "Ke kerayä";
es["Export event"] = "Fpe' käsatseng tìlenit";
es["Share Event"] = "Käsrin tìlenit";
es["Invite friends"] = "Vin eylanti";
es["Invite"] = "Vin";
es["See more suggestions"] = "Tse'a lahea sìmokti";
es["Public event"] = "Tìlen apiak frapofpi ";
// es["All"] = "Frapo";
// es["Hosts"] = "Frrfenyu"; // Not sure about this one
es["Only people who are invited can see and join this event"] = "Nì'aw sute avawnin tsun tsive'a sì 'awstengyem fìtìlenit";
// es["Time"] = "Krr";
// es["When"] = "Pehrr";
// es["Where"] = "Petsenge";

// Section: Events page
// es["You're going."] = "Nga kayä.";
// es["You might go."] = "Nga kxawm kayä.";
es["Later This Week"] = "Fìkintrrmì";
es["Next week"] = "Kintrrmì ahay";
es["Upcoming Events"] = "Kusäa Sìlen";
es["Suggested Events"] = "Vawnina Sìlen";
es["Past events"] = "Sìlen akawnamä";
es["Declined Events"] = "Sìlen akawnä a nga kivä satne";
es["Export Events..."] = "Fpe' käsatseng Sìlenit...";
es["Attach a file"] = "";
es["Take a picture or video"] = "";
es["Quick reply mode: press Enter to send"] = "";

// Section: Message page
es["Reply"] = "Plltxe nì'eyng";
es["Actions"] = "Hem";
es["Mark as unread"] = "Latem fì'ut na kea awninan";
es["Forward..."] = "Fpe' fì'ut tuteone";
es["Open in Chat"] = "Piak si Pängkxoyumì";
es["Archive"] = "Wan";
es["Delete messages..."] = "Ska'a upxaret";
es["Report as spam..."] = "Kulat na tìkawng...";
es["Report conversation..."] = "Kulat tìpängkxot";
es["Move to other"] = "'ärìp ne lapo";
es["Sent from Chat"] = "Fpawne' ftu Pängkxoyu";

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
