(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{271:function(r,n,t){"use strict";t.r(n);var e=t(28),s=Object(e.a)({},(function(){var r=this,n=r.$createElement,t=r._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"npm私库搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm私库搭建"}},[r._v("#")]),r._v(" npm私库搭建")]),r._v(" "),t("h2",{attrs:{id:"搭建准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建准备"}},[r._v("#")]),r._v(" 搭建准备")]),r._v(" "),t("ul",[t("li",[r._v("node")]),r._v(" "),t("li",[r._v("cnpmjs")]),r._v(" "),t("li",[r._v("mysql")]),r._v(" "),t("li",[r._v("docker(可选)")])]),r._v(" "),t("h2",{attrs:{id:"方案："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案："}},[r._v("#")]),r._v(" 方案：")]),r._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/rlidwka/sinopia",target:"_blank",rel:"noopener noreferrer"}},[r._v("sinopia"),t("OutboundLink")],1),t("br"),r._v("\n最近一次github更新4 years ago\n太久未维护")])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/verdaccio/verdaccio",target:"_blank",rel:"noopener noreferrer"}},[r._v("verdaccio"),t("OutboundLink")],1),t("br"),r._v("\nsinopia的fork 担心也会停止维护")])]),r._v(" "),t("li",[t("p",[r._v("git+ssh"),t("br"),r._v("\n权限管理复杂")])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/cnpm/cnpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[r._v("cnpmjs"),t("OutboundLink")],1),r._v("  (本次选择)"),t("br"),r._v("\n淘宝 NPM 镜像")])])]),r._v(" "),t("h2",{attrs:{id:"npm私有库搭建步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm私有库搭建步骤"}},[r._v("#")]),r._v(" npm私有库搭建步骤")]),r._v(" "),t("ol",[t("li",[r._v("克隆cnpmjs"),t("br"),r._v("\n安装依赖并启动，7001为注册服务，7002为web页")]),r._v(" "),t("li",[r._v("下载mysql"),t("br"),r._v("\n可选择安装workbench(可视化编辑)")]),r._v(" "),t("li",[r._v("配置cnpmjs数据库信息"),t("br"),r._v("\n指向数据库所在位置，配置登录信息")]),r._v(" "),t("li",[r._v("配置私库地址"),t("br"),r._v("\n更改config中的registryHost\n修改libs下面的download连接格式")])]),r._v(" "),t("p",[r._v("tips：可用nrm 管理npm仓库")]),r._v(" "),t("h2",{attrs:{id:"发布npm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布npm包"}},[r._v("#")]),r._v(" 发布npm包")]),r._v(" "),t("ol",[t("li",[t("p",[r._v("添加用户到admins"),t("br"),r._v("\ncnpm adduser --registry=http://192.168.17.169:7001/"),t("br"),r._v("\nUsername: admin"),t("br"),r._v("\nPassword: 设置密码"),t("br"),r._v("\nEmail: (this IS public) 上面修改后的邮箱地址")])]),r._v(" "),t("li",[t("p",[r._v("登录"),t("br"),r._v("\ncnpm login --registry=http://192.168.17.169:7001/")])]),r._v(" "),t("li",[t("p",[r._v("发布包"),t("br"),r._v("\n如果设置了scopes"),t("br"),r._v("\n// registry scopes, if don't set, means do not support scopes"),t("br"),r._v("\nscopes: [ '@cnpm', '@cnpmtest', '@cnpm-test', '@jnpm' ],"),t("br"),r._v("\n需要在发布包中的package.json上添加scope前缀"),t("br"),r._v('\n"name": "@jnpm/jhello",'),t("br"),r._v("\n然后才能执行发布的命令"),t("br"),r._v("\ncnpm publish --registry=http://192.168.17.169:7001/")])]),r._v(" "),t("li",[t("p",[r._v("下载包"),t("br"),r._v("\ncnpm install --registry=http://192.168.17.169:7001/")])])]),r._v(" "),t("p",[r._v("tips:设置scopes后，package.json中的依赖包也需要添加前缀，  像这样")]),r._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"@jnpm/jumatable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"^1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(",")]),r._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"@jnpm/jumahello"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"^1.0.0"')]),r._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n")])]),r._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[r._v("1")]),t("br"),t("span",{staticClass:"line-number"},[r._v("2")]),t("br"),t("span",{staticClass:"line-number"},[r._v("3")]),t("br"),t("span",{staticClass:"line-number"},[r._v("4")]),t("br")])]),t("h2",{attrs:{id:"一些报错信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些报错信息"}},[r._v("#")]),r._v(" 一些报错信息")]),r._v(" "),t("ol",[t("li",[r._v("mysql报错"),t("br"),r._v("\n动作：项目运行"),t("br"),r._v("\n错误信息：ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"),t("br"),r._v("\n原因：mysql不同版本密码算法不一致"),t("br"),r._v("\n解决方法：ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';")]),r._v(" "),t("li",[r._v("node报错"),t("br"),r._v("\n动作：执行node --harmony_generators dispatch.js时"),t("br"),r._v("\n错误信息：node: bad option: --harmony_generators"),t("br"),r._v("\n原因：当前node版本不支持--harmony_generators选项"),t("br"),r._v("\n解决方法：可以更换命令node dispatch.js来启动，或者升级node到最新版本")]),r._v(" "),t("li",[r._v("publish模块报错"),t("br"),r._v("\n动作：cnpm publish [组件名]"),t("br"),r._v("\n错误信息：only allow publish with @cnpm, @cnpmtest, @cnpm-test scope(s)"),t("br"),r._v("\n原因：私有库设置了scopes"),t("br"),r._v("\n解决方法：在package.json中的name字段添加scopes前缀")]),r._v(" "),t("li",[r._v("install模块报错"),t("br"),r._v("\n动作: npm install --registry=http://192.168.17.169:7001"),t("br"),r._v("\n错误信息：404"),t("br"),r._v("\n原因：安装时并没有从本地获取包，而是从线上获取"),t("br"),r._v("\n解决方法: cnpm install --registry=http://192.168.17.169:7001"),t("br"),r._v("\n过程：修改config中的registryHost;修改libs下面的download连接格式")])]),r._v(" "),t("h2",{attrs:{id:"使用docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用docker"}},[r._v("#")]),r._v(" 使用docker")]),r._v(" "),t("ol",[t("li",[r._v("修改cnpmjs中的docker配置"),t("br"),r._v("\n将docs-dockerize-config.js与我们自定义添加的config-config.js中的配置修改一致")]),r._v(" "),t("li",[r._v("生成镜像"),t("br"),r._v("\ndocker build -t juma/cnpm:127 .")]),r._v(" "),t("li",[r._v("运行镜像"),t("br"),r._v("\ndocker run juma/cnpm:127")])]),r._v(" "),t("p",[r._v("tips:"),t("br"),r._v("\n删除容器:docker rm $(docker ps -aq);"),t("br"),r._v("\n删除镜像:docker rmi ID/NAME")]),r._v(" "),t("h2",{attrs:{id:"参考资料："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料："}},[r._v("#")]),r._v(" 参考资料：")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://blog.fens.me/nodejs-cnpm-npm/",target:"_blank",rel:"noopener noreferrer"}},[r._v("CNPM搭建私有的NPM服务"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/wyzfzu/p/4149310.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("MacPro 使用cnpmjs搭建私有npm服务"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000010503203",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用 cnpmjs 搭建企业私有 npm 仓库"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.ctolib.com/topics-131393.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("告诉你为何以及如何搭建一个私有的npm仓库"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://yq.aliyun.com/articles/705235",target:"_blank",rel:"noopener noreferrer"}},[r._v("解决Node.js mysql客户端不支持认证协议引发的“ER_NOT_SUPPORTED_AUTH_MODE”问题"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/wyc_cs/article/details/51568925?_t_t_t=0.6805647834506635",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用CNPM搭建企业内部私有的NPM库"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/Jimc/p/10280774.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("nrm安装与使用"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.zybuluo.com/chris-ren/note/435419",target:"_blank",rel:"noopener noreferrer"}},[r._v("发布模块到cnpm私服"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37310683",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用cnpmjs.org搭建私有npm源"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/build/",target:"_blank",rel:"noopener noreferrer"}},[r._v("docker build"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=s.exports}}]);