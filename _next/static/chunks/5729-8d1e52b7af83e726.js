"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5729],{95729:function(t,e,n){n.d(e,{$H:function(){return L},$O:function(){return X},AA:function(){return g},AZ:function(){return $},BH:function(){return x},C$:function(){return v},Cf:function(){return F},FX:function(){return U},G9:function(){return R},IH:function(){return G},J9:function(){return M},Kz:function(){return V},M6:function(){return y},Nq:function(){return B},OJ:function(){return u},Ov:function(){return b},PR:function(){return P},Pc:function(){return T},Qy:function(){return Z},UF:function(){return K},Vh:function(){return j},W:function(){return k},Xg:function(){return J},Y3:function(){return O},YL:function(){return W},ZJ:function(){return h},_1:function(){return m},bc:function(){return D},dO:function(){return z},gk:function(){return _},h_:function(){return A},id:function(){return w},j1:function(){return p},mN:function(){return Y},mo:function(){return l},n1:function(){return Q},nq:function(){return q},oD:function(){return f},ok:function(){return I},qz:function(){return s},rJ:function(){return d},uI:function(){return H},v9:function(){return N}});var o=n(59499),i=n(67670),a=n(91863);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const s={FIRESTORE_DELETE_Field:!0},d=t=>({FIRESTORE_SET_Field:!0,value:t});function u(t){return{FIRESTORE_UPDATE_Field:!0,update:t}}function h(t,e){return{FIRESTORE_ADD_ASSET:!0,assetId:t,asset:e}}function f(t,e){return{FIRESTORE_UPDATE_ASSET:!0,assetId:t,update:e}}function l(t){return{FIRESTORE_DELETE_ASSET:!0,assetId:t}}function p(t,e){return{FIRESTORE_UPDATE_Field:!0,update:{portals:{[t]:e}}}}const y=async(t,e,n)=>await fetch("/api/exhibit?id=".concat(t,"&type=UPDATE_EXHIBIT"),{method:"POST",body:JSON.stringify({token:n,payload:{info:e}}),credentials:"include"}).then((n=>(e.headline&&(0,i.Y3)("edit_title",{exhibitId:t}),n))),T=async t=>{try{if(t){const e=await fetch("/api/exhibit?id=".concat(t,"&type=FETCH_SINGLE_EXHIBIT"));return await e.json()}return{error:!0}}catch(e){return{error:!0}}},b=async(t,e,n,o="")=>{try{const o=await fetch("/api/exhibit?type=CREATE_EXHIBIT",{method:"POST",body:JSON.stringify({userId:t,token:e,room:n}),credentials:"include"});return await o.json()}catch(i){return{error:!0}}};async function I(t,e,n,o){return await fetch("".concat(a.r.SERVER_API,"/assets/upload_overwrite"),{method:"POST",body:JSON.stringify({assetId:n,exhibitId:o,fileMetadata:e,file:t}),headers:{"Content-Type":"application/json"}}).then((t=>t.json()))}const S={},E={"/models/CyberRoom/BB2.gltf":"classic","/models/Warehouse/abandoned-new.gltf":"warehouse","/models/Warehouse/abandoned-new-2.gltf":"warehouse-2","/models/whitecube/basic.gltf":"white-cube","/models/Wolfgang2/embedded.gltf":"wolfgang-n2","/models/Falcon/falcon.gltf":"falcon","/models/WhiteZephyr/artgallery_GLTF.gltf":"genesis_matic","/models/Genesis/artgallery_GLTF.gltf":"genesis","/models/Apes/club.gltf":"apesbar","/models/Gutter_club/Gutter_Club.gltf":"gutter","/models/WolfgangTemple/temple_GLTF.gltf":"temple"},O=async(t,e={})=>{if(t===(null===e||void 0===e?void 0:e.path)||t===(null===e||void 0===e?void 0:e.slug))return e;const n=E[t]||t;let o=S[n];if(!o){let t=await fetch("".concat(a.r.PUBLIC_API,"/api/destinations/").concat(n)).then((t=>t.json()));t.success?o=S[n]=t.destination:console.error("Failed to fetch room paramaters for",n)}return o},_=async(t,e)=>{try{const n=await fetch("".concat(a.r.SERVER_API,"/assets/shared/").concat(t,"?exhibitId=").concat(e));let o=await n.json();return o.success&&(o.assets=o.assets.filter(((t,e,n)=>{const i=t.token_address+t.token_id;return!o.assets.slice(e+1,n.length).find((t=>{const e=t.token_address+t.token_id;return i===e}))}))),o}catch(n){return{error:!0}}},g=async(t,e,n,o,i,r)=>{try{const c=await fetch("".concat(a.r.SERVER_API,"/assets/share"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Token ".concat(r)},body:JSON.stringify({sharedAssets:t,walletId:e,invitedWalletId:n,exhibitId:o,token:r,inviteId:i})});return await c.json()}catch(c){return{error:!0}}},j=async(t,e,n)=>{"0xf3860788d1597cecf938424baabe976fac87dc26"==t.toLowerCase()?t="0xC896866E927e6F8a416Ba209976115E79fA0a66F":"0x8dbbca57ea56290efa14d835bbfd34faf1d89753"==t.toLowerCase()?t="0x94Bfb1FA83A78de2856DC7c3273ca7E37522aD6C":"0x12cd871105b29760a61f56753d54a59381f5bcc6"==t.toLowerCase()?t="0x8C57E23CbF902ED01a7600fEf1B8d083efB24909":"0x7556Cc553036E8E67ca77B72fCa81657988DE13E"==t.toLowerCase()?t="0xe7079eec020ddfc3f1c0abe1d946c55e6ed30eb3":"0x88d3574660711e03196af8a96f268697590000fa"==t.toLowerCase()?t="0xf8be957f65e67fb0342992a51c30290d5758f880":"0x7556cc553036e8e67ca77b72fca81657988de13e"==t.toLowerCase()&&(t="0xe7079eec020ddfc3f1c0abe1d946c55e6ed30eb3");try{const o=await fetch("".concat(a.r.SERVER_API,"/assets?account=").concat(t,"&offset=").concat(e,"&type=").concat(n));return await o.json()}catch(o){return{error:!0}}},P=async(t,e)=>{try{const n=await fetch("".concat(a.r.PUBLIC_API,"/api/user/me?id=").concat(t,"&blockchain=").concat(e));return await n.json()}catch(n){return{error:!0}}},m=async(t,e,n,o)=>{try{const i=await fetch("".concat(a.r.PUBLIC_API,"/api/overwriteAsset"),{method:"POST",body:JSON.stringify({assetId:e,exhibitId:n,fileMetadata:t,media:o}),headers:{"Content-Type":"application/json"},credentials:"include"});return await i.json()}catch(i){return console.error(i),{error:!0}}},C={},w=async t=>{try{let e=C[t];return e||(e=await fetch("".concat(a.r.PUBLIC_API,"/api/user/me?walletId=").concat(t)).then((t=>t.json())),e.success&&(C[t]=e)),e}catch(e){return console.error(e),{success:!1,error:!0}}},A=async(t,e,n,o)=>{let i=function(t){let e=new URLSearchParams;for(let n in t){let o=t[n];null!=o&&e.set(n,o)}return e.toString()}({id:t,type:"UPDATE_EXHIBIT",validateWallet:o});return await fetch("/api/exhibit?".concat(i),{method:"POST",body:JSON.stringify({token:n,payload:e}),credentials:"include"})},k=async t=>fetch("/api/exhibit?type=GET_USERS_EXHIBITS",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({token:t})}).then((t=>t.json())).then((t=>((0,i.J7)(t.exhibits),t))),N=async(t,e)=>fetch("".concat(a.r.SERVER_API,"/destinations/user"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Token ".concat(t)},body:JSON.stringify({userId:e})}).then((t=>t.json())),x=async(t,e,n)=>fetch("".concat(a.r.SERVER_API,"/destinations/update/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Token ".concat(e)},body:JSON.stringify(c({},n))}).then((t=>t.json())),R=async({token:t,path_low:e,path_mid:n,path_high:o})=>fetch("".concat(a.r.SERVER_API,"/destinations/upload"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Token ".concat(t)},body:JSON.stringify({token:t,path_low:e,path_mid:n,path_high:o})}).then((t=>t.json())),J=async(t,e)=>fetch("".concat(a.r.SERVER_API,"/destinations/upload/thumbnail"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Token ".concat(t)},body:JSON.stringify({token:t,thumbnail:e})}).then((t=>t.json())),L=(t,e)=>fetch("".concat(a.r.PUBLIC_API,"/api/factory/apply"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t,payload:e})}).then((t=>t.json())),v=(t,e,n)=>fetch("".concat(a.r.PUBLIC_API,"/api/factory/apply"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,token:t,payload:n})}).then((t=>t.json())),B=async(t,e,n="")=>fetch("/api/user/update",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({token:t,payload:e})}).then((t=>t.json())).then((t=>((0,i.Y3)("save_profile_edits",{edited:Object.keys(e),user_id:n}),t))),F=async(t,e)=>fetch("/api/exhibit?type=DELETE_EXHIBIT",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({exhibitId:e,token:t})}).then((t=>t.json())),D=async(t,e)=>fetch("/api/exhibit?type=LIKE_EXHIBIT",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({exhibitId:t,token:e})}).then((t=>t.json())).then((e=>{const n=JSON.parse(localStorage.getItem("likes"))||[];return n.push(t),localStorage.setItem("likes",JSON.stringify(n)),e})),U=async(t,e)=>fetch("/api/exhibit?type=UNLIKE_EXHIBIT",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({exhibitId:t,token:e})}).then((t=>t.json())).then((e=>{let n=JSON.parse(localStorage.getItem("likes"))||[];return n=n.filter((e=>t!==e)),localStorage.setItem("likes",JSON.stringify(n)),e})),H=(t,e)=>fetch("/api/exhibit?type=HAS_LIKED",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({exhibitId:t,token:e})}).then((t=>t.json())),V=(t,e)=>fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventType:t,payload:e})}).then((t=>t.json())).catch((t=>{})),G=(t,e)=>fetch("/api/stats?type=FETCH_ANALYTICS",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({token:t,exhibitId:e})}).then((t=>t.json())).catch((t=>{})),X=(t,e,n,o)=>fetch("/api/customLink",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customLink:o,userId:e,exhibitId:n,token:t}),credentials:"include"}).then((t=>t.json())),W=(t,e,n,o,i,a,r,c)=>fetch("/api/invite?type=CREATE_INVITE",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletId:t,token:i,exhibit:n,ownerId:e,isAssetsShared:o,isInviteCurator:a,selectedValidatedAccounts:r,isAdminInviteCurator:c}),credentials:"include"}).then((t=>t.json())),z=(t,e)=>fetch("".concat(a.r.PUBLIC_API,"/api/invite?type=INVITE_LINK_ACCESSED"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inviteId:t,token:e}),credentials:"include"}).then((t=>t.json()));const K=(t,e,n)=>fetch("/api/invite?type=CANCEL_INVITE",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t,editorId:e,exhibitId:n}),credentials:"include"}).then((t=>t.json())),M=(t,e)=>fetch("/api/exhibit?type=HAS_FAVORITED",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({exhibitId:t,token:e}),credentials:"include"}).then((t=>t.json())),Y=(t,e)=>fetch("/api/exhibit?type=TOGGLE_FAVORITE",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({exhibitId:t,token:e}),credentials:"include"}).then((t=>t.json())),Z=t=>fetch("/api/user/getEditorsProfile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({editorIds:t})}).then((t=>t.json())),q=async t=>fetch("".concat(a.r.PUBLIC_API,"/api/exhibit?type=GET_PUBLIC_USER_EXHIBITS"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t})}).then((t=>t.json())),$=async t=>{const e=await fetch("/api/social/isMod?slug=".concat(t),{headers:{"Content-Type":"application/json"},credentials:"include"}).then((t=>t.json()));return e.success&&!0===e.isMod};async function Q(t,e,n){return await fetch("/api/user/avatar?avatarUrl=".concat(t,"&avatarContractAddress=").concat(e,"&avatarTokenId=").concat(n),{headers:{"Content-Type":"application/json"},credentials:"include"}).then((t=>t.json()))}}}]);