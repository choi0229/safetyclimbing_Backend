"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[476],{7282:function(t,e,n){n.d(e,{A:function(){return c}});var a=n(6768);const o={id:"mobileFooter"};var i={__name:"MobileFooterView3",setup(t){function e(){window.location.href="/mobilemainview"}function n(){window.location.href="/mobilecourseview"}function i(){window.location.href="/mobilecommunity"}function l(){window.location.href="/complaintListMobile"}function s(){window.location.href="/record"}return(t,c)=>((0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",{class:"footer-category",onClick:c[0]||(c[0]=t=>n()),style:{"margin-right":"10px"}},c[5]||(c[5]=[(0,a.Lk)("img",{src:"/images/코스2.png",alt:"코스 아이콘",style:{filter:"grayscale(100%) brightness(0%)"}},null,-1),(0,a.Lk)("p",{style:{}},"코스",-1)])),(0,a.Lk)("div",{class:"footer-category",onClick:c[1]||(c[1]=t=>s()),style:{"margin-right":"10px"}},c[6]||(c[6]=[(0,a.Lk)("img",{src:"/images/HikingIcon.gif",alt:"등산 아이콘",style:{filter:"hue-rotate(280deg)",width:"45px",height:"45px"}},null,-1),(0,a.Lk)("p",{style:{}},"등산",-1)])),(0,a.Lk)("div",{class:"footer-category home",onClick:c[2]||(c[2]=t=>e())},c[7]||(c[7]=[(0,a.Lk)("img",{src:"/images/홈.png",alt:"홈 아이콘",style:{filter:"grayscale(100%) brightness(0%)"}},null,-1),(0,a.Lk)("p",{style:{}},"홈",-1)])),(0,a.Lk)("div",{class:"footer-category",onClick:c[3]||(c[3]=t=>l()),style:{"margin-left":"10px"}},c[8]||(c[8]=[(0,a.Lk)("img",{src:"/images/위험신고.png",alt:"민원 신고 아이콘",style:{filter:"grayscale(100%) brightness(0%)"}},null,-1),(0,a.Lk)("p",{style:{}},"민원신고",-1)])),(0,a.Lk)("div",{class:"footer-category",onClick:c[4]||(c[4]=t=>i()),style:{"margin-left":"10px"}},c[9]||(c[9]=[(0,a.Lk)("img",{src:"/images/커뮤니티.png",alt:"커뮤니티 아이콘",style:{filter:"grayscale(100%) brightness(0%)"}},null,-1),(0,a.Lk)("div",{style:{margin:"0","font-size":"13px","line-height":"1.2","text-align":"center"}},"커뮤니티",-1)]))]))}},l=n(1241);const s=(0,l.A)(i,[["__scopeId","data-v-43785973"]]);var c=s},5095:function(t,e,n){n.r(e),n.d(e,{default:function(){return K}});n(4114);var a=n(6768),o=n(4232),i=n(9126),l=n(7282),s=n(144),c=n(4373),r=n(876);const m={class:"container"},d={class:"btn-group-container"},k={class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},u={class:"record-summary",style:{"margin-top":"60px","margin-bottom":"70px","margin-left":"7px"}},p={class:"image-container-wrapper"},g={class:"scrollable-content"},f={class:"community-item"},y={class:"title-container"},h={class:"title-text"},L=["onClick"],v={class:"image-map-container"},b=["src"],w=["id","onClick"],C={key:2,class:"info-overlay"},x={class:"d-flex justify-content-between",style:{"border-bottom":"solid 1px black","margin-bottom":"3px"}},_={class:"d-flex"},I={class:"d-flex align-items-center me-2"},E=["onClick"],M={class:"like-count ms-1"},A={class:"d-flex align-items-center me-2"},X={class:"comment-count ms-1"},P={class:"community-date",style:{"margin-top":"3px","font-size":"14px"}},F={class:"d-flex align-items-center ms-2",style:{"margin-bottom":"10px","margin-top":"5px"}},N=["src"],Q={class:"text-muted me-2",id:"userNickName"},U={class:"card-text",id:"cardContent"};var j={__name:"MyCommunity",setup(t){const e=(t,e)=>{r.A.push({path:"/mapdetail",query:{lat:t,lng:e}})};function n(t,e,n){const a=document.getElementById(t);if(!a)return void console.error(`Element with ID ${t} not found`);const o={center:new kakao.maps.LatLng(e,n),level:5},i=new kakao.maps.Map(a,o),l=new kakao.maps.LatLng(e,n),s=new kakao.maps.Marker({position:l});s.setMap(i)}const j=(0,s.KR)([]);(0,a.sV)((()=>{const t=document.createElement("script");t.onload=()=>{kakao.maps.load((()=>{B()}))},t.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=333bda7da18df138fb4d9b3e5cf351c4&autoload=false&libraries=clusterer,services",document.head.appendChild(t)}));const B=async()=>{console.log("get 실행");try{const t=await c.A.get("/api/communityList");j.value=t.data.map((t=>({...t,showMap:!0,showInfo:!1,likeCount:t.likeCount||0,commentCount:t.commentCount||0,lat:t.lat||t.latitude,lng:t.lng||t.longitude}))),console.log(t.data),await(0,a.dY)(),j.value.forEach((t=>{const e=`map-${t.communityPk}`;n(e,t.lat,t.lng)}))}catch(t){console.log(t)}},D=async t=>{if(t.showInfo=!t.showInfo,t.showMap=!t.showMap,t.showMap){await(0,a.dY)();const e=`map-${t.communityPk}`;n(e,t.lat,t.lng)}},K=t=>{const e=j.value.find((e=>e.communityPk===t));e&&(e.liked=!e.liked,e.liked?e.likeCount++:e.likeCount--)};function $(){r.A.push({path:"/record"})}function z(){r.A.push({path:"/recordImg"})}return(t,n)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",m,[(0,a.bF)(i.A,{class:"header"}),(0,a.Lk)("div",d,[(0,a.Lk)("div",k,[(0,a.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",onClick:n[0]||(n[0]=t=>$())}),n[2]||(n[2]=(0,a.Lk)("label",{class:"btn btn-outline-success",for:"btnradio1"},"운동",-1)),(0,a.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off",onClick:n[1]||(n[1]=t=>z())}),n[3]||(n[3]=(0,a.Lk)("label",{class:"btn btn-outline-success",for:"btnradio2"},"기록",-1)),n[4]||(n[4]=(0,a.Lk)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off",checked:""},null,-1)),n[5]||(n[5]=(0,a.Lk)("label",{class:"btn btn-outline-success",for:"btnradio3"},"나의 커뮤니티",-1))])]),(0,a.Lk)("div",u,[(0,a.Lk)("div",p,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(j.value,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.communityPk,class:"image-container2"},[(0,a.Lk)("div",g,[(0,a.Lk)("div",f,[(0,a.Lk)("span",y,[(0,a.Lk)("span",h,[n[6]||(n[6]=(0,a.Lk)("img",{src:"/images/메모.png",alt:"메모 아이콘",class:"memo-icon",style:{width:"16px",height:"16px","margin-left":"1px","margin-right":"2px"}},null,-1)),(0,a.eW)(" "+(0,o.v_)(t.communityTitle),1)]),(0,a.Lk)("button",{onClick:e=>D(t),class:"custom-btn"},(0,o.v_)(t.showInfo?"기록":"경로"),9,L)]),n[10]||(n[10]=(0,a.Lk)("p",{class:"location-text"},[(0,a.Lk)("img",{src:"/images/기본.png",alt:"",style:{width:"13px",height:"13px"}}),(0,a.eW)("서울 종로구 무악동")],-1)),(0,a.Lk)("div",v,[t.communityUrl?((0,a.uX)(),(0,a.CE)("img",{key:0,src:t.communityUrl,alt:"게시글 이미지",class:"img-fluid",style:{width:"500px",height:"225px","object-fit":"cover"}},null,8,b)):(0,a.Q3)("",!0),t.showMap?((0,a.uX)(),(0,a.CE)("div",{key:1,id:"map-"+t.communityPk,class:"map-overlay",onClick:n=>e(t.lat,t.lng),style:{cursor:"pointer"}},null,8,w)):(0,a.Q3)("",!0),t.showInfo?((0,a.uX)(),(0,a.CE)("div",C,n[7]||(n[7]=[(0,a.Lk)("div",{class:"overlay-content"},[(0,a.Lk)("span",{class:"overlay-title"},"Time 33:00"),(0,a.Lk)("span",{class:"overlay-title"},"Distance 3.40km"),(0,a.Lk)("span",{class:"overlay-title"},"Pace 8'37\"")],-1)]))):(0,a.Q3)("",!0)]),(0,a.Lk)("div",x,[(0,a.Lk)("div",_,[(0,a.Lk)("div",I,[(0,a.Lk)("span",{class:(0,o.C4)(["like-icon",{liked:t.liked}]),onClick:e=>K(t.communityPk)},(0,o.v_)(t.liked?"💚":"🤍"),11,E),(0,a.Lk)("span",M,(0,o.v_)(t.likeCount),1)]),(0,a.Lk)("div",A,[n[8]||(n[8]=(0,a.Lk)("span",{class:"comment-icon"},"💬",-1)),(0,a.Lk)("span",X,(0,o.v_)(t.commentCount),1)])]),(0,a.Lk)("span",P,(0,o.v_)(t.communityRegDate),1)]),(0,a.Lk)("div",F,[t.profileImageUrl?((0,a.uX)(),(0,a.CE)("img",{key:0,src:t.profileImageUrl,alt:"프로필 사진",class:"profile-image me-2"},null,8,N)):(0,a.Q3)("",!0),(0,a.Lk)("span",Q,(0,o.v_)(t.userNickName),1),n[9]||(n[9]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("span",U,(0,o.v_)(t.communityBody),1)])])])])))),128))])])]),(0,a.bF)(l.A,{class:"footer"})],64))}},B=n(1241);const D=(0,B.A)(j,[["__scopeId","data-v-dcfbd51e"]]);var K=D}}]);
//# sourceMappingURL=476.0347f2a9.js.map