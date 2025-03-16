"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[788],{246:function(t,a,n){n.d(a,{vJ:function(){return k},SH:function(){return p},px:function(){return s},sZ:function(){return l},jL:function(){return i},YG:function(){return f},yy:function(){return u},o2:function(){return v},lS:function(){return r},kl:function(){return m},Ob:function(){return L},t0:function(){return d},XG:function(){return y},lD:function(){return g},hc:function(){return b}});n(4114);var e=n(4373);function o(){const t=e.A.create({baseURL:"http://localhost:9000/api",headers:{"Content-Type":"application/json;charset=utf-8"}});return t}n(876);const c=o();async function l(){try{const t=await e.A.get("/api/complaint/list");return console.log("you can use getComplaintList",t.data),t.data}catch(t){console.error(t)}}async function r(){try{const t=await e.A.get("/api/complaint/listRecent");return console.log("you can use getRecentComplaintList",t.data),t.data}catch(t){console.error(t)}}async function s(t){try{const a=await e.A.get(`/api/complaint/mine/${t}`);return a.data}catch(a){console.error(a)}}async function i(t){try{const a=await e.A.get(`/api/complaint/myList/${t}`);return a.data}catch(a){console.error(a)}}async function u(){try{const t=await e.A.get("/api/pathList");return console.log("you can use getPathList",t.data),t.data}catch(t){console.error(t)}}async function d(t){try{const a=await e.A.post("/api/complaint/insert",t);return console.log("응답 상태 코드:",a.status),console.log("민원글 작성에 대한 응답 데이터:",a.data),a.data}catch(a){throw console.error("API 요청 중 오류 발생:",a),a}}async function p(t){try{const a=await e.A.get(`/api/complaint/one/${t}`);return console.log("API response:",a),a.data}catch(a){console.error(a)}}async function m(t){try{const a=await e.A.get(`/api/userInfo/${t}`);return console.log("API response:",a),a.data}catch(a){console.error(a)}}async function f(t){try{const a=await e.A.get(`/api/course/${t}`);return console.log("API response:",a),a.data}catch(a){console.error(a)}}async function k(t){try{const a=await e.A.delete(`/api/complaint/delete/${t}`);return a.data}catch(a){console.error(a)}}async function g(t,a){try{const n=await e.A.patch(`/api/complaint/update/${t}`,a);return n.data}catch(n){console.error(n)}}async function L(t){try{const a=await c.get(`/auth/userpostlist/${t}`);return console.log(t),console.log("you can use getUserPostList",a.data),a.data}catch(a){console.error(a)}}async function v(t){try{const a=await e.A.get(`/api/complaint/processing/${t}`);return console.log("API response:",a),a.data}catch(a){console.error(a)}}async function y(t){try{const a=await e.A.post("/api/complaint/insertProcessing",t);return console.log("응답 상태 코드:",a.status),console.log("민원처리정보 작성에 대한 응답 데이터:",a.data),a.data}catch(a){throw console.error("API 요청 중 오류 발생:",a),a}}async function b(t,a){try{const n=await e.A.patch(`/api/complaint/updateProcessing/${t}`,a);return n.data}catch(n){console.error(n)}}},2788:function(t,a,n){n.r(a),n.d(a,{default:function(){return R}});var e=n(6768),o=n(5130),c=n(144),l=n(876),r=n(246),s=n(4373);const i={id:"kt_app_content_container",class:"app-container container-xxl",style:{"margin-top":"10px","margin-bottom":"10px"}},u={class:"card"},d={class:"card-body p-lg-20 pb-lg-0"},p={class:"flex-lg-row-fluid me-xl-15"},m={class:"mb-17"},f={class:"d-flex flex-wrap mb-2"},k={class:"card p-3 mt-4 mb-3",style:{"background-color":"#21252908"}},g={class:"row align-items-center mb-3 mt-3"},L={class:"col-md-11"},v={class:"row align-items-center"},y={class:"col-auto"},b={class:"form-group"},h={class:"row align-items-center mb-3 mt-3"},w={class:"col-auto"},x={class:"d-flex flex-column fv-row"},A={class:"mb-3 mt-3"},C={class:"d-flex justify-content-end"};var I={__name:"ComplaintView",setup(t){const a=(0,c.KR)("");let n=localStorage.getItem("userNickName");const I=(0,c.KR)(""),P=(0,c.KR)(""),$=(0,c.KR)("");let R=0,T=0;function _(){const t=document.createElement("script");t.onload=()=>kakao.maps.load(U),t.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=333bda7da18df138fb4d9b3e5cf351c4&autoload=false&libraries=services",document.head.appendChild(t)}function U(){const t=document.getElementById("map"),a={center:new kakao.maps.LatLng(37.660833,126.993333),level:8},n=new kakao.maps.Map(t,a);var e=new kakao.maps.Marker({position:n.getCenter()});e.setMap(n),kakao.maps.event.addListener(n,"click",(function(t){var a=t.latLng;e.setPosition(a);var n="클릭한 위치의 위도는 "+a.getLat()+" 이고, ";n+="경도는 "+a.getLng()+" 입니다",R=a.getLat(),T=a.getLng();var o=document.getElementById("clickLatlng");o.innerHTML=n}))}(0,e.sV)((()=>{_()}));const V=(0,c.KR)(null),E=t=>{V.value=t.target.files[0]},K=async()=>{if(!V.value)return null;const t=new FormData;t.append("file",V.value);try{const a=await s.A.post("/api/complaint/upload",t,{headers:{"Content-Type":"multipart/form-data"}});return a.data}catch(a){return console.error("Error uploading image",a),null}};async function j(){const t=await K(),e={complaintTitle:a.value,complaintContent:P.value,complaintType:$.value,complaintImg:t||"",userId:n,mountainName:I.value,latitude:R,longitude:T};try{const t=await(0,r.t0)(e);console.log("서버 응답: ",t),J()}catch(o){console.error(o)}}function J(){l.A.replace({path:"/complaintList"})}return(t,n)=>((0,e.uX)(),(0,e.CE)("div",i,[(0,e.Lk)("div",u,[(0,e.Lk)("div",d,[(0,e.Lk)("div",p,[(0,e.Lk)("div",m,[(0,e.Lk)("div",f,[(0,e.Lk)("div",null,[(0,e.Lk)("button",{class:"styled-button",onClick:n[0]||(n[0]=t=>J())}," 뒤로가기 ")])]),(0,e.Lk)("div",k,[(0,e.Lk)("div",g,[n[6]||(n[6]=(0,e.Lk)("div",{class:"col-md-1 text-center"},[(0,e.Lk)("label",{class:"col-form-label fw-bold"},"제목")],-1)),(0,e.Lk)("div",L,[(0,e.bo)((0,e.Lk)("input",{class:"form-control form-control-lg",type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>a.value=t)},null,512),[[o.Jo,a.value]])])]),(0,e.Lk)("div",v,[n[8]||(n[8]=(0,e.Lk)("div",{class:"col-md-1 text-center"},[(0,e.Lk)("label",{for:"category",class:"col-form-label fw-bold"},"구분")],-1)),(0,e.Lk)("div",y,[(0,e.Lk)("div",b,[(0,e.bo)((0,e.Lk)("select",{"onUpdate:modelValue":n[2]||(n[2]=t=>$.value=t),id:"number",name:"number",class:"form-control",style:{cursor:"pointer"}},n[7]||(n[7]=[(0,e.Lk)("option",{value:"",disabled:""},"유형 선택",-1),(0,e.Lk)("option",{value:"파손"},"파손",-1),(0,e.Lk)("option",{value:"낙석"},"낙석",-1),(0,e.Lk)("option",{value:"화재"},"화재",-1)]),512),[[o.u1,$.value]])])])]),(0,e.Lk)("div",h,[n[9]||(n[9]=(0,e.Lk)("div",{class:"col-md-1 text-center"},[(0,e.Lk)("label",{class:"col-form-label fw-bold"},"산 이름")],-1)),(0,e.Lk)("div",w,[(0,e.bo)((0,e.Lk)("input",{type:"text",id:"groupName",class:"form-control","onUpdate:modelValue":n[3]||(n[3]=t=>I.value=t)},null,512),[[o.Jo,I.value]])])]),n[12]||(n[12]=(0,e.Lk)("div",{class:""},[(0,e.Lk)("div",{id:"map",style:{width:"100%",height:"350px"}}),(0,e.Lk)("p",null,[(0,e.Lk)("em",null,"지도를 클릭해주세요!")]),(0,e.Lk)("div",{id:"clickLatlng"})],-1)),(0,e.Lk)("div",x,[n[10]||(n[10]=(0,e.Lk)("label",{class:"d-flex align-items-center fs-6 fw-semibold mb-2"},[(0,e.Lk)("span",{class:"required"},"사진 등록")],-1)),(0,e.Lk)("input",{type:"file",id:"image",onChange:E,ref:"image"},null,544)]),(0,e.Lk)("div",A,[n[11]||(n[11]=(0,e.Lk)("label",{for:"exampleFormControlTextarea1",class:"form-label"},"위치, 시간, 내용을 자세히 입력해주세요.",-1)),(0,e.bo)((0,e.Lk)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"7","onUpdate:modelValue":n[4]||(n[4]=t=>P.value=t)},null,512),[[o.Jo,P.value]])]),(0,e.Lk)("div",C,[(0,e.Lk)("button",{id:"updateButton",onClick:n[5]||(n[5]=t=>j()),class:"btn btn-success fs-6 p-2"}," 등록하기 ")])])])])])])]))}},P=n(1241);const $=(0,P.A)(I,[["__scopeId","data-v-33718866"]]);var R=$}}]);
//# sourceMappingURL=788.f3374713.js.map