"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[8063],{2076:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>a});var i=e(4848),o=e(8453);const d={sidebar_position:9},r="VoidEntity \uc0ac\uc6a9 \ubc29\ubc95",s={id:"studio-guide/voidEntity_kor",title:"VoidEntity \uc0ac\uc6a9 \ubc29\ubc95",description:"\uac1c\uc694",source:"@site/docs/studio-guide/voidEntity_kor.md",sourceDirName:"studio-guide",slug:"/studio-guide/voidEntity_kor",permalink:"/docs/studio-guide/voidEntity_kor",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/studio-guide/voidEntity_kor.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Modification of Entity",permalink:"/docs/studio-guide/entityModify_eng"},next:{title:"Entity, Cdo  \uc0dd\uc131\uc744 \uc704\ud55c YAML \uc791\uc131 \uac00\uc774\ub4dc",permalink:"/docs/studio-guide/yaml_kor"}},c={},a=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc0ac\uc6a9\ubc29\ubc95",id:"\uc0ac\uc6a9\ubc29\ubc95",level:2}];function l(n){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"voidentity-\uc0ac\uc6a9-\ubc29\ubc95",children:"VoidEntity \uc0ac\uc6a9 \ubc29\ubc95"}),"\n",(0,i.jsx)(t.h2,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,i.jsx)(t.p,{children:"Studio\uc5d0\uc11c Entity\uc758 Identity\ub97c \uc9c1\uc811 \uc815\uc758\ud560 \uc218 \uc788\ub294 VoidEntity\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\uc874\uc758 DomainEntity, StageEntity\ub294 Identity\ub97c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.h2,{id:"\uc0ac\uc6a9\ubc29\ubc95",children:"\uc0ac\uc6a9\ubc29\ubc95"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:e(520).A+"",width:"328",height:"294"})}),"\n",(0,i.jsx)(t.p,{children:"Entity\ub97c \uc0dd\uc131\ud558\ub294 \uba54\ub274\ub97c \uc120\ud0dd\ud558\uace0 \ud45c\ucd9c\ub418\ub294 \ub2e4\uc774\uc5bc\ub85c\uadf8\uc5d0\uc11c Entity type\uc744 VoidEntity\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Foo extends VoidEntity {\n\n    public Foo(String id) {\n        // TODO : Set the id to your own value\n    }\n\n    public Foo(FooCdo fooCdo) {\n        super();\n        BeanUtils.copyProperties(fooCdo, this);\n    }\n\n    @Override\n    public String getId() {\n        // TODO : Get the id from your own value\n        return null;\n    }\n...\n"})}),"\n",(0,i.jsx)(t.p,{children:"\uc0dd\uc131\ub41c VoidEntity \ucf54\ub4dc\uc758 \ucd08\uae30 \ubaa8\uc2b5\uc785\ub2c8\ub2e4. Logic\uc774\ub098 Event \ub4f1 \ub2e4\ub978 \ud50c\ub7ab\ud3fc \ucf54\ub4dc\ub4e4\uacfc Identity\ub97c \uc8fc\uace0 \ubc1b\uae30 \uc704\ud574\uc11c \uc0dd\uc131\uc790 \ub0b4\ubd80\uc640 get \uba54\uc18c\ub4dc\uc758 \ub0b4\ubd80\ub97c \uac1c\ubc1c\uc790\uac00 \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Foo extends VoidEntity {\n    @FieldId\n    private String myFooId;\n    private String name;\n\n    public Foo(String id) {\n        this.myFooId = id;\n    }\n\n    public Foo(FooCdo fooCdo) {\n        super();\n        BeanUtils.copyProperties(fooCdo, this);\n    }\n\n    @Override\n    public String getId() {\n        return myFooId;\n    }\n...\n"})}),"\n",(0,i.jsx)(t.p,{children:"\uc704 \ucf54\ub4dc\uc5d0\uc11c myFooId\ub294 \uc5d4\ud2f0\ud2f0 \uc544\uc774\ub514\uc785\ub2c8\ub2e4. myFooId\uac00 \uc544\uc774\ub514\uc784\uc744 Studio\uc5d0\uac8c \uc54c\ub9ac\uae30 \uc704\ud574 \u2018@FieldId\u2019 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc0dd\uc131\uc790\uc640 getId \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.p,{children:"\uadf8\ub9ac\uace0 \ub098\uc11c Foo \uc5d4\ud2f0\ud2f0\ub97c \uc120\ud0dd\ud558\uace0 \ubaa8\ub4e0 \ub2e4\ub978 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. Identity \uc704\uce58\uac00 Foo \uc5d4\ud2f0\ud2f0\uc5d0 \uc788\uc73c\ubbc0\ub85c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 StageEntity, DomainEntity\uc640 \uc870\uae08\uc529 \ub2e4\ub985\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@Getter\n@Setter\n@NoArgsConstructor\n@Entity\n@Table(name = "FOO")\npublic class FooJpo implements JsonSerializable {\n    /* Gen by Vizend Studio v5.1.0 */\n    @Id\n    private String myFooId;\n    private String name;\n\n    public FooJpo(Foo foo) {\n        /* Gen by Vizend Studio v5.1.0 */\n        BeanUtils.copyProperties(foo, this);\n    }\n\n    public Foo toDomain() {\n        /* Gen by Vizend Studio v5.1.0 */\n        Foo foo = new Foo();\n        BeanUtils.copyProperties(this, foo);\n        return foo;\n    }\n...\n'})}),"\n",(0,i.jsx)(t.p,{children:"\uc0dd\uc131\ub41c JPO\uc5d0\uc11c myFooId\uc5d0 \u2018@Id\u2019 \uc5b4\ub178\ud14c\uc774\uc158\uc774 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 JPO \uc0dd\uc131\uc790\uc640 toDomain \uba54\uc18c\ub4dc \ucf54\ub4dc\ub294 \uae30\uc874\uc758 DomainEntity\uc758 JPO\uc640 \ub2e4\ub985\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.p,{children:"\uc774\uc0c1\uc73c\ub85c VoidEntity \uc0ac\uc6a9\ubc95\uc744 \ub9c8\uce69\ub2c8\ub2e4."})]})}function u(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},520:(n,t,e)=>{e.d(t,{A:()=>i});const i=e.p+"assets/images/ve-aggregate-entity-662e16066d8a1b31dbf761b4b62ec9de.png"},8453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>s});var i=e(6540);const o={},d=i.createContext(o);function r(n){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(d.Provider,{value:t},n.children)}}}]);