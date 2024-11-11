;/*FB_PKG_DELIM*/

__d("IGDSStandardMegaphone",["IGDSBox.react","IGDSText.react","PolarisIGCoreBox","PolarisIGCoreMegaphoneHelper.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.render=function(){var a,b=d("PolarisIGCoreMegaphoneHelper.react").getRootBoxProps(this.props.position,this.props.color);return i.jsxs(c("PolarisIGCoreBox"),babelHelpers["extends"]({border:this.props.border},b,{shape:this.props.shape,width:(a=this.props.width)!=null?a:b.width,children:[this.props.onDismiss&&i.jsx(d("PolarisIGCoreMegaphoneHelper.react").IGCoreMegaphoneDismiss,{onClick:this.props.onDismiss}),i.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"column",position:"relative",wrap:!1,children:[this.props.icon!=null&&i.jsx(c("IGDSBox.react"),{height:56,position:"relative",shape:"circle",width:56,children:this.props.icon}),i.jsxs(c("IGDSBox.react"),{direction:"column",marginTop:this.props.icon!=null?3:0,position:"relative",width:this.props.bodyWidth!=null?this.props.bodyWidth:288,children:[i.jsx(c("IGDSBox.react"),{display:"block",marginBottom:3,position:"relative",children:i.jsx(c("IGDSText.react").BodyEmphasized,{color:this.props.color==="dark"?"webAlwaysWhite":"primaryText",textAlign:"center",children:this.props.title})}),i.jsx(c("IGDSText.react").Body,{color:"secondaryText",textAlign:"center",children:this.props.body})]}),i.jsx(c("IGDSBox.react"),{direction:"column",marginStart:0,marginTop:0,position:"relative",width:288,children:this.props.children}),i.jsx(c("IGDSBox.react"),{marginTop:4,width:130,children:this.props.button})]})]}))};return b}(i.Component);a.defaultProps={border:!1,color:"primary",position:"top"};g["default"]=a}),98);
__d("PolarisNavigationDispatchers.react",["PolarisNavigationActions","PolarisReactRedux.react","polarisNavigationSelectors","react","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.unstable_useMemoCache;function a(a,b){var e=j(7),f=d("PolarisReactRedux.react").useDispatch(),g=d("PolarisReactRedux.react").useSelector(d("polarisNavigationSelectors").getPageViewCount),h=c("usePolarisViewer")(),k,l;e[0]!==f||e[1]!==h||e[2]!==a||e[3]!==b||e[4]!==g?(k=function(){f(d("PolarisNavigationActions").incrementNewPageViewCount(h,a,b,g))},l=[f,b,a,g,h],e[0]=f,e[1]=h,e[2]=a,e[3]=b,e[4]=g,e[5]=k,e[6]=l):(k=e[5],l=e[6]);i(k,l)}g.useIncrementNewPageViewCount=a}),98);
__d("PolarisTagPageHeader.react",["cx","fbt","IGDSBox.react","IGDSText.react","PolarisAvatarWithStoriesContainer.react","PolarisHashtagLink.react","PolarisTagAvatar.react","PolarisTagFollowButton.react","PolarisUA","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).unstable_useMemoCache,l=j,m=7,n=3;function a(a){var b=k(50),e=a.id,f=a.isFollowingEnable,g=a.isSmallScreen,h=a.postCount,j=a.profilePictureUrl,o=a.relatedTags;a=a.tagName;var p=f?g?n:m:0;g=g?77:152;var q;b[0]!==f?(q=d("PolarisUA").isDesktop()||!f,b[0]=f,b[1]=q):q=b[1];q=q;var r;b[2]!==f?(r="_aaa0"+(f?" _aaa1":"")+(d("PolarisUA").isDesktop()?" _aaa2":""),b[2]=f,b[3]=r):r=b[3];var s;b[4]!==f?(s="_aaa3"+(f?" _aaa4":""),b[4]=f,b[5]=s):s=b[5];var t;b[6]!==j||b[7]!==g||b[8]!==a?(t=l.jsx(c("PolarisTagAvatar.react"),{isLink:!1,profilePictureUrl:j,size:g,tagName:a}),b[6]=j,b[7]=g,b[8]=a,b[9]=t):t=b[9];b[10]!==g||b[11]!==a||b[12]!==t?(j=l.jsx(c("PolarisAvatarWithStoriesContainer.react"),{animateOnLoad:!0,entrypoint:"reel_hashtag",size:g,tagName:a,children:t}),b[10]=g,b[11]=a,b[12]=t,b[13]=j):j=b[13];b[14]!==s||b[15]!==j?(g=l.jsx("div",{className:s,"data-testid":void 0,children:j}),b[14]=s,b[15]=j,b[16]=g):g=b[16];b[17]===Symbol["for"]("react.memo_cache_sentinel")?(t="_aaa5",b[17]=t):t=b[17];s=!f;b[18]!==s||b[19]!==f?(j="_aaa6"+(s?" _aaa7":"")+(f?" _aaa8":""),b[18]=s,b[19]=f,b[20]=j):j=b[20];b[21]!==q||b[22]!==a?(s=q&&l.jsx(c("IGDSBox.react"),{marginBottom:3,position:"relative",children:l.jsxs(c("IGDSText.react"),{size:"headline1",children:["#",a]})}),b[21]=q,b[22]=a,b[23]=s):s=b[23];b[24]!==p||b[25]!==h?(q=l.jsx(c("IGDSBox.react"),{marginBottom:p,position:"relative",children:h}),b[24]=p,b[25]=h,b[26]=q):q=b[26];b[27]!==f||b[28]!==e||b[29]!==a?(p=f&&l.jsx(c("PolarisTagFollowButton.react"),{id:e,loggingClickPoint:"hashtag_header",loggingContainerModule:"feed_hashtag",tagName:a}),b[27]=f,b[28]=e,b[29]=a,b[30]=p):p=b[30];b[31]!==j||b[32]!==s||b[33]!==q||b[34]!==p?(h=l.jsxs("div",{className:j,children:[s,q,p]}),b[31]=j,b[32]=s,b[33]=q,b[34]=p,b[35]=h):h=b[35];b[36]!==o?(f=o&&o.length>0&&(d("PolarisUA").isMobile()?null:l.jsx(c("IGDSBox.react"),{direction:"row",display:"flex",flex:"grow",marginStart:12,marginTop:4,position:"relative",wrap:!0,children:l.jsxs(c("IGDSText.react"),{breakWord:!0,children:[l.jsx(c("IGDSText.react").Body,{color:"secondaryText",children:i._("__JHASH__3haktmrvW9m__JHASH__")})," ",l.jsx(c("IGDSText.react").Body,{children:o.map(function(a){return l.jsx(c("IGDSBox.react"),{display:"inlineBlock",paddingY:1,position:"relative",wrap:!0,children:l.jsx(c("PolarisHashtagLink.react"),{className:"_aaa9",tag:a})},a)})})]})})),b[36]=o,b[37]=f):f=b[37];b[38]!==h||b[39]!==f?(e=l.jsxs("div",{className:t,children:[h,f]}),b[38]=h,b[39]=f,b[40]=e):e=b[40];b[41]!==r||b[42]!==g||b[43]!==e?(a=l.jsxs("header",{className:r,children:[g,e]}),b[41]=r,b[42]=g,b[43]=e,b[44]=a):a=b[44];b[45]!==o?(j=d("PolarisUA").isMobile()&&o&&o.length>0&&l.jsx(c("IGDSBox.react"),{direction:"row",display:"flex",flex:"grow",marginBottom:2,marginStart:4,overflow:"scrollX",paddingY:2,position:"relative",wrap:!0,children:l.jsxs(c("IGDSText.react"),{textAlign:"center",children:[l.jsx(c("IGDSText.react").Body,{color:"secondaryText",children:i._("__JHASH__Q0J1umK7HFi__JHASH__")})," ",l.jsx(c("IGDSText.react").Body,{children:o.map(function(a){return l.jsx(c("IGDSBox.react"),{display:"inlineBlock",paddingY:1,position:"relative",wrap:!0,children:l.jsx(c("PolarisHashtagLink.react"),{className:"_aaa9",tag:a})},a)})})]})}),b[45]=o,b[46]=j):j=b[46];b[47]!==a||b[48]!==j?(s=l.jsxs(l.Fragment,{children:[a,j]}),b[47]=a,b[48]=j,b[49]=s):s=b[49];return s}g["default"]=a}),226);
__d("PolarisHashtagAPI",["PolarisInstapi"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){e={include_persistent:"0",max_id:e,next_media_ids:c,page:String(b),surface:"grid",tab:"recent"};return d("PolarisInstapi").apiPost("/api/v1/tags/{tag_name}/sections/",{body:e,path:{tag_name:a}}).then(function(a){return a.data})}g.fetchHashtagMedia=a}),98);
__d("PolarisTagMediaActions",["PolarisGenericStrings","PolarisHashtagAPI","PolarisLegacyGraphQLPaginationUtils","PolarisPaginationUtils","PolarisPostModel","PolarisTagMediaActionConstants","PolarisUserModel","nullthrows","polarisGetHashtagMediaFromNativeHashtag","polarisNormalizeMediaDicts"],(function(a,b,c,d,e,f,g){"use strict";a=0;b="6658299264239722";var h=d("PolarisLegacyGraphQLPaginationUtils").generatePaginationActionCreators({getState:function(a,b){a=c("nullthrows")(a.tagMedia.byTagName[b]);return a.pagination},onError:function(a,b,c,e){return{err:a,fetch:b,tagName:c,toast:{actionHandler:e,actionText:d("PolarisGenericStrings").RETRY_TEXT,text:d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT},type:"TAG_MEDIA_ERRORED"}},onUpdate:function(a,b,d){var e,f,g=[];if(b){e=c("nullthrows")(b.hashtag);b=c("nullthrows")(e.edge_hashtag_to_media||e.edge_hashtag_to_ranked_media);g=(b.edges||[]).map(function(a){return a.node});f=b.page_info}return{fetch:a,media:g,pageInfo:f,tagData:e,tagName:d,type:"TAG_MEDIA_UPDATED"}},pageSize:d("PolarisTagMediaActionConstants").PAGE_SIZE,pagesToPreload:a,queryId:b,queryParams:function(a){return{tag_name:a}}});function i(a){return function(b){var c=function(){return b(i(a))};return b(h.next(a,c))}}function j(a){return function(b){var c=function(){return b(j(a))};return b(k(a,c))}}function k(a,b){return function(e,f){f=f();var g=f.tagMedia;f=f.tags;f=f[a];g=g.byTagName[a];if(f==null||g==null)return;var h=g.pagination,i=d("PolarisPaginationUtils").getVisibleCount(h),j=d("PolarisPaginationUtils").getLoadedCount(h);if(h!=null&&i<j)return e({posts:[],prevPagination:h,tagData:null,tagName:a,type:"TAG_MEDIA_UPDATED_V2",users:[]});i=d("PolarisPaginationUtils").getEndCursor(h);j=d("PolarisPaginationUtils").hasNextPage(h);var k=g.nextMediaIds||[];g=g.nextPage;if(h==null||g==null||j==null||i==null||f.isLoading)return;e({tagName:a,type:"TAG_MEDIA_LOADING_V2"});d("PolarisHashtagAPI").fetchHashtagMedia(a,g,k,i).then(function(b){var f=d("polarisNormalizeMediaDicts").normalizeMediaDicts(d("polarisGetHashtagMediaFromNativeHashtag").getMediaFromSections(b.sections)).entities,g=b!=null&&b.sections!=null&&b.sections.length>0?f.mediaDicts:{},i=(f=f.userDicts)!=null?f:{};return e({posts:[].concat(Object.keys(g).map(function(a){return c("PolarisPostModel").fromNativeResponse(g[a]).toReduxStore()})),prevPagination:h,tagData:{recent:b,top:void 0},tagName:a,type:"TAG_MEDIA_UPDATED_V2",users:[].concat(Object.keys(i).map(function(a){return c("PolarisUserModel").fromNativeResponse(i[a]).toReduxStore()}))})})["catch"](function(c){return e({err:c,tagName:a,toast:{actionHandler:b,actionText:d("PolarisGenericStrings").RETRY_TEXT,text:d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT},type:"TAG_MEDIA_ERRORED_V2"})})}}g.requestNextTagMedia=i;g.requestNextTagMediaV2=j}),98);
__d("polarisLearnMoreText",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__Y7AwjEh0x72__JHASH__");b=a;g["default"]=b}),226);
__d("PolarisTagPageMediaBrowser.react",["cx","fbt","IGDSBox.react","IGDSSpinner.react","IGRouter_DO_NOT_USE.react","InstagramSEOCrawlBot","PolarisAdvisoryMessage.react","PolarisConfig","PolarisExternalLink.react","PolarisIGCoreButton.react","PolarisLinkBuilder","PolarisLoggedOutLoginConstants","PolarisMediaBrowser.react","PolarisNavigationActions","PolarisNavigationUtils","PolarisPaginationUtils","PolarisPostsStatistic.react","PolarisReactRedux.react","PolarisSizing","PolarisTagActions","PolarisTagMediaActionConstants","PolarisTagMediaActions","PolarisUA","isStringNullOrEmpty","nullthrows","polarisLearnMoreText","polarisTagMediaReducer","polarisUserSelectors","react","usePolarisDisplayProperties"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react"));f=j;f.useMemo;var l=f.unstable_useMemoCache;function m(a){var b=l(27),d=a.advisory,e=a.onAcknowledge;a=a.onCancel;var f=null;if(d.contents){if(b[0]!==d.contents){var g;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(a,b){return k.jsx("p",{className:"_aao2",children:a},b)},b[2]=g):g=b[2];g=d.contents.map(g);b[0]=d.contents;b[1]=g}else g=b[1];f=g}g=null;var h=d.url;if(!c("isStringNullOrEmpty")(h)){var j;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(j="_aao3",b[3]=j):j=b[3];var m=d.url_title!=null&&d.url_title!==""?d.url_title:c("polarisLearnMoreText");b[4]!==h||b[5]!==m?(j=k.jsx("p",{className:j,children:k.jsx(c("PolarisExternalLink.react"),{href:h,children:m})}),b[4]=h,b[5]=m,b[6]=j):j=b[6];g=j}b[7]===Symbol["for"]("react.memo_cache_sentinel")?(h="_aao5",b[7]=h):h=b[7];b[8]!==d.title?(m=k.jsx("h2",{className:h,children:d.title}),b[8]=d.title,b[9]=m):m=b[9];b[10]===Symbol["for"]("react.memo_cache_sentinel")?(j="_aao6",b[10]=j):j=b[10];b[11]!==d.show_posts_button_title?(h=d.show_posts_button_title!=null&&d.show_posts_button_title!==""?d.show_posts_button_title:i._("__JHASH__Yffi-JkuWcr__JHASH__"),b[11]=d.show_posts_button_title,b[12]=h):h=b[12];b[13]!==e||b[14]!==h?(d=k.jsx("li",{children:k.jsx(c("PolarisIGCoreButton.react"),{color:"ig-secondary-button",onClick:e,children:h})}),b[13]=e,b[14]=h,b[15]=d):d=b[15];b[16]===Symbol["for"]("react.memo_cache_sentinel")?(e=i._("__JHASH__d9NZSaFST2Q__JHASH__"),b[16]=e):e=b[16];b[17]!==a?(h=k.jsx("li",{children:k.jsx(c("PolarisIGCoreButton.react"),{color:"ig-secondary-button",onClick:a,children:e})}),b[17]=a,b[18]=h):h=b[18];b[19]!==d||b[20]!==h?(e=k.jsxs("ul",{className:j,children:[d,h]}),b[19]=d,b[20]=h,b[21]=e):e=b[21];b[22]!==m||b[23]!==f||b[24]!==g||b[25]!==e?(a=k.jsxs(c("PolarisAdvisoryMessage.react"),{showBorderTop:!0,children:[m,f,g,e]}),b[22]=m,b[23]=f,b[24]=g,b[25]=e,b[26]=a):a=b[26];return a}h=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this,b)||this;c.$1=function(){c.props.onAcknowledgeContentAdvisory(c.getViewerId())};c.$2=function(){window.history.length>2?c.props.history.goBack():c.props.viewer?c.props.history.replace("/"):d("PolarisNavigationUtils").openURL("/")};c.$3=function(a){c.state.viewedPosts.has(a.id)||c.setState(function(b){var c=b.postImpressionsCount;b=b.viewedPosts;return{postImpressionsCount:c+1,viewedPosts:b.add(a.id)}}),c.props.onPostImpression(c.state.postImpressionsCount,c.props.viewer)};c.$4=function(a){!c.props.isFetching&&!c.props.isLoading&&!c.props.isOldestPostLoaded&&(a>d("PolarisTagMediaActionConstants").PAGE_SIZE&&c.props.onRequestNextPage())};c.state={postImpressionsCount:0,viewedPosts:new Set()};return c}var e=b.prototype;e.isSmallScreen=function(){return this.props.viewportWidth<d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF};e.getPhotosComponentRenderer=function(){var a=this,b=this.props,c=b.contentAdvisory;b=b.contentAdvisoryAcknowledged;return c&&!b?function(){return k.jsx(m,{advisory:c,onAcknowledge:a.$1,onCancel:a.$2})}:null};e.getViewerId=function(){return this.props.viewer?this.props.viewer.id:null};e.renderNoTopPostsExplanation=function(){return k.jsx(c("PolarisAdvisoryMessage.react"),{showBorderTop:!0,children:k.jsx("p",{className:"_aao2",children:i._("__JHASH__UhBrhw_zRC6__JHASH__",[i._param("hashtag",this.props.tagName),i._param("link that reads learn more",k.jsx(c("PolarisIGCoreButton.react"),{borderless:!0,href:"https://help.instagram.com/861508690592298",target:"_blank",children:c("polarisLearnMoreText")}))])})},"advisory_message")};e.render=function(){var a;if(this.props.isInitLoad)return k.jsx(c("IGDSBox.react"),{alignSelf:"center",marginTop:15,position:"relative",children:k.jsx(c("IGDSSpinner.react"),{})});var b=!!this.props.contentAdvisory&&!this.props.contentAdvisoryAcknowledged,d=null;b!==!0&&this.props.postCount!=null&&this.props.postCount>=0&&(d=k.jsx(c("PolarisPostsStatistic.react"),{value:this.props.postCount}));b=null;this.props.postCount!=null&&this.props.postCount>0&&this.props.topPosts.length===0&&(b=this.renderNoTopPostsExplanation());var e=this.isSmallScreen();a=((a=this.props.viewer)==null?void 0:a.canFollowHashtag)===!0&&(this.props.allowFollowing||!this.props.viewer&&!this.props.contentAdvisory);return k.jsx(c("PolarisMediaBrowser.react"),{analyticsContext:"tagPage",className:"_aao7",endCursor:this.props.endCursor,isFetching:this.props.isFetching,isOldestPostLoaded:this.props.isOldestPostLoaded,isSmallScreen:e,isTopMediaOnly:!0,loggingData:{entityPageId:this.props.id,entityPageName:this.props.tagName,hashtagName:this.props.tagName},maxPostsToDisplay:this.props.maxPostsToDisplay,noRecentPostExplanation:null,noTopPostExplanation:b,onImpression:this.$3,onIntentClick:this.props.onLoggedOutIntentClickLoginModal,onPostLoadTargetChange:this.$4,photoComponentRenderer:this.getPhotosComponentRenderer(),postCount:!a&&d,posts:this.props.posts,topPosts:this.props.topPosts,viewportWidth:this.props.viewportWidth})};return b}(k.Component);function a(a,b){b=b.tagName;var e=d("polarisUserSelectors").getViewer__DEPRECATED(a),f=c("nullthrows")(a.tags[b]),g=f.advisory,h=f.isLoading,i=Boolean(g&&g.acknowledged),j=d("polarisTagMediaReducer").getVisibleRecentMediaByTagName(a,b),k=d("polarisTagMediaReducer").getPaginationForTagName(a,b);return{allowFollowing:f.allowFollowing,contentAdvisory:g,contentAdvisoryAcknowledged:i,id:f.id,isFetching:k!=null&&d("PolarisPaginationUtils").isFetching(k),isInitLoad:!k&&j.length===0,isLoading:h,isOldestPostLoaded:k!=null?!d("PolarisPaginationUtils").hasNextPage(k):!1,maxPostsToDisplay:j.length,postCount:f.postCount,posts:j,profilePictureUrl:f.profilePictureUrl,tagName:b,topPosts:d("polarisTagMediaReducer").getAllTopMediaByTagName(a,b),viewer:e}}function b(a,b){var e=b.shouldUseNewPaginationFromAPI,f=b.tagName;return{onAcknowledgeContentAdvisory:function(b){a(d("PolarisTagActions").acknowledgeContentAdvisory(f,b))},onLoggedOutIntentClickLoginModal:function(b,c,e){var f=d("PolarisUA").isDesktop()||d("PolarisConfig").isLoggedOutFRXEligible()?"feature_wall":"content_wall";a(d("PolarisNavigationActions").openLoginModal(f,b,c,null,e))},onPostImpression:function(b,e){if(!e&&!c("InstagramSEOCrawlBot").is_allowlisted_crawl_bot&&!d("PolarisConfig").isLoggedOutFRXEligible()){e=d("PolarisConfig").getCountryCode()==="JP"?d("PolarisLoggedOutLoginConstants").LOGGED_OUT_JP_POST_IMPRESSION_LIMIT:d("PolarisLoggedOutLoginConstants").LOGGED_OUT_TAG_POST_IMPRESSION_LIMIT;b>e&&a(d("PolarisNavigationActions").openLoginModal("content_wall",d("PolarisLinkBuilder").buildTagLink(f),"hashtag_posts_impression_limit"))}return},onRequestNextPage:function(){e===!0?a(d("PolarisTagMediaActions").requestNextTagMediaV2(f)):a(d("PolarisTagMediaActions").requestNextTagMedia(f))}}}function e(){var a=l(2),b=c("usePolarisDisplayProperties")();b=b.viewportWidth;var d;a[0]!==b?(d={viewportWidth:b},a[0]=b,a[1]=d):d=a[1];b=d;return b}f=d("IGRouter_DO_NOT_USE.react").withIGRouter(d("PolarisReactRedux.react").connect(a,b)(h));a=d("PolarisReactRedux.react").connectHooks(e)(f);g["default"]=a}),226);
__d("PolarisTagPageMobileNameSection.react",["IGDSBox.react","IGDSDivider.react","IGDSText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(5);a=a.name;var d;b[0]!==a?(d=j.jsx(c("IGDSBox.react"),{alignContent:"center",color:"primaryBackground",padding:4,position:"relative",children:j.jsx(c("IGDSText.react").Section,{textAlign:"center",children:a})}),b[0]=a,b[1]=d):d=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a=j.jsx(c("IGDSDivider.react"),{}),b[2]=a):a=b[2];b[3]!==d?(a=j.jsxs(j.Fragment,{children:[d,a]}),b[3]=d,b[4]=a):a=b[4];return a}g["default"]=a}),98);
__d("PolarisTagSelectors",["PolarisPaginationUtils","nullthrows","polarisUserSelectors"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return function(b){return a.tags[b]}}function a(a){return function(b){b=c("nullthrows")(a.tagMedia.byTagName[b]);return d("PolarisPaginationUtils").hasNextPage(b.pagination)!=null&&b.nextPage!=null}}function b(a){var b=d("polarisUserSelectors").getViewer__DEPRECATED(a);return function(d){d=c("nullthrows")(h(a)(d));var e=d.advisory;d=d.allowFollowing;var f=(b==null?void 0:b.canFollowHashtag)===!0;return f&&(d||!b&&!e)}}g.getTag=h;g.getShouldUseNewPaginationFromAPI=a;g.getShowFollowButton=b}),98);
__d("polarisGetTitleForTag",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return h._("__JHASH__TgbgLecQILG__JHASH__",[h._param("tag_name",a)])}g["default"]=a}),226);
__d("usePolarisOnUnloadTagPage",["PolarisIGWebStorage","PolarisReactRedux.react","PolarisTagActions","react","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.unstable_useMemoCache;function a(a){var b=j(5),e=d("PolarisReactRedux.react").useDispatch(),f=c("usePolarisViewer")(),g,h;b[0]!==a||b[1]!==f||b[2]!==e?(g=function(){return function(){d("PolarisIGWebStorage").removeContentAdvisory(a,f==null?void 0:f.id),e(d("PolarisTagActions").unloadTagPage(a))}},h=[e,a,f],b[0]=a,b[1]=f,b[2]=e,b[3]=g,b[4]=h):(g=b[3],h=b[4]);i(g,h)}g.useOnUnloadTagPage=a}),98);
__d("PolarisTagPage.react",["CAAWebClientLoggingEventSource","IGDSBox.react","IGDSDialogBackwardsCompatibilityWrapper.react","IGDSDivider.react","IGDSStandardMegaphone","PolarisEntityQRModalLazy.react","PolarisGenericMobileHeader.react","PolarisIGCoreMegaphoneHelper.react","PolarisNavBackButton.react","PolarisNavigationDispatchers.react","PolarisNavigationUtils","PolarisPageMetadata.react","PolarisPostsStatistic.react","PolarisReactRedux.react","PolarisShell.react","PolarisSizing","PolarisTagPageHeader.react","PolarisTagPageMediaBrowser.react","PolarisTagPageMobileNameSection.react","PolarisTagSelectors","PolarisUA","cr:4150","nullthrows","polarisGetTitleForTag","polarisNavigationSelectors","react","usePolarisDisplayProperties","usePolarisOnUnloadTagPage","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useState,k=e.unstable_useMemoCache;function a(a){var e,f=k(41),g=a.showQRModal;a=a.tagName;d("PolarisNavigationDispatchers.react").useIncrementNewPageViewCount("hashtag",a);d("usePolarisOnUnloadTagPage").useOnUnloadTagPage(a);var h=c("nullthrows")((e=d("PolarisReactRedux.react")).useSelector(d("PolarisTagSelectors").getTag)(a)),l=h.advisory,m=h.id,n=h.isFollowing,o=h.nullState,p=h.postCount,q=h.profilePictureUrl;h=h.relatedTags;var r=e.useSelector(d("PolarisTagSelectors").getShouldUseNewPaginationFromAPI)(a),s=e.useSelector(d("PolarisTagSelectors").getShowFollowButton)(a);e=e.useSelector(d("polarisNavigationSelectors").getIsLoginModalOpen);var t=c("usePolarisViewer")(),u=c("usePolarisDisplayProperties")();u=u.viewportWidth;g=j(g);var v=g[0],w=g[1];g=u<d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF;u=(u=l==null?void 0:l.acknowledged)!=null?u:!1;l=l&&!u;var x=null;if(l!==!0&&p!=null&&p>=0){f[0]!==p?(l=i.jsx(c("PolarisPostsStatistic.react"),{value:p}),f[0]=p,f[1]=l):l=f[1];x=l}f[2]===Symbol["for"]("react.memo_cache_sentinel")?(p=i.jsx(c("PolarisNavBackButton.react"),{}),f[2]=p):p=f[2];l="#"+a;f[3]!==l?(p=i.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:p,title:l}),f[3]=l,f[4]=p):p=f[4];f[5]!==a?(l=c("polarisGetTitleForTag")(a),f[5]=a,f[6]=l):l=f[6];var y;f[7]!==l?(y=i.jsx(c("PolarisPageMetadata.react"),{id:"tagPage",skipAppTitleBreadcrumb:!0,title:l}),f[7]=l,f[8]=y):y=f[8];f[9]!==o||f[10]!==u?(l=o!=null&&u&&i.jsxs(c("IGDSBox.react"),{border:!d("PolarisUA").isMobile(),color:d("PolarisUA").isMobile()?"secondaryBackground":"primaryBackground",marginEnd:d("PolarisUA").isMobile()?void 0:"auto",marginStart:d("PolarisUA").isMobile()?void 0:"auto",marginTop:d("PolarisUA").isMobile()?0:8,position:"relative",width:d("PolarisUA").isMobile()?void 0:d("PolarisSizing").SITE_WIDTHS.wide,children:[i.jsx(c("IGDSStandardMegaphone"),{body:o.body,bodyWidth:"auto",color:d("PolarisUA").isMobile()?"secondary":"primary",title:o.title,children:i.jsx(d("PolarisIGCoreMegaphoneHelper.react").IGCoreMegaphoneAction,{onClick:function(){d("PolarisNavigationUtils").openExternalURL(o.link)},type:o.emphasized?"primary":"secondary",children:o.action})}),d("PolarisUA").isMobile()&&i.jsx(c("IGDSDivider.react"),{})]}),f[9]=o,f[10]=u,f[11]=l):l=f[11];f[12]!==t||f[13]!==a?(u=d("PolarisUA").isMobile()&&!t&&i.jsx(c("PolarisTagPageMobileNameSection.react"),{name:"#"+a}),f[12]=t,f[13]=a,f[14]=u):u=f[14];f[15]!==m||f[16]!==n||f[17]!==s||f[18]!==g||f[19]!==x||f[20]!==q||f[21]!==h||f[22]!==a?(t=i.jsx(c("PolarisTagPageHeader.react"),{id:m,isFollowing:n,isFollowingEnable:s,isSmallScreen:g,postCount:x,profilePictureUrl:q,relatedTags:h,tagName:a}),f[15]=m,f[16]=n,f[17]=s,f[18]=g,f[19]=x,f[20]=q,f[21]=h,f[22]=a,f[23]=t):t=f[23];f[24]!==r||f[25]!==a?(m=i.jsx(c("PolarisTagPageMediaBrowser.react"),{shouldUseNewPaginationFromAPI:r,tagName:a}),f[24]=r,f[25]=a,f[26]=m):m=f[26];f[27]!==e?(n=e&&b("cr:4150")!=null&&i.jsx(b("cr:4150"),{dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.HASHTAG,triggeringPageType:"hashtag"}),f[27]=e,f[28]=n):n=f[28];f[29]!==v||f[30]!==a?(s=v&&i.jsx(c("IGDSDialogBackwardsCompatibilityWrapper.react"),{children:i.jsx(c("PolarisEntityQRModalLazy.react"),{entityID:a,onClose:function(){return w(!1)},source:"DIRECT_NAVIGATION"})}),f[29]=v,f[30]=a,f[31]=s):s=f[31];f[32]!==p||f[33]!==y||f[34]!==l||f[35]!==u||f[36]!==t||f[37]!==m||f[38]!==n||f[39]!==s?(g=i.jsxs(c("PolarisShell.react"),{mobileHeader:p,pageIdentifier:"tagPage",children:[y,l,u,t,m,n,s]}),f[32]=p,f[33]=y,f[34]=l,f[35]=u,f[36]=t,f[37]=m,f[38]=n,f[39]=s,f[40]=g):g=f[40];return g}g["default"]=a}),98);
__d("usePolarisExploreTagNameOrRedirect",["browserHistory_DO_NOT_USE","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.unstable_useMemoCache;function a(a){var b,c=j(3),e=(b=(b=a.data)==null?void 0:b.name)!=null?b:(b=a.data)==null?void 0:(a=b.hashtag)==null?void 0:a.name;c[0]!==e?(b=function(){e==null&&d("browserHistory_DO_NOT_USE").redirect("/")},a=[e],c[0]=e,c[1]=b,c[2]=a):(b=c[1],a=c[2]);i(b,a);return e}g["default"]=a}),98);
__d("usePolarisExploreTagsLoggedInSetup",["PolarisExploreActions","usePolarisExploreTagNameOrRedirect","usePolarisGetQuery","usePolarisGetQueryResponse","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=c("usePolarisGetQuery")("/api/v1/tags/web_info/",{query:{tag_name:a}});c("usePolarisGetQuerySetup")(a,d("PolarisExploreActions").setupExploreTagsLoggedInPage);a=c("usePolarisGetQueryResponse")(a);return c("usePolarisExploreTagNameOrRedirect")(a)}g["default"]=a}),98);
__d("usePolarisExploreTagsLoggedOutSetup",["PolarisExploreActions","usePolarisExploreTagNameOrRedirect","usePolarisGetQuery","usePolarisGetQueryResponse","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=c("usePolarisGetQuery")("/api/v1/tags/logged_out_web_info/",{query:{tag_name:a}});c("usePolarisGetQuerySetup")(a,d("PolarisExploreActions").setupExploreTagsLoggedOutPage);a=c("usePolarisGetQueryResponse")(a);return c("usePolarisExploreTagNameOrRedirect")(a)}g["default"]=a}),98);
__d("PolarisExploreTagsRoot.react",["PolarisConfig","PolarisTagPage.react","react","usePolarisExploreTagsLoggedInSetup","usePolarisExploreTagsLoggedOutSetup"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function k(a){var b=i(3);a=a.props;var d=a.routeParams;a=a.routeProps;d=d.tag_name;a=a.show_qr_modal;d=c("usePolarisExploreTagsLoggedInSetup")(d);if(d==null)return null;var e;b[0]!==a||b[1]!==d?(e=j.jsx(c("PolarisTagPage.react"),{showQRModal:a,tagName:d}),b[0]=a,b[1]=d,b[2]=e):e=b[2];return e}function l(a){var b=i(3);a=a.props;var d=a.routeParams;a=a.routeProps;d=d.tag_name;a=a.show_qr_modal;d=c("usePolarisExploreTagsLoggedOutSetup")(d);if(d==null)return null;var e;b[0]!==a||b[1]!==d?(e=j.jsx(c("PolarisTagPage.react"),{showQRModal:a,tagName:d}),b[0]=a,b[1]=d,b[2]=e):e=b[2];return e}function a(a){var b=i(2),c;b[0]!==a?(c=d("PolarisConfig").isLoggedIn()?j.jsx(k,babelHelpers["extends"]({},a)):j.jsx(l,babelHelpers["extends"]({},a)),b[0]=a,b[1]=c):c=b[1];return c}g["default"]=a}),98);