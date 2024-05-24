"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[363],{8161:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=o(4848),t=o(8453);const s={sidebar_position:6},i="REST Support",l={id:"prologue-guide/rest",title:"REST Support",description:"REST API \ub97c \ud638\ucd9c\ud558\uae30\uc704\ud55c WebFlux \uae30\ubc18\uc758 \ud074\ub77c\uc774\uc5b8\ud2b8 \ubaa8\ub4c8\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc790\uccb4\ub85c \ud504\ub85c\ud37c\ud2f0\ub97c \uac00\uc9c0\uace0 \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 @Bean \ucd08\uae30\ud654 \ud6c4\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 \uc774\ub97c \uc124\uc815\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4.",source:"@site/docs/prologue-guide/rest.md",sourceDirName:"prologue-guide",slug:"/prologue-guide/rest",permalink:"/docs/docs/prologue-guide/rest",draft:!1,unlisted:!1,editUrl:"https://github.com/vizend-way/docs/tree/main/docs/prologue-guide/rest.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Event Support",permalink:"/docs/docs/prologue-guide/event"},next:{title:"Query Support",permalink:"/docs/docs/prologue-guide/query"}},p={},u=[{value:"Blocking \ud638\ucd9c",id:"blocking-\ud638\ucd9c",level:2},{value:"Non-blocking \ud638\ucd9c",id:"non-blocking-\ud638\ucd9c",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"rest-support",children:"REST Support"}),"\n",(0,r.jsxs)(e.p,{children:["REST API \ub97c \ud638\ucd9c\ud558\uae30\uc704\ud55c WebFlux \uae30\ubc18\uc758 \ud074\ub77c\uc774\uc5b8\ud2b8 \ubaa8\ub4c8\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc790\uccb4\ub85c \ud504\ub85c\ud37c\ud2f0\ub97c \uac00\uc9c0\uace0 \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.jsx)(e.code,{children:"@Bean"})," \ucd08\uae30\ud654 \ud6c4\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 \uc774\ub97c \uc124\uc815\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.p,{children:"REST API \ud074\ub77c\uc774\uc5b8\ud2b8 \ud504\ub85c\ud37c\ud2f0 \uc124\uc815\uc740 \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud569\ub2c8\ub2e4. \ud544\uc694\ud560 \uacbd\uc6b0 \ucd94\uac00 \uc124\uc815\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@Data\n@ConfigurationProperties(prefix = "vizend.foo.client")\npublic class FooClientProperties {\n    //\n    private RestRequesterProperties rest;\n\n    public CheckpointClientProperties() {\n        //\n        rest = RestRequesterProperties.builder()\n                .baseUrl("http://foo:8080")\n                .maxMemorySize(1024 * 1024) // 1 MB\n                .build();\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"RestRequesterProperties\uc5d0\uc11c \uc124\uc815\ud560 \uc218 \uc788\ub294 \ud56d\ubaa9 \ubc0f \uae30\ubcf8 \uc124\uc815\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"base-url: http://200.x.x.10:8080 # REST API \uc81c\uacf5 URL\nloopback: false                  # \uc2e4\uc81c \ud638\ucd9c\ud558\uc9c0 \uc54a\uace0 \ube48 \uac12\uc744 \ub9ac\ud134\ud560\uc9c0 \uc5ec\ubd80\ub85c \uac1c\ubc1c\uc6a9\uc73c\ub85c \uc0ac\uc6a9\nbase-method: POST                # \uae30\ubcf8 HTTP \uc694\uccad \uba54\uc18c\ub4dc\nretry: 3                         # \uc2e4\ud328\uc2dc \uc7ac\uc2dc\ub3c4 \ud68c\uc218\nrequest-timeout-seconds: 60      # \uc694\uccad \ud0c0\uc784\uc544\uc6c3 (\ucd08)\nmax-memory-size: 52428800        # \uae30\ubcf8 50 MB\ub85c \uc751\ub2f5 \uc0ac\uc774\uc988 \uc81c\ud55c\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uc704 \uc124\uc815\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 ",(0,r.jsx)(e.code,{children:"application.yml"})," \uc124\uc815 \ubd80\ubd84\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"vizend:\n  foo:\n    client:\n      rest:\n        base-url: http://200.x.x.10:8080\n        request-timeout-seconds: 600\n"})}),"\n",(0,r.jsx)(e.p,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc704 \uc124\uc815\uc744 \uc0ac\uc6a9\ud574 \ud638\ucd9c\ud558\ub294 \ubd80\ubd84\uc740 \uc544\ub798\uc640 \uac19\uc774 Blocking \ud638\ucd9c, Nun-blocking \ud638\ucd9c\ub85c \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h2,{id:"blocking-\ud638\ucd9c",children:"Blocking \ud638\ucd9c"}),"\n",(0,r.jsx)(e.p,{children:"Blocking \ud638\ucd9c\uc740 \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \uc751\ub2f5\uc774 \uc624\uae30\uae4c\uc9c0 \ube14\ub7ed\ub418\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc751\ub2f5 \uc720\ud615\uc73c\ub85c \ubc1b\uc544 \ucc98\ub9ac\ud560 \ud0c0\uc785\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uace0 \uc77c\ubc18\uc801\uc778 \uacbd\uc6b0 Body\uc758 \ubb38\uc790\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@Slf4j\n@Component\n@RequiredArgsConstructor\npublic class FooRestClient {\n    //\n    private final FooClientProperties properties;\n\n    private RestRequester rest;\n\n    @PostConstruct\n    public void initialize() {\n        //\n        this.rest = new RestRequester(this.properties.getRest());\n    }\n\n    public String registerFoo(RegisterFooRequest request) {\n        //\n        String path = UriComponentsBuilder\n                .fromUriString("/restful/foos")\n                .toUriString();\n\n        String response = rest.post(path, request);\n\n        if (response == null) {\n            throw new IllegalArgumentException(\n                    "Cannot register foo, fooRequest = " + request);\n        }\n\n        return response;\n    }\n    \n    public List<Foo> findFoos() {\n        //\n        String path = UriComponentsBuilder\n                .fromUriString("/restful/foos")\n                .toUriString();\n\n        List<Foo> response = rest.getList(path, Foo.class);\n\n        if (response == null) {\n            throw new IllegalArgumentException("Cannot find foos");\n        }\n\n        return response;\n    }\n    \n    public Foo findFoo(String id) {\n        //\n        String path = UriComponentsBuilder\n                .fromUriString("/restful/foos/{id}")\n                .buildAndExpand(id)\n                .toUriString();\n\n        Foo response = rest.get(path, Foo.class);\n\n        if (response == null) {\n            throw new IllegalArgumentException("Cannot find foo with id = " + id);\n        }\n\n        return response;\n    }   \n}\n'})}),"\n",(0,r.jsxs)("aside",{children:[(0,r.jsx)(e.p,{children:"\ud83d\udca1 \uc694\uccad\uc73c\ub85c \uac1d\uccb4\ub97c JSON\uc73c\ub85c, \uc751\ub2f5 \ud0c0\uc785\uc73c\ub85c Generic \uc720\ud615\uc744 \ubc1b\uace0 \uc2f6\uc744 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc870\ud569\uc744 \uc774\uc6a9\ud574 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'FindUserQuery query = new FindUserQuery(userId);\nUser<Customer> response = this.rest.post(\n                "/feature/user/find-user-query", query,\n                new TypeReference<User<Customer>>() {});\n'})})]}),"\n",(0,r.jsx)(e.h2,{id:"non-blocking-\ud638\ucd9c",children:"Non-blocking \ud638\ucd9c"}),"\n",(0,r.jsx)(e.p,{children:"Non-blocking \ud638\ucd9c\uc740 \uc751\ub2f5\uc73c\ub85c Mono \uc720\ud615\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4. \ub10c\ube14\ub7ed \ud638\ucd9c\uc744 \uc774\uc6a9\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@Slf4j\n@Component\n@RequiredArgsConstructor\npublic class FooRestClient {\n    //\n    private final FooClientProperties properties;\n\n    private AsyncReqestRequester rest;\n\n    @PostConstruct\n    public void initialize() {\n        //\n        this.rest = new RestRequester(this.properties.getRest());\n    }\n\n    public String registerFoo(RegisterFooRequest request) {\n        //\n        String path = UriComponentsBuilder\n                .fromUriString("/restful/foos")\n                .toUriString();\n\n        Mono<String> monoResponse = rest.post(path, request);\n        String response = monoResponse.block();\n\n        if (response == null) {\n            throw new IllegalArgumentException(\n                    "Cannot register foo, fooRequest = " + request);\n        }\n\n        return response;\n    }\n\n    public List<Foo> findFoos() {\n        //\n        String path = UriComponentsBuilder\n                .fromUriString("/restful/foos")\n                .toUriString();\n\n        Mono<List<Foo>> monoResponse = rest.getList(path, Foo.class);\n        List<Foo> response = monoResponse.block();\n\n        if (response == null) {\n            throw new IllegalArgumentException("Cannot find foos");\n        }\n\n        return response;\n    }\n\n    public Foo findFoo(String id) {\n        //\n        String path = UriComponentsBuilder\n                .fromUriString("/restful/foos/{id}")\n                .buildAndExpand(id)\n                .toUriString();\n\n        Mono<Foo> monoResponse = rest.get(path, Foo.class);\n        Foo response = monoResponse.block();\n\n        if (response == null) {\n            throw new IllegalArgumentException("Cannot find foo with id = " + id);\n        }\n\n        return response;\n    }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>l});var r=o(6540);const t={},s=r.createContext(t);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);