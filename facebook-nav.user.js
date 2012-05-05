// ==UserScript==
// @name           facebook-nav
// @namespace      IndigenousTweets.com
// @description    Translates Facebook into Na'vi
// @include        http*://*.facebook.com/*
// @include        http*://facebook.com/*
// @author         Kevin Scannell
// @run-at         document-start
// @version        1.0.0
// @icon           http://indigenoustweets.com/resources/gm.png
// ==/UserScript==

// Last updated:   2012-05-05
// Translations:   Richard Littauer

/*
 *  Copyright 2012 Kevin Scannell
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
*/


var tags = new Array();
tags.push('a');      // many...
tags.push('h4');     // Sponsored, Ticker, ...
tags.push('h6');     // %a commented on %a.
tags.push('label');  // Comment

var divclasses = new Array();
divclasses.push('innerWrap');  // Write a comment... <textarea>
divclasses.push('commentActions fsm fwn fcg'); // time stamps on comments
divclasses.push('UIImageBlock_Content UIImageBlock_ICON_Content');  // 2 people like this
//divclasses.push('fsm fwn fcg');  // By:
//divclasses.push('uiImageBlockContent uiImageBlockSmallContent');  // "near"

var spanclasses = new Array();
spanclasses.push('default_message');  // Like/Dislike
spanclasses.push('saving_message');   // Like/Dislike
spanclasses.push('uiStreamSource');   // %T near %a

// Replace the search string with the translated string
function r(dd, s, t) {
    if (s == t) {
        return (dd);
    } else {
        var RegExpr = new RegExp(s, "g");
        return (dd.replace(RegExpr, t));
    }
}

function translate(x) {
  d = x;
// Translations go here
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>), (<a [^>]+>[^<]+</a>) and (<a [^>]+>[^<]+</a>) like this\.(?=($|"|<))', "$1"+"$2"+", "+"$3"+" sì "+"$4"+" fì'uri sunu.");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) and (<a [^>]+>[^<]+</a>) shared (<a [^>]+>[^<]+</a>)\.(?=($|"|<))', "$1"+"$2"+"l sì "+"$3"+"l käsrin "+"$4"+"ti.");
  d = r(d, '(^|="|>)Only people who are invited can see and join this event(?=($|"|<))', "$1"+"Nì'aw sute avawnin tsun tsive'a sì 'awstengyem fìtìlenit");
  d = r(d, '(^|="|>)Select an image or video file on your computer(?=($|"|<))', "$1"+"Ftxey relit fu relit arusikx mì ngeyä eltu lefngap");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) and (<a [^>]+>[^<]+</a>) like this\.(?=($|"|<))', "$1"+"$2"+" sì "+"$3"+" fì'uri sunu.");
  d = r(d, '(^|="|>)There are no more posts to show at the moment(?=($|"|<))', "$1"+"Ke lu ayupxare alahe a tsun tse'a set ");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) shared (<a [^>]+>[^<]+</a>)\.(?=($|"|<))', "$1"+"$2"+"l käsrin "+"$3"+"ti.");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) likes (<a [^>]+>[^<]+</a>)\.(?=($|"|<))', "$1"+"$2"+"l "+"$3"+"ri sunu si.");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) likes a (<a [^>]+>[^<]+</a>)\.(?=($|"|<))', "$1"+"$2"+"ru "+"$3"+" sunu.");
  d = r(d, '(^|="|>)Add to my page\'s favourites(?=($|"|<))', "$1"+"Sung fì'uti ayuru a sunu rìkur oeyä frato");
  d = r(d, '(^|="|>)You and (<a [^>]+>[^<]+</a>) like this\.(?=($|"|<))', "$1"+"Ngaru tu "+"$2"+"ru fì'u sunu.");
  d = r(d, '(^|="|>)There are no more posts to show\.(?=($|"|<))', "$1"+"Ke lu lahea upxare a tsun tsive'a ");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) added a new photo\.(?=($|"|<))', "$1"+"$2"+" mipa relit solung.");
  d = r(d, '(^|="|>)Make this my Profile picture(?=($|"|<))', "$1"+"Oel new futa oeyä Txìna Ayrel.");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) likes this\.(?=($|"|<))', "$1"+"Fì'uri "+"$2"+" sunu si.");
  d = r(d, '(^|="|>)(<a [^>]+>[^<]+</a>) like this\.(?=($|"|<))', "$1"+"Fì'uri "+"$2"+" sunu si.");
  d = r(d, '(^|="|>)View all ([0-9,]+) comments(?=($|"|<))', "$1"+"Tse'a "+"$2"+" frasäplltxe");
  d = r(d, '(^|="|>)Add Friends to chat\.\.\.(?=($|"|<))', "$1"+"Sung eylanit tìpängkxoru");
  d = r(d, '(^|="|>)Add a badge to your site(?=($|"|<))', "$1"+"Sung pätsìt ne ngey 'awm");
  d = r(d, '(^|="|>)See Full Conversation(?=($|"|<))', "$1"+"Tse'a tìpängkxoti nìwotx");
  d = r(d, '(^|="|>)Add another family member(?=($|"|<))', "$1"+"Sung lahea túte soaiä");
  d = r(d, '(^|="|>)What types of updates\\?(?=($|"|<))', "$1"+"Pefnel lawnatema ayuä?");
  d = r(d, '(^|="|>)Comments and likes(?=($|"|<))', "$1"+"Aysäplltxevi sì sawnunu ayu");
  d = r(d, '(^|="|>)Declined Events(?=($|"|<))', "$1"+"Sìlen akawnä a nga kivä satne");
  d = r(d, '(^|="|>)Export Events\.\.\.(?=($|"|<))', "$1"+"Fpe' käsatseng Sìlenit...");
  d = r(d, '(^|="|>)What\'s on your mind\\?(?=($|"|<))', "$1"+"Teri pey fperìl ngal?");
  d = r(d, '(^|="|>)September ([0-9]{1,2})(?=($|"|<))', "$1"+"Volawvea vospxì "+"$2");
  d = r(d, '(^|="|>)What are you planning\\?(?=($|"|<))', "$1"+"Pehemit ngal herawl?");
  d = r(d, '(^|="|>)November ([0-9]{1,2})(?=($|"|<))', "$1"+"Vopeyvea vospxì "+"$2");
  d = r(d, '(^|="|>)December ([0-9]{1,2})(?=($|"|<))', "$1"+"Vosìvea vospxì "+"$2");
  d = r(d, '(^|="|>)How many updates\\?(?=($|"|<))', "$1"+"Holpxaype lawnatema ayu?");
  d = r(d, '(^|="|>)Report conversation\.\.\.(?=($|"|<))', "$1"+"Kulat tìpängkxot");
  d = r(d, '(^|="|>)See All Friend Requests(?=($|"|<))', "$1"+"Tse'a fraätxäleti");
  d = r(d, '(^|="|>)See All Notifications(?=($|"|<))', "$1"+"Tse'a fmawnit nìwotx");
  d = r(d, '(^|="|>)Upload photo/video(?=($|"|<))', "$1"+"Fpe' rusikxa relit/relit");
  d = r(d, '(^|="|>)Search by workplace(?=($|"|<))', "$1"+"Fwew fa tìkangkemtseng");
  d = r(d, '(^|="|>)([0-9,]+) mutual friends(?=($|"|<))', "$1"+"$2"+" eylan ateng");
  d = r(d, '(^|="|>)October ([0-9]{1,2})(?=($|"|<))', "$1"+"Vomuvea vospxì "+"$2");
  d = r(d, '(^|="|>)Mark as unread(?=($|"|<))', "$1"+"Latem fì'ut na kea awninan");
  d = r(d, '(^|="|>)Privacy Settings(?=($|"|<))', "$1"+"Le'aw 'awpoä Sìfkeytok");
  d = r(d, '(^|="|>)January ([0-9]{1,2})(?=($|"|<))', "$1"+"'Awvea vospxì "+"$2");
  d = r(d, '(^|="|>)February ([0-9]{1,2})(?=($|"|<))', "$1"+"Muvea vospxì "+"$2");
  d = r(d, '(^|="|>)Get updates via RSS(?=($|"|<))', "$1"+"Tel fmawnit ìlä RSS");
  d = r(d, '(^|="|>)Edit Profile Picture(?=($|"|<))', "$1"+"Leykatem Txina Relit");
  d = r(d, '(^|="|>)Add friends to group(?=($|"|<))', "$1"+"Sung eylanit pongune");
  d = r(d, '(^|="|>)Cousin \\(female\\)(?=($|"|<))', "$1"+"Sa'semä tsmukä 'ita");
  d = r(d, '(^|="|>)See more suggestions(?=($|"|<))', "$1"+"Tse'a lahea sìmokti");
  d = r(d, '(^|="|>)Report as spam\.\.\.(?=($|"|<))', "$1"+"Kulat na tìkawng...");
  d = r(d, '(^|="|>)March ([0-9]{1,2})(?=($|"|<))', "$1"+"Pxeyvea vospxì "+"$2");
  d = r(d, '(^|="|>)April ([0-9]{1,2})(?=($|"|<))', "$1"+"Tsìvea vospxì "+"$2");
  d = r(d, '(^|="|>)August ([0-9]{1,2})(?=($|"|<))', "$1"+"Volvea vospxì "+"$2");
  d = r(d, '(^|="|>)On your timeline(?=($|"|<))', "$1"+"Mì ngeyä Krrä Payfya");
  d = r(d, '(^|="|>)Press Esc to close(?=($|"|<))', "$1"+"Ftxey esc fte tstu si");
  d = r(d, '(^|="|>)Music and Videos(?=($|"|<))', "$1"+"Pamtseo sì Rusikxa Rel");
  d = r(d, '(^|="|>)Cousin \\(male\\)(?=($|"|<))', "$1"+"Sa'semä tsmukä 'itan");
  d = r(d, '(^|="|>)Use webcam(?=($|"|<))', "$1"+"Sar rel arusikx stä'nìyuti");
  d = r(d, '(^|="|>)Choose from photos\.\.\.(?=($|"|<))', "$1"+"Ftxey ayrelkip");
  d = r(d, '(^|="|>)Add Photo / Video(?=($|"|<))', "$1"+"Sung (rusikxa) relit");
  d = r(d, '(^|="|>)Apps and Games(?=($|"|<))', "$1"+"Sìkangkemvi sì Ayuvan");
  d = r(d, '(^|="|>)([0-9,]+) hours ago(?=($|"|<))', "$1"+"$2"+" srrtsyìpkam");
  d = r(d, '(^|="|>)Send a New Message(?=($|"|<))', "$1"+"Fpe' mipa 'upxareti");
  d = r(d, '(^|="|>)More Recent Activity(?=($|"|<))', "$1"+"Mipa hemti nì'ul");
  d = r(d, '(^|="|>)Advanced Settings(?=($|"|<))', "$1"+"Ngäzìka Sìfkeytok");
  d = r(d, '(^|="|>)May ([0-9]{1,2})(?=($|"|<))', "$1"+"Mrrvea vospxì "+"$2");
  d = r(d, '(^|="|>)June ([0-9]{1,2})(?=($|"|<))', "$1"+"Puvea vospxì "+"$2");
  d = r(d, '(^|="|>)July ([0-9]{1,2})(?=($|"|<))', "$1"+"Kivea vospxì "+"$2");
  d = r(d, '(^|="|>)talking about this(?=($|"|<))', "$1"+"fì'uteri perlltxe");
  d = r(d, '(^|="|>)Only important(?=($|"|<))', "$1"+"Nì'aw letsrantena ayu");
  d = r(d, '(^|="|>)Partner \\(female\\)(?=($|"|<))', "$1"+"Muntxatu (tuté)");
  d = r(d, '(^|="|>)Export event(?=($|"|<))', "$1"+"Fpe' käsatseng tìlenit");
  d = r(d, '(^|="|>)Sent from Chat(?=($|"|<))', "$1"+"Fpawne' ftu Pängkxoyu");
  d = r(d, '(^|="|>)Chat \\(Offline\\)(?=($|"|<))', "$1"+"Plltxe (Kämakto)");
  d = r(d, '(^|="|>)([0-9,]+) NEW STORIES(?=($|"|<))', "$1"+"$2"+" VUR AMIP");
  d = r(d, '(^|="|>)Friend Requests(?=($|"|<))', "$1"+"Ätxäle sì'eylanä");
  d = r(d, '(^|="|>)Where are you\\?(?=($|"|<))', "$1"+"Tsengitpe ngal tok?");
  d = r(d, '(^|="|>)Create photo album(?=($|"|<))', "$1"+"Relä pukit ngop ");
  d = r(d, '(^|="|>)Discover new games(?=($|"|<))', "$1"+"Run mipa ayuvanti");
  d = r(d, '(^|="|>)No new requests(?=($|"|<))', "$1"+"Kea mipa ayätxäle.");
  d = r(d, '(^|="|>)commented on your(?=($|"|<))', "$1"+"poltxe teri ngeyä");
  d = r(d, '(^|="|>)Search by home town(?=($|"|<))', "$1"+"Fwew fa Kelutral");
  d = r(d, '(^|="|>)Most updates(?=($|"|<))', "$1"+"Lawnatema ayuä txampì");
  d = r(d, '(^|="|>)Show comments(?=($|"|<))', "$1"+"Wìntxu aysäplltxevit");
  d = r(d, '(^|="|>)about an hour ago(?=($|"|<))', "$1"+"teri trrtsyìpkam");
  d = r(d, '(^|="|>)Account Settings(?=($|"|<))', "$1"+"Fìpoä Sìfkeytok");
  d = r(d, '(^|="|>)([0-9,]+) minutes ago(?=($|"|<))', "$1"+"$2"+" swawkam");
  d = r(d, '(^|="|>)Update Status(?=($|"|<))', "$1"+"Leykatem tìfkeytokit");
  d = r(d, '(^|="|>)Who are you with\\?(?=($|"|<))', "$1"+"Pesumì nga lu?");
  d = r(d, '(^|="|>)No new requests(?=($|"|<))', "$1"+"Kea mipa ayätxäle");
  d = r(d, '(^|="|>)Unfollow post(?=($|"|<))', "$1"+"Ftang nirvong kìngit");
  d = r(d, '(^|="|>)Hidden Activity\.\.\.(?=($|"|<))', "$1"+"Wawnana Ayhem");
  d = r(d, '(^|="|>)In a relationship with(?=($|"|<))', "$1"+"Muntxa si hi");
  d = r(d, '(^|="|>)Status updates(?=($|"|<))', "$1"+"Tìfkeytok alawnatem");
  d = r(d, '(^|="|>)Partner \\(male\\)(?=($|"|<))', "$1"+"Muntxatu (tutan)");
  d = r(d, '(^|="|>)Public event(?=($|"|<))', "$1"+"Tìlen apiak frapofpi ");
  d = r(d, '(^|="|>)Delete messages\.\.\.(?=($|"|<))', "$1"+"Ska'a upxaret");
  d = r(d, '(^|="|>)See All Messages(?=($|"|<))', "$1"+"Tse'a fra'upxaret");
  d = r(d, '(^|="|>)You like this\.(?=($|"|<))', "$1"+"Nga fì'u sunu si.");
  d = r(d, '(^|="|>)Add a description(?=($|"|<))', "$1"+"Sung tìsla'tsut");
  d = r(d, '(^|="|>)Search by friends of(?=($|"|<))', "$1"+"Fwew fa eylan");
  d = r(d, '(^|="|>)Open in Chat(?=($|"|<))', "$1"+"Piak si Pängkxoyumì");
  d = r(d, '(^|="|>)Create Group\.\.\.(?=($|"|<))', "$1"+"Ngop pongut...");
  d = r(d, '(^|="|>)([0-9,]+) shares(?=($|"|<))', "$1"+"$2"+" sawnäsrin");
  d = r(d, '(^|="|>)Recommended Pages(?=($|"|<))', "$1"+"Mawnawka ayrìk");
  d = r(d, '(^|="|>)Use Facebook as:(?=($|"|<))', "$1"+"Sar Keypukit na:");
  d = r(d, '(^|="|>)Search by school(?=($|"|<))', "$1"+"Fwew fa numtseng");
  d = r(d, '(^|="|>)Forward\.\.\.(?=($|"|<))', "$1"+"Fpe' fì'ut tuteone");
  d = r(d, '(^|="|>)See Friendship(?=($|"|<))', "$1"+"Tse'a tì'eylanti");
  d = r(d, '(^|="|>)Report as spam(?=($|"|<))', "$1"+"Kulat na tìkawng");
  d = r(d, '(^|="|>)Chat with group(?=($|"|<))', "$1"+"Pängkxo Ponguhu");
  d = r(d, '(^|="|>)about a minute ago(?=($|"|<))', "$1"+"teri swawkam");
  d = r(d, '(^|="|>)Edit Options(?=($|"|<))', "$1"+"Leykatem sìftxeyt");
  d = r(d, '(^|="|>)FAVORITES(?=($|"|<))', "$1"+"Ayu a sunu oeru frato");
  d = r(d, '(^|="|>)No file chosen(?=($|"|<))', "$1"+"Ke'ut ke ftxoley");
  d = r(d, '(^|="|>)Hide Sidebar(?=($|"|<))', "$1"+"Wan Pa'oä Payfyat");
  d = r(d, '(^|="|>)Basic Information(?=($|"|<))', "$1"+"Ftuea säomum");
  d = r(d, '(^|="|>)Delete this photo(?=($|"|<))', "$1"+"'Aku fìrelit");
  d = r(d, '(^|="|>)Remove from family(?=($|"|<))', "$1"+"'Aku soaiata");
  d = r(d, '(^|="|>)You might go\.(?=($|"|<))', "$1"+"Nga kxawm kayä.");
  d = r(d, '(^|="|>)Suggested Events(?=($|"|<))', "$1"+"Vawnina Sìlen");
  d = r(d, '(^|="|>)Update Info(?=($|"|<))', "$1"+"Leykatem säomumit");
  d = r(d, '(^|="|>)Who\'s invited\\?(?=($|"|<))', "$1"+"Pesu ziva'u?");
  d = r(d, '(^|="|>)Upload photo\.\.\.(?=($|"|<))', "$1"+"Tìng relit");
  d = r(d, '(^|="|>)Show all lists(?=($|"|<))', "$1"+"Wìntxu nìwotx");
  d = r(d, '(^|="|>)1 mutual friend(?=($|"|<))', "$1"+"1 eylan ateng");
  d = r(d, '(^|="|>)Close Friends(?=($|"|<))', "$1"+"Sìltsana eylan");
  d = r(d, '(^|="|>)via Twitter(?=($|"|<))', "$1"+"ìlä Yayotsyìp ");
  d = r(d, '(^|="|>)Other activities(?=($|"|<))', "$1"+"Lahea sìlen");
  d = r(d, '(^|="|>)Men and women(?=($|"|<))', "$1"+"Sutan sì suté");
  d = r(d, '(^|="|>)Upcoming Events(?=($|"|<))', "$1"+"Kusäa Sìlen");
  d = r(d, '(^|="|>)Move to other(?=($|"|<))', "$1"+"'ärìp ne lapo");
  d = r(d, '(^|="|>)Recent Activity(?=($|"|<))', "$1"+"Hemti nì'ul");
  d = r(d, '(^|="|>)Friend activity(?=($|"|<))', "$1"+"Tìn eylanä");
  d = r(d, '(^|="|>)Profile pictures(?=($|"|<))', "$1"+"Txina Ayrel");
  d = r(d, '(^|="|>)Search by name(?=($|"|<))', "$1"+"Fwew fa tstxo");
  d = r(d, '(^|="|>)Report/Block(?=($|"|<))', "$1"+"Kulat/Fpe' neto");
  d = r(d, '(^|="|>)Share Event(?=($|"|<))', "$1"+"Käsrin tìlenit");
  d = r(d, '(^|="|>)Later This Week(?=($|"|<))', "$1"+"Fìkintrrmì");
  d = r(d, '(^|="|>)Past events(?=($|"|<))', "$1"+"Sìlen akawnamä");
  d = r(d, '(^|="|>)Ask Question(?=($|"|<))', "$1"+"Pawm tìpawmit");
  d = r(d, '(^|="|>)Change Cover(?=($|"|<))', "$1"+"Leykatem Keyit");
  d = r(d, '(^|="|>)([0-9,]+) people(?=($|"|<))', "$1"+"$2"+" sute");
  d = r(d, '(^|="|>)Like This Page(?=($|"|<))', "$1"+"Fìrìk sunu");
  d = r(d, '(^|="|>)Mobile Phone(?=($|"|<))', "$1"+"Syawyu lefngap");
  d = r(d, '(^|="|>)Clear window(?=($|"|<))', "$1"+"Law si nìwotx");
  d = r(d, '(^|="|>)Suggest friends(?=($|"|<))', "$1"+"Mok eylanit");
  d = r(d, '(^|="|>)All updates(?=($|"|<))', "$1"+"Lawnatema fra'u");
  d = r(d, '(^|="|>)Life events(?=($|"|<))', "$1"+"Tìreyä sìlen");
  d = r(d, '(^|="|>)Create an Ad(?=($|"|<))', "$1"+"Ngop nusewìt");
  d = r(d, '(^|="|>)Life Event(?=($|"|<))', "$1"+"Tìlen tìreyä");
  d = r(d, '(^|="|>)Most Recent(?=($|"|<))', "$1"+"Vur asok frato");
  d = r(d, '(^|="|>)September(?=($|"|<))', "$1"+"Volawvea vospxì");
  d = r(d, '(^|="|>)Create event(?=($|"|<))', "$1"+"Tìlenit ngop");
  d = r(d, '(^|="|>)Tag photo(?=($|"|<))', "$1"+"Pesul relit tok?");
  d = r(d, '(^|="|>)Change date(?=($|"|<))', "$1"+"Leykatem trrit");
  d = r(d, '(^|="|>)Rotate right(?=($|"|<))', "$1"+"Rikx nìskien");
  d = r(d, '(^|="|>)Cover photos(?=($|"|<))', "$1"+"Rel mì fäpa");
  d = r(d, '(^|="|>)Invite friends(?=($|"|<))', "$1"+"Vin eylanti");
  d = r(d, '(^|="|>)You\'re going\.(?=($|"|<))', "$1"+"Nga kayä.");
  d = r(d, '(^|="|>)Create a Page(?=($|"|<))', "$1"+"Ngop rìkti");
  d = r(d, '(^|="|>)More Stories(?=($|"|<))', "$1"+"Nì'ul ayvul");
  d = r(d, '(^|="|>)November(?=($|"|<))', "$1"+"Vopeyvea vospxì");
  d = r(d, '(^|="|>)December(?=($|"|<))', "$1"+"Vosìvea vospxì");
  d = r(d, '(^|="|>)on Saturday\.(?=($|"|<))', "$1"+"Trrkivemì.");
  d = r(d, '(^|="|>)View As\.\.\.(?=($|"|<))', "$1"+"Tse'a na...");
  d = r(d, '(^|="|>)Chat Sounds(?=($|"|<))', "$1"+"Puslltxea Fam");
  d = r(d, '(^|="|>)Find friends(?=($|"|<))', "$1"+"Fwew eylanit");
  d = r(d, '(^|="|>)Open Group(?=($|"|<))', "$1"+"Sngä'i Pongut");
  d = r(d, '(^|="|>)Add location(?=($|"|<))', "$1"+"Sung tsenget");
  d = r(d, '(^|="|>)Rotate left(?=($|"|<))', "$1"+"Rikx nìftär");
  d = r(d, '(^|="|>)Unsubscribe(?=($|"|<))', "$1"+"Ftang nirvong");
  d = r(d, '(^|="|>)Place Lived(?=($|"|<))', "$1"+"Tseng a Roley");
  d = r(d, '(^|="|>)Na\'vi(?=($|"|<))', "$1"+"Ayoengeyä lì'fya");
  d = r(d, '(^|="|>)Finished editing(?=($|"|<))', "$1"+"Lu hasey");
  d = r(d, '(^|="|>)Add Friend(?=($|"|<))', "$1"+"Sung 'eylanit");
  d = r(d, '(^|="|>)Find Friends(?=($|"|<))', "$1"+"Run eylanit");
  d = r(d, '(^|="|>)News Feed(?=($|"|<))', "$1"+"Fmawnä Payfya");
  d = r(d, '(^|="|>)Report Page(?=($|"|<))', "$1"+"Kulat rìkit");
  d = r(d, '(^|="|>)Richard Littauer(?=($|"|<))', "$1"+"Taronyu");
  d = r(d, '(^|="|>)Add friend(?=($|"|<))', "$1"+"Sung 'eylanit");
  d = r(d, '(^|="|>)Show on profile(?=($|"|<))', "$1"+"Wìntxu ");
  d = r(d, '(^|="|>)Next week(?=($|"|<))', "$1"+"Kintrrmì ahay");
  d = r(d, '(^|="|>)Activity Log(?=($|"|<))', "$1"+"Sìnä 'ok");
  d = r(d, '(^|="|>)Top Stories(?=($|"|<))', "$1"+"Txina ayvur");
  d = r(d, '(^|="|>)October(?=($|"|<))', "$1"+"Vomuvea vospxì");
  d = r(d, '(^|="|>)on Friday\.(?=($|"|<))', "$1"+"Trrpuvemì.");
  d = r(d, '(^|="|>)Product/Service(?=($|"|<))', "$1"+"Kìte'e");
  d = r(d, '(^|="|>)Translations(?=($|"|<))', "$1"+"Sìralpeng");
  d = r(d, '(^|="|>)Choose file(?=($|"|<))', "$1"+"Ftxey 'uoti");
  d = r(d, '(^|="|>)Add year(?=($|"|<))', "$1"+"Sung zìsìtit");
  d = r(d, '(^|="|>)Go Offline to (?=($|"|<))', "$1"+"Wan ftu ");
  d = r(d, '(^|="|>)Edit Group(?=($|"|<))', "$1"+"Latem Pongut");
  d = r(d, '(^|="|>)1 NEW STORY(?=($|"|<))', "$1"+"1 VUR AMIP");
  d = r(d, '(^|="|>)English \\(US\\)(?=($|"|<))', "$1"+"Na'vi");
  d = r(d, '(^|="|>)Privacy(?=($|"|<))', "$1"+"Kxukea Säomum");
  d = r(d, '(^|="|>)Subscriptions(?=($|"|<))', "$1"+"Tsawne'a");
  d = r(d, '(^|="|>)January(?=($|"|<))', "$1"+"'Awvea vospxì");
  d = r(d, '(^|="|>)February(?=($|"|<))', "$1"+"Muvea vospxì");
  d = r(d, '(^|="|>)Say hello\.(?=($|"|<))', "$1"+"Kaltxì si");
  d = r(d, '(^|="|>)Follow post(?=($|"|<))', "$1"+"Nong fì'u");
  d = r(d, '(^|="|>)Remove tag(?=($|"|<))', "$1"+"'Aku tstxot");
  d = r(d, '(^|="|>)Auntie(?=($|"|<))', "$1"+"Sa'semä tsmuke");
  d = r(d, '(^|="|>)Uncle(?=($|"|<))', "$1"+"Sa'semä tsmukan");
  d = r(d, '(^|="|>)Export(?=($|"|<))', "$1"+"Fpe' käsatseng");
  d = r(d, '(^|="|>)Advertising(?=($|"|<))', "$1"+"Tìlusawk");
  d = r(d, '(^|="|>)See All(?=($|"|<))', "$1"+"Tse'a Nìwotx");
  d = r(d, '(^|="|>)See More(?=($|"|<))', "$1"+"Tse'a nì'ul");
  d = r(d, '(^|="|>)March(?=($|"|<))', "$1"+"Pxeyvea vospxì");
  d = r(d, '(^|="|>)April(?=($|"|<))', "$1"+"Tsìvea vospxì");
  d = r(d, '(^|="|>)August(?=($|"|<))', "$1"+"Volvea vospxì");
  d = r(d, '(^|="|>)This Month(?=($|"|<))', "$1"+"Fìvospxì");
  d = r(d, '(^|="|>)See all(?=($|"|<))', "$1"+"Tse'a nìwotx");
  d = r(d, '(^|="|>)Lives in(?=($|"|<))', "$1"+"Kelku si mì");
  d = r(d, '(^|="|>)Group Info(?=($|"|<))', "$1"+"Hum pongut");
  d = r(d, '(^|="|>)Reposition\.\.\.(?=($|"|<))', "$1"+"Rikx");
  d = r(d, '(^|="|>)Unfriend(?=($|"|<))', "$1"+"Ke 'eylan si");
  d = r(d, '(^|="|>)Description(?=($|"|<))', "$1"+"Tìlusawk");
  d = r(d, '(^|="|>)Reply(?=($|"|<))', "$1"+"Plltxe nì'eyng");
  d = r(d, '(^|="|>)Share(?=($|"|<))', "$1"+"Käsrin fì'ut");
  d = r(d, '(^|="|>)Phone(?=($|"|<))', "$1"+"Syawyu lefngap");
  d = r(d, '(^|="|>)Go offline(?=($|"|<))', "$1"+"Kämakto!");
  d = r(d, '(^|="|>)Videos(?=($|"|<))', "$1"+"Rusikxa ayrel");
  d = r(d, '(^|="|>)Write post(?=($|"|<))', "$1"+"Pamrel si");
  d = r(d, '(^|="|>)Movies(?=($|"|<))', "$1"+"Rusikxa ayrel");
  d = r(d, '(^|="|>)Aunt(?=($|"|<))', "$1"+"Sa'semä tsmuke");
  d = r(d, '(^|="|>)Nephew(?=($|"|<))', "$1"+"Tsmukä 'itan");
  d = r(d, '(^|="|>)Event for(?=($|"|<))', "$1"+"Tìlen fpi");
  d = r(d, '(^|="|>)Not Going(?=($|"|<))', "$1"+"Ke kerayä");
  d = r(d, '(^|="|>)1 share(?=($|"|<))', "$1"+"1 kusäsrin");
  d = r(d, '(^|="|>)Developers(?=($|"|<))', "$1"+"Ayngopyu");
  d = r(d, '(^|="|>)Notifications(?=($|"|<))', "$1"+"Fmawn");
  d = r(d, '(^|="|>)Wednesday(?=($|"|<))', "$1"+"Trrtsìve");
  d = r(d, '(^|="|>)Say hi\.(?=($|"|<))', "$1"+"Kaltxì si");
  d = r(d, '(^|="|>)Birthdays(?=($|"|<))', "$1"+"Ayftxozä");
  d = r(d, '(^|="|>)Acquaintences(?=($|"|<))', "$1"+"Súte");
  d = r(d, '(^|="|>)Birthday(?=($|"|<))', "$1"+"Sngä'itrr");
  d = r(d, '(^|="|>)Languages(?=($|"|<))', "$1"+"Aylì'fya");
  d = r(d, '(^|="|>)Notes(?=($|"|<))', "$1"+"Famreltsyìp");
  d = r(d, '(^|="|>)Terms(?=($|"|<))', "$1"+"Lawa Aylì'u");
  d = r(d, '(^|="|>)Timeline(?=($|"|<))', "$1"+"KrrPayfya");
  d = r(d, '(^|="|>)May(?=($|"|<))', "$1"+"Mrrvea vospxì");
  d = r(d, '(^|="|>)June(?=($|"|<))', "$1"+"Puvea vospxì");
  d = r(d, '(^|="|>)July(?=($|"|<))', "$1"+"Kivea vospxì");
  d = r(d, '(^|="|>)Birthday:(?=($|"|<))', "$1"+"Ftxozä:");
  d = r(d, '(^|="|>)Subscribed(?=($|"|<))', "$1"+"Tsere'a");
  d = r(d, '(^|="|>)Founded(?=($|"|<))', "$1"+"Sngä'ikrr");
  d = r(d, '(^|="|>)Message(?=($|"|<))', "$1"+"'Upxare si");
  d = r(d, '(^|="|>)Niece(?=($|"|<))', "$1"+"Tsmukä 'ite");
  d = r(d, '(^|="|>)APPS(?=($|"|<))', "$1"+"Tìkangkemvi");
  d = r(d, '(^|="|>)Message:(?=($|"|<))', "$1"+"'Upxare:");
  d = r(d, '(^|="|>)Questions(?=($|"|<))', "$1"+"Sìpawm");
  d = r(d, '(^|="|>)Status(?=($|"|<))', "$1"+"Tìfkeytok");
  d = r(d, '(^|="|>)Tuesday(?=($|"|<))', "$1"+"Trrpxeyve");
  d = r(d, '(^|="|>)Thursday(?=($|"|<))', "$1"+"Trrmrrve");
  d = r(d, '(^|="|>)Status(?=($|"|<))', "$1"+"Tìfkeytok");
  d = r(d, '(^|="|>)Email(?=($|"|<))', "$1"+"Ikran lì'u");
  d = r(d, '(^|="|>)Remove\.\.\.(?=($|"|<))', "$1"+"'Aku");
  d = r(d, '(^|="|>)About you(?=($|"|<))', "$1"+"Ngateri");
  d = r(d, '(^|="|>)Only me(?=($|"|<))', "$1"+"Nì'aw oe");
  d = r(d, '(^|="|>)Husband(?=($|"|<))', "$1"+"Muntxatan");
  d = r(d, '(^|="|>)Video(?=($|"|<))', "$1"+"Rusikxa Rel");
  d = r(d, '(^|="|>)Sponsored(?=($|"|<))', "$1"+"Awneyk");
  d = r(d, '(^|="|>)Saturday(?=($|"|<))', "$1"+"Trrkive");
  d = r(d, '(^|="|>)Where\\?(?=($|"|<))', "$1"+"Peseng?");
  d = r(d, '(^|="|>)Children:(?=($|"|<))', "$1"+"Eveng:");
  d = r(d, '(^|="|>)Website(?=($|"|<))', "$1"+"Kelutral");
  d = r(d, '(^|="|>)Careers(?=($|"|<))', "$1"+"Tintìn");
  d = r(d, '(^|="|>)Messages(?=($|"|<))', "$1"+"Upxare");
  d = r(d, '(^|="|>)Yesterday(?=($|"|<))', "$1"+"Trram");
  d = r(d, '(^|="|>)Sunday(?=($|"|<))', "$1"+"Trr'awve");
  d = r(d, '(^|="|>)Facebook(?=($|"|<))', "$1"+"Keypuk");
  d = r(d, '(^|="|>)Brother(?=($|"|<))', "$1"+"Tsmukan");
  d = r(d, '(^|="|>)Born(?=($|"|<))', "$1"+"'Amongokx");
  d = r(d, '(^|="|>)Comment(?=($|"|<))', "$1"+"Plltxe");
  d = r(d, '(^|="|>)Not Now(?=($|"|<))', "$1"+"Ke set");
  d = r(d, '(^|="|>)Unlike(?=($|"|<))', "$1"+"Ke sunu");
  d = r(d, '(^|="|>)Monday(?=($|"|<))', "$1"+"Trrmuve");
  d = r(d, '(^|="|>)Friday(?=($|"|<))', "$1"+"Trrpuve");
  d = r(d, '(^|="|>)Tomorrow(?=($|"|<))', "$1"+"Trray");
  d = r(d, '(^|="|>)Mission(?=($|"|<))', "$1"+"Tìkan");
  d = r(d, '(^|="|>)Download(?=($|"|<))', "$1"+"Kanom");
  d = r(d, '(^|="|>)Invited(?=($|"|<))', "$1"+"Vawnin");
  d = r(d, '(^|="|>)Hosts(?=($|"|<))', "$1"+"Frrfenyu");
  d = r(d, '(^|="|>)Where(?=($|"|<))', "$1"+"Petsenge");
  d = r(d, '(^|="|>)Close(?=($|"|<))', "$1"+"Tstu si");
  d = r(d, '(^|="|>)Events(?=($|"|<))', "$1"+"Sìlen");
  d = r(d, '(^|="|>)Friends(?=($|"|<))', "$1"+"Eylan");
  d = r(d, '(^|="|>)FRIENDS(?=($|"|<))', "$1"+"EYLAN");
  d = r(d, '(^|="|>)Home(?=($|"|<))', "$1"+"Kelutral");
  d = r(d, '(^|="|>)Links(?=($|"|<))', "$1"+"Ayfya'o");
  d = r(d, '(^|="|>)Map(?=($|"|<))', "$1"+"Atxkxerel");
  d = r(d, '(^|="|>)Music(?=($|"|<))', "$1"+"Pamtseo");
  d = r(d, '(^|="|>)Pokes(?=($|"|<))', "$1"+"Awnampi");
  d = r(d, '(^|="|>)Friends(?=($|"|<))', "$1"+"Eylan");
  d = r(d, '(^|="|>)Wife(?=($|"|<))', "$1"+"Muntxate");
  d = r(d, '(^|="|>)Sister(?=($|"|<))', "$1"+"Tsmuke");
  d = r(d, '(^|="|>)Father(?=($|"|<))', "$1"+"Sempul");
  d = r(d, '(^|="|>)Mother(?=($|"|<))', "$1"+"Sa'nok");
  d = r(d, '(^|="|>)Going(?=($|"|<))', "$1"+"Kerayä");
  d = r(d, '(^|="|>)Cancel(?=($|"|<))', "$1"+"Ftang");
  d = r(d, '(^|="|>)Family(?=($|"|<))', "$1"+"Soaia");
  d = r(d, '(^|="|>)GROUPS(?=($|"|<))', "$1"+"FONGU");
  d = r(d, '(^|="|>)Groups(?=($|"|<))', "$1"+"Fongu");
  d = r(d, '(^|="|>)PAGES(?=($|"|<))', "$1"+"Ayrìk");
  d = r(d, '(^|="|>)Photos(?=($|"|<))', "$1"+"Ayrel");
  d = r(d, '(^|="|>)Place(?=($|"|<))', "$1"+"Tsenge");
  d = r(d, '(^|="|>)Places(?=($|"|<))', "$1"+"Senge");
  d = r(d, '(^|="|>)SORT(?=($|"|<))', "$1"+"WÌNTXU");
  d = r(d, '(^|>)status(?=($|<))', "$1"+"tìfkeytok");
  d = r(d, '(^|="|>)Female(?=($|"|<))', "$1"+"Tuté");
  d = r(d, '(^|="|>)Today(?=($|"|<))', "$1"+"Fìtrr");
  d = r(d, '(^|="|>)Info(?=($|"|<))', "$1"+"Säomum");
  d = r(d, '(^|="|>)Games(?=($|"|<))', "$1"+"Ayuvan");
  d = r(d, '(^|="|>)Report(?=($|"|<))', "$1"+"Kulat");
  d = r(d, '(^|="|>)until(?=($|"|<))', "$1"+"vaykrr");
  d = r(d, '(^|="|>)Log Out(?=($|"|<))', "$1"+"Hum");
  d = r(d, '(^|="|>)More(?=($|"|<))', "$1"+"Nì'ul");
  d = r(d, '(^|="|>)MORE(?=($|"|<))', "$1"+"NÌ'UL");
  d = r(d, '(^|="|>)Search(?=($|"|<))', "$1"+"Fwew");
  d = r(d, '(^|="|>)Maybe(?=($|"|<))', "$1"+"Kxawm");
  d = r(d, '(^|="|>)Remove(?=($|"|<))', "$1"+"'Aku");
  d = r(d, '(^|="|>)Poke (?=($|"|<))', "$1"+"'Ampi");
  d = r(d, '(^|="|>)Women(?=($|"|<))', "$1"+"Suté");
  d = r(d, '(^|="|>)Actions(?=($|"|<))', "$1"+"Hem");
  d = r(d, '(^|="|>)Archive(?=($|"|<))', "$1"+"Wan");
  d = r(d, '(^|="|>)About(?=($|"|<))', "$1"+"Teri");
  d = r(d, '(^|="|>)Help(?=($|"|<))', "$1"+"Srung");
  d = r(d, '(^|="|>)Male(?=($|"|<))', "$1"+"Tutan");
  d = r(d, '(^|="|>)Wall(?=($|"|<))', "$1"+"'Awkx");
  d = r(d, '(^|="|>)Edit(?=($|"|<))', "$1"+"Latem");
  d = r(d, '(^|="|>)I am(?=($|"|<))', "$1"+"Oe lu");
  d = r(d, '(^|="|>)Invite(?=($|"|<))', "$1"+"Vin");
  d = r(d, '(^|="|>)When(?=($|"|<))', "$1"+"Pehrr");
  d = r(d, '(^|="|>)Like(?=($|"|<))', "$1"+"Sunu");
  d = r(d, '(^|="|>)Photo(?=($|"|<))', "$1"+"Rel");
  d = r(d, '(^|="|>)Yes(?=($|"|<))', "$1"+"Srane");
  d = r(d, '(^|="|>)Books(?=($|"|<))', "$1"+"Fuk");
  d = r(d, '(^|="|>)via(?=($|"|<))', "$1"+"ìlä");
  d = r(d, '(^|="|>)Men(?=($|"|<))', "$1"+"Sutan");
  d = r(d, '(^|="|>)Save(?=($|"|<))', "$1"+"Zong");
  d = r(d, '(^|="|>)All(?=($|"|<))', "$1"+"Frapo");
  d = r(d, '(^|="|>)Post(?=($|"|<))', "$1"+"Yem");
  d = r(d, '(^|="|>)Time(?=($|"|<))', "$1"+"Krr");
  d = r(d, '(^|>)a link(?=($|<))', "$1"+"fya'o");
  d = r(d, '(^|="|>)By:(?=($|"|<))', "$1"+"Fa:");
  d = r(d, '(^|="|>)Now(?=($|"|<))', "$1"+"Set");
  d = r(d, '(^|="|>)No(?=($|"|<))', "$1"+"Kehe");
  d = r(d, '(^|="|>)With(?=($|"|<))', "$1"+"Hu");
  d = r(d, '(^|>)link(?=($|<))', "$1"+"fya'o");
  d = r(d, '(^|>)photo(?=($|<))', "$1"+"rel");
  d = r(d, '(^|>)post(?=($|<))', "$1"+"yem");
  return d;
}

function translateOnInsert( node ) {

  //var logmsg = 'inserted a ' + node.nodeName + ' node; untranslated elements: ';
  for (n = 0; n < tags.length; n++) {
    var tagmatches = node.getElementsByTagName(tags[n]);
    for ( i = 0; i < tagmatches.length; i++ ) {
      // innerHTML often empty (never null)
      if (!tagmatches[i].hasAttribute('indigenous') &&
           tagmatches[i].innerHTML != '') {
        // logmsg = logmsg + tagmatches[i].nodeName + ' ';
        tagmatches[i].innerHTML = translate(tagmatches[i].innerHTML);
        tagmatches[i].setAttribute('indigenous', true);
      }
    }
  }

  var divs = node.getElementsByTagName('div');
  for (i = 0; i < divs.length; i++ ) {
    if (!divs[i].hasAttribute('indigenous')) {
      for (n = 0; n < divclasses.length; n++) {
        if (divs[i].className == divclasses[n]) {
          // logmsg = logmsg + 'DIV.' + divclasses[n] + ' ';
          divs[i].innerHTML = translate(divs[i].innerHTML);
          divs[i].setAttribute('indigenous', true);
          break;
        }
      }
    }
  }

  var spans = node.getElementsByTagName('span');
  for (i = 0; i < spans.length; i++ ) {
    if (!spans[i].hasAttribute('indigenous')) {
      for (n = 0; n < spanclasses.length; n++) {
        if (spans[i].className == spanclasses[n]) {
          // logmsg = logmsg + 'SPAN.' + spanclasses[n] + ' ';
          spans[i].innerHTML = translate(spans[i].innerHTML);
          spans[i].setAttribute('indigenous', true);
          break;
        }
      }
    }
  }
  // GM_log(logmsg);
}

// This is (only) needed to handle updates to time stamps
function listen_for_change(evt)
{
  var node = evt.target;
  //GM_log('in change node, data='+node.data+'; was='+evt.prevValue);
  document.body.removeEventListener( 'DOMCharacterDataModified', listen_for_change, false );
  node.data = translate(node.data);
  document.body.addEventListener( 'DOMCharacterDataModified', listen_for_change, false );
}

function listen_for_add(evt)
{
  var node = evt.target;
  if (node.nodeType == document.ELEMENT_NODE &&
      node.nodeName != 'SCRIPT' &&
      node.nodeName != 'INPUT') {
    document.body.removeEventListener( 'DOMNodeInserted', listen_for_add, false );
    translateOnInsert(node);
    document.body.addEventListener( 'DOMNodeInserted', listen_for_add, false );
  }
}

function initme()
{
  document.body.addEventListener( 'DOMNodeInserted', listen_for_add, false );
  document.body.addEventListener( 'DOMCharacterDataModified', listen_for_change, false );
  document.body.innerHTML = translate(document.body.innerHTML);
}

document.addEventListener( "DOMContentLoaded", initme, false);
