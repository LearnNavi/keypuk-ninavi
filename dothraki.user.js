// Dothraki Facebook v .1
// Compiled by Richard Littauer
// Translated by the Dothraki community
// No (c) on anything, whatsoever.
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
// select "Dothraki Facebook", and click Uninstall.
//
// To install on Chrome, just drag it into a window. It'll work.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Dothraki Facebook
// @namespace     https://github.com/RichardLitt/keypuk-ninavi
// @description   script to change the Facebook
// @include       http://www.facebook.com/*
// @include       https://www.facebook.com/*
// ==/UserScript==

// Array of words to change.
// Section: Unsorted
var es = new Array();
// es["Home"] = "";
es["No"] = "Vos";
es["Yes"] = "Sek";
es["Maybe"] = "Ishish";
/* es["Friends"] = "";
es["Like"] = "";
es["Unlike"] = "";
es["Comment"] = "";
es["Books"] = ""; */
es["Female"] = "Chiori";
es["Male"] = "Mahrazh";
/* es["Say hello."] = "";
es["Say hi."] = "";
es["on Friday."] = "";
es["on Saturday."] = ""; */
es["Tomorrow"] = "Silokh";
es["Today"] = "Asshekh";
es["Yesterday"] = "Oskikh";
// es["What are you planning?"] = "";
es["Where?"] = "Finne?";
// es["Phone"] = "";
// es["Mobile Phone"] = "";
es["Children:"] = "Yalli:";
es["Birthday:"] = "Asshekhqoyi:";
/* es["See All"] = "";
es["Who's invited?"] = "";
es["This Month"] = "";
es["Share"] = "";
es["Who are you with?"] = "";
es["Where are you?"] = "";
es["via Twitter"] = "";
es["Upload photo/video"] = "";
es["Create photo album"] = "";
es["Create event"] = "";
es["Update status"] = "";
es["Add photo/video"] = "";
es["Ask question"] = "";
es["SORT"] = "";
es["Top stories"] = "";
es["Most Recent"] = "";
es["Account Settings"] = "";
es["Privacy Settings"] = "";
es["Log out"] = ""; */
es["Help"] = "Rhellaya";
/* es["Facebook"] = "";
es["Use webcam"] = "";
es["English (US)"] = "";
es["English (UK)"] = "";
es["Privacy"] = "";
es["Terms"] = ""; */
es["More"] = "Alikh";
es["About"] = "Qisi";
/*  es["Advertising"] = "";
es["Careers"] = "";
es["Create a Page"] = "";
es["Developers"] = "";
es["Add to my page's favourites"] = "";
es["Get updates via RSS"] = "";
es["Report Page"] = "";
es["like this"] = "";
es["talking about this"] = ""; */
es["Wall"] = "Gref";
es["Info"] = "Athnesar";
/*es["Friend activity"] = "";
es["Photos"] = "";
es["See all"] = "";
es["Recommended Pages"] = "";
// es["Discover new games"] = "";
es["Find friends"] = "";
es["Product/Service"] = "";
es["Life event"] = "";
es["Place"] = "";
es["Photo"] = "";
es["Status"] = "";
es["Update info"] = "";
es["Activity log"] = "";
es["Likes"] = "";
es["Map"] = "";
es["Born"] = "";
es["Richard Littauer"] = "";
es["See friendship"] = "";
// es["Sponsored"] = "";
es["Create an advert"] = "";
es["Subscriptions"] = "";
es["More Recent Activity"] = "";
es["View As..."] = "";
es["Add a badge to your site"] = "";
es["Edit"] = "";
es["Timeline"] = "";
es["Now"] = "Ajjin";
es["Use Facebook as:"] = "";
es["Translations"] = "";
es["Friend requests"] = "";
es["No new requests"] = "";
es["See all friend requests"] = "";
es["Messages"] = "";
es["Send a new message"] = "";
es["See all messages"] = "";
es["Notifications"] = "";
es["See all notifications"] = "";
es["Post"] = "";
es["Cancel"] = "";
es["Select an image or video file on your computer"] = "";
es["Choose file"] = "";
es["No file chosen"] = "";
es["Add year"] = "";
es["Change Cover"] = "";
es["Edit Profile Picture"] = "";
es["Chat Sounds"] = "";
es["Advanced Settings"] = "";
es["Go offline"] = "";
es["Hide Sidebar"] = "";
es["Subscribed"] = "";
es["More stories"] = "";
es["Edit options"] = "";
es["Find friends"] = "";
es["Basic Information"] = "";
es["Website"] = "";
es["Founded"] = "";
es["Mission"] = "";
es["Email"] = "";
es["Add Friends to chat..."] = "";
es["See Full Conversation"] = "";
es["Clear window"] = "";
es["Report as spam"] = "";
es["Unfollow post"] = "";
es["No new requests"] = "";
es["You like this"] = "";
es["There are no more posts to show."] = "";
es["There are no more posts to show at the moment"] = "";
es["commented on your"] = "";
es["Hidden Activity..."] = "";
es["Follow post"] = "";
es["Birthdays"] = "";
es["See more"] = "";
es["Add friend"] = "";
es["Close"] = "";
// es["What's on your mind?"] = "";
// es["Go Offline to "] = "";
// es["Search"] = "";
// es["shared a"] = "";
// es["via"] = "";
// es["Lives in"] = "";
// es["In a relationship with"] = "";
// es["mutual friends"] = "";
// es["minutes ago"] = "";


// Section: Sidebar */
es["and"] = "ma";
es["and"] = "ma";
// es["Photos"] = "";
// es["Music"] = "";
// es["Notes"] = "";
// es["Questions"] = "";
// es["Links"] = "";
// es["Apps and Games"] = "";
// es["Apps"] = "";
// es["Pages"] = "";
// es["Groups"] = "";
// es["News Feed"] = "";
// es["Favourites"] = ""; */
es["MORE"] = "ALIKH";

/* / Section: Groups
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
es["Choose a unique image for your group"] = "";
es["Add friends to group"] = "";


// Section: Months and dates
es["Friday"] = "";
es["Monday"] = "";
es["Tuesday"] = "";
es["Wednesday"] = "";
es["Thursday"] = "";
es["Saturday"] = "";
es["Sunday"] = "";
es["January"] = "";
es["February"] = "";
es["March"] = "";
es["April"] = "";
es["May"] = "";
es["June"] = "";
es["July"] = "";
es["August"] = "";
es["September"] = "";
es["October"] = "";
es["November"] = "";
es["December"] = "";
es["about an hour ago"] = "";
es["2 hours ago"] = "";
es["3 hours ago"] = "";
es["4 hours ago"] = "";
es["5 hours ago"] = "";
es["6 hours ago"] = "";
es["7 hours ago"] = "";
es["8 hours ago"] = "";
es["9 hours ago"] = "";
es["10 hours ago"] = "";
es["11 hours ago"] = "";
es["12 hours ago"] = "";

// Section: Photos
es["Add a description"] = "";
es["Tag photo"] = "";
es["Add location"] = "";
es["On your timeline"] = "";
es["Remove"] = "";
es["Profile pictures"] = "";
es["Change date"] = "";
es["Rotate left"] = "";
es["Rotate right"] = "";
es["Download"] = "";
es["Make this my Profile picture"] = "";
es["Delete this photo"] = "";
es["Press Esc to close"] = "";
es["Remove tag"] = "";
es["Choose from photos..."] = "";
es["Upload photo..."] = "";
// es["Reposition..."] = "";
// es["Remove..."] = "";
// es["Cover photos"] = "";

// Section: Friend page.
es["Search by name"] = "";
es["Search by friends of"] = "";
// es["Search by current city"] = "";
es["Search by school"] = "";
es["Search by workplace"] = "";
// es["Search by home town"] = "";
// es["Search by interest"] = "";

// Section: Friend profile.
es["Message"] = "";
es["Poke "] = "";
es["Suggest friends"] = "";
es["Unfriend"] = "";
es["Report/Block"] = "";
es["Close friends"] = "";
es["Acquaintences"] = "";
es["Show all lists"] = "";
es["How many updates?"] = "";
es["All updates"] = "";
es["Most updates"] = "";
es["Only important"] = "";
es["What types of updates?"] = "";
es["Life events"] = "";
es["Status updates"] = "";
es["Games"] = "";
es["Comments and likes"] = "";
es["Music and Videos"] = "";
es["Other activities"] = "";
es["Unsubscribe"] = "";

// Section: Map page
es["Place Lived"] = "";
// es["Trips"] = "";
// es["Life Event"] = "";
// es["Add Photos to Map"] = ""; */
es["Country"] = "Rhaesh";
// es["Edit place details"] = "";
es["City"] = "Vaes";
/* es["Show comments"] = "";
// es["Local business"] = "";
// es["Historical place"] = "";
// es["University"] = "";
// es["Get Directions"] = "";



// Section: About page
// es["Basic info"] = ""; */
es["Men"] = "Mahrazhi";
es["Women"] = "Chiorisi";
es["Men and women"] = "Mahrazhi ma Chiorisi";
// es["Networks"] = "";
// es["Contact info"] = "";
// es["Anniversary"] = "";
// es["Religion"] = "";
// es["Description"] = "";
// es["Political Views"] = "";
// es["What are your religious beliefs?"] = "";
// es["What are your political beliefs?"] = "";
// es["Show my full birthday on my timeline"] = "";
// es["Show only month & day on my timeline"] = "";
// es["Don't show my birthday on my timeline"] = "";
// es["I am"] = "";
// es["Select a relation:"] = "";
// es["It's complicated"] = "";
// es["Dothraki"] = "";
// es["Single"] = "";
// es["Engaged"] = "";
// es["Married"] = "";
// es["Widowed"] = "";
// es["Divorced"] = "";
// es["In an open relationship"] = "";
// es["With"] = "";
// es["Separated"] = "";
// es["Show my sec on my timeline"] = "";
// es["Living"] = "";
es["Birthday"] = "Asshekhqoyi";
// es["Interested in"] = "";
// es["Relatinship Status"] = "";
es["Languages"] = "Lekhi";
// es["Favourite quotations"] = "";
// es["In a relationship"] = "";
// es["Current location"] = "";
// es["Hometown"] = "";
// es["Secondary school"] = "";
// es["University"] = "";
// es["University (postgraduate)"] = "";
// es["Employers"] = "";
// es["Work and education"] = "";
/*/ es["History by year"] = "";
es["About you"] = "";
// es["Public"] = "";
es["Friends"] = "";
// es["Friends excpet acquaintances"] = "";
es["Only me"] = "";
// es["Custom"] = "";
// es["See all lists..."] = "";
// es["Where have you worked?"] = "";
// es["Where did you go to college/university?"] = "";
// es["Add a project"] = "";
// es["Add a class"] = "";
// es["Where did you go to secondary school?"] = "";
es["Save"] = "";
// es["Finished editing"] = "";

// Section: Family
es["Add another family member"] = "";
es["Remove from family"] = "";
// es["Show on profile"] = ""; */
es["Wife"] = "Chiorikem";
es["Husband"] = "Mahrazhkem";
// es["Auntie"] = "";
// es["Uncle"] = "";
// es["Aunt"] = "";
es["Niece"] = "Janise";
es["Nephew"] = "Siera";
// es["Cousin (female)"] = "";
// es["Cousin (male)"] = "";
es["Grandmother"] = "Kristasof";
es["Grandfather"] = "Simonof";
/* es["Granddaughter"] = "";
es["Grandson"] = "";
es["Stepmother"] = "";
es["Stepfather"] = "";
es["Stepsister"] = "";
es["Stepbrother"] = "";
es["Stepdaughter"] = "";
es["Stepson"] = "";
es["Relationship"] = ""; */
es["Family"] = "Rhojosor";
es["Brother"] = "Gaezo";
es["Sister"] = "Inavva";
es["Father"] = "Ave";
es["Mother"] = "Mai";
/* es["Brother (Pending)"] = "";
es["Sister (Pending)"] = "";
es["Sister-in-law"] = "";
es["Brother-in-law"] = "";
es["Father-in-law"] = "";
es["Mother-in-law"] = "";
es["Son-in-law"] = "";
es["Daughter-in-law"] = "";
es["Partner (male)"] = "";
es["Partner (female)"] = "";

// Section: Event page
// es["Event for"] = ""; */
es["By "] = "Ki";
/* es["Going"] = "";
// es["Invited"] = "";
es["Export"] = "";
es["Report"] = "";
// es["Link"] = "";
es["Video"] = "";
// es["until"] = "";
es["Events"] = "";
es["Not Going"] = "";
es["Export event"] = "";
es["Share Event"] = "";
es["Invite friends"] = "";
es["Invite"] = "";
es["See more suggestions"] = "";
es["Public event"] = "";
// es["All"] = "";
// es["Hosts"] = "";
es["Only people who are invited can see and join this event"] = "";
// es["Time"] = ""; */
es["When"] = "Affin";
es["Where"] = "Finne";

/*/ Section: Events page
// es["You're going."] = "";
// es["You might go."] = "";
es["Later This Week"] = "";
es["Next week"] = "";
es["Upcoming Events"] = "";
es["Suggested Events"] = "";
es["Past events"] = "";
es["Declined Events"] = "";
es["Export Events..."] = "";
es["Attach a file"] = "";
es["Take a picture or video"] = "";
es["Quick reply mode: press Enter to send"] = "";

// Section: Message page
es["Reply"] = "";
es["Actions"] = "";
es["Mark as unread"] = "";
es["Forward..."] = "";
es["Open in Chat"] = "";
es["Archive"] = "";
es["Delete messages..."] = "";
es["Report as spam..."] = "";
es["Report conversation..."] = "";
es["Move to other"] = "";
es["Sent from Chat"] = ""; */

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


