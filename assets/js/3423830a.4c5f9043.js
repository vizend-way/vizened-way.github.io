"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[5465],{2323:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var o=n(4848),s=n(8453);const t={sidebar_position:7},a="Query Support",i={id:"prologue-guide/query",title:"Query Support",description:"JPA \uae30\ubc18\uc758 \ub3d9\uc801 \ucffc\ub9ac\uc640 Mongo\uc758 \ub3d9\uc801 \ucffc\ub9ac \uac1d\uccb4\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub2e8\uc77c \uc5d4\ud2f0\ud2f0\uc5d0 \ub300\ud574 \uc801\uc6a9\ud560 \uc218 \uc788\uace0 \ud30c\ub77c\uba54\ud130\uc5d0 \ub530\ub77c \ud544\ud130\ub9c1\ub418\ub294 \ud56d\ubaa9\uc774 \ub2e4\ub97c \uacbd\uc6b0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/prologue-guide/query.md",sourceDirName:"prologue-guide",slug:"/prologue-guide/query",permalink:"/docs/docs/prologue-guide/query",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/prologue-guide/query.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"REST Support",permalink:"/docs/docs/prologue-guide/rest"}},u={},c=[{value:"JPA \ub3d9\uc801 \ucffc\ub9ac",id:"jpa-\ub3d9\uc801-\ucffc\ub9ac",level:2},{value:"Mongo \ub3d9\uc801 \ucffc\ub9ac",id:"mongo-\ub3d9\uc801-\ucffc\ub9ac",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"query-support",children:"Query Support"}),"\n",(0,o.jsx)(r.p,{children:"JPA \uae30\ubc18\uc758 \ub3d9\uc801 \ucffc\ub9ac\uc640 Mongo\uc758 \ub3d9\uc801 \ucffc\ub9ac \uac1d\uccb4\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub2e8\uc77c \uc5d4\ud2f0\ud2f0\uc5d0 \ub300\ud574 \uc801\uc6a9\ud560 \uc218 \uc788\uace0 \ud30c\ub77c\uba54\ud130\uc5d0 \ub530\ub77c \ud544\ud130\ub9c1\ub418\ub294 \ud56d\ubaa9\uc774 \ub2e4\ub97c \uacbd\uc6b0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsx)("aside",{children:(0,o.jsxs)(r.p,{children:["\ud83d\udca1 \ud558\ub098 \uc774\uc0c1\uc758 \uc5d4\ud2f0\ud2f0\ub97c \uc870\ud569\ud558\uc5ec \uc9c8\uc758\ud574\uc57c \ud560 \uacbd\uc6b0 ",(0,o.jsx)(r.code,{children:"feature"})," \ubaa8\ub4c8\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c ",(0,o.jsx)(r.code,{children:"customstore"})," \uc544\ud0a4\ud14d\ucc98 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \ubcc4\ub3c4 \ucc98\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4."]})}),"\n",(0,o.jsx)(r.h2,{id:"jpa-\ub3d9\uc801-\ucffc\ub9ac",children:"JPA \ub3d9\uc801 \ucffc\ub9ac"}),"\n",(0,o.jsxs)(r.p,{children:["\ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0 \uac1d\uccb4\uc640 \uadf8\uc5d0 \ub300\uc751\ud558\ub294 Jpo \uac1d\uccb4, \uadf8\ub9ac\uace0 JPA\uc758 ",(0,o.jsx)(r.code,{children:"EntityManager"}),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'public Page<User> findUsersByFilterAndSpaceId(String spaceId, String filter, Offset offset) {\n    //\n    QueryParams queryParams = QueryParams.dynamic(\n            QueryParam.and("spaceId", Operator.Equal, spaceId),\n            QueryParam.or("email", Operator.Like, filter),\n            QueryParam.or("displayName", Operator.Like, filter));\n\n    DynamicQuery<UserJpo> query = new JpaDynamicQuery<>(entityManager, queryParams, offset, UserJpo.class);\n    List<UserJpo> userJpos = query.findAll();\n    if (userJpos == null) {\n        return new PageImpl<>(Collections.emptyList());\n    }\n    return UserJpo.toDomains(Queries.page(userJpos, offset));\n}\n'})}),"\n",(0,o.jsx)(r.h2,{id:"mongo-\ub3d9\uc801-\ucffc\ub9ac",children:"Mongo \ub3d9\uc801 \ucffc\ub9ac"}),"\n",(0,o.jsxs)(r.p,{children:["JPA\uc640 \ub3d9\uc77c\ud558\uc9c0\ub9cc ",(0,o.jsx)(r.code,{children:"MongoTemplate"}),", \uc5d4\ud2f0\ud2f0\uc5d0 \ub300\uc751\ud558\ub294 Doc \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\ub9cc \ub2e4\ub985\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'public Page<User> findUsersByFilterAndSpaceId(String spaceId, String filter, Offset offset) {\n    //\n    QueryParams queryParams = QueryParams.dynamic(\n            QueryParam.and("spaceId", Operator.Equal, spaceId),\n            QueryParam.or("email", Operator.Like, filter),\n            QueryParam.or("displayName", Operator.Like, filter));\n\n    DynamicQuery<UserDoc> query = new MongoDynamicQuery<>(mongoTemplate, queryParams, offset, UserDoc.class);\n    List<UserDoc> userDocs = query.findAll();\n    if (userDocs == null) {\n        return new PageImpl<>(Collections.emptyList());\n    }\n    return UserDoc.toDomains(Queries.page(userDocs, offset));\n}\n'})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var o=n(6540);const s={},t=o.createContext(s);function a(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);