(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{319:function(t,r,e){"use strict";e.r(r);var a=e(6),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"home-assistant安装指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#home-assistant安装指南"}},[t._v("#")]),t._v(" Home Assistant安装指南")]),t._v(" "),r("h3",{attrs:{id:"准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://amzn.to/2S0Gcl1",target:"_blank",rel:"noopener noreferrer"}},[t._v("树莓派 4"),r("OutboundLink")],1),t._v("（树莓派 3 也可以，如果你身边有一个）。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/2ReZ2Vq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi 4"),r("OutboundLink")],1),r("a",{attrs:{href:"https://amzn.to/2R8yG7h",target:"_blank",rel:"noopener noreferrer"}},[t._v("电源"),r("OutboundLink")],1),t._v("或Raspberry Pi 3 电源")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.to/2X0Z2di",target:"_blank",rel:"noopener noreferrer"}},[t._v("微型 SD 卡"),r("OutboundLink")],1),t._v("。建议使用 32 GB 或更大的卡。")]),t._v(" "),r("li",[t._v("SD 读卡器。这已经是大多数笔记本电脑的一部分，但如果您没有，您可以购买"),r("a",{attrs:{href:"https://amzn.to/2WWxntY",target:"_blank",rel:"noopener noreferrer"}},[t._v("独立的 USB 适配器。"),r("OutboundLink")],1),t._v("品牌无所谓，选最便宜的就行。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://amzn.com/dp/B00N2VISLW",target:"_blank",rel:"noopener noreferrer"}},[t._v("以太网电缆"),r("OutboundLink")],1),t._v("。安装时需要。安装后，家庭助理可以使用 Wi-Fi，但以太网连接更可靠，强烈推荐。")])]),t._v(" "),r("h3",{attrs:{id:"将映像写入启动媒体"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#将映像写入启动媒体"}},[t._v("#")]),t._v(" 将映像写入启动媒体")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("将 Home Assistant 启动媒体（SD 卡）连接到您的计算机")])]),t._v(" "),r("li",[r("p",[t._v("下载并启动"),r("a",{attrs:{href:"https://www.balena.io/etcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("Balena Etcher"),r("OutboundLink")],1),t._v("。（您可能需要在 Windows 上以管理员权限运行它）。")])]),t._v(" "),r("li",[r("p",[t._v("选择写入方式，这里建议从"),r("a",{attrs:{href:"https://github.com/home-assistant/operating-system/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v("（或"),r("a",{attrs:{href:"https://www.hachina.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HAchina"),r("OutboundLink")],1),t._v("）上下载后选择文件烧入。")])]),t._v(" "),r("li",[r("p",[t._v("Balena Etcher 现在将下载图像，完成后单击“选择目标” "),r("img",{attrs:{src:"https://picgo-1307188483.cos.ap-nanjing.myqcloud.com/etcher3.png",alt:"Etcher 软件的屏幕截图，突出显示了选择目标按钮。"}})])]),t._v(" "),r("li",[r("p",[t._v("选择要用于 Raspberry Pi 的 SD 卡 "),r("img",{attrs:{src:"https://picgo-1307188483.cos.ap-nanjing.myqcloud.com/etcher4.png",alt:"Etcher 软件的屏幕截图显示了可用的目标。"}})])]),t._v(" "),r("li",[r("p",[t._v("点击“Flash！” 开始写入img。 "),r("img",{attrs:{src:"https://picgo-1307188483.cos.ap-nanjing.myqcloud.com/etcher5.png",alt:"Etcher 软件的屏幕截图，显示突出显示的 Flash 按钮。"}})])]),t._v(" "),r("li",[r("p",[t._v("当 Balena Etcher 完成图像的写入后，您将收到此确认信息 "),r("img",{attrs:{src:"https://picgo-1307188483.cos.ap-nanjing.myqcloud.com/etcher6.png",alt:"Etcher 软件的屏幕截图显示安装已完成。"}})])])]),t._v(" "),r("h3",{attrs:{id:"启动你的树莓派"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动你的树莓派"}},[t._v("#")]),t._v(" 启动你的树莓派")]),t._v(" "),r("ol",[r("li",[t._v("插入您刚刚创建的启动媒体（SD 卡）。")]),t._v(" "),r("li",[t._v("为网络连接以太网电缆。")]),t._v(" "),r("li",[t._v("连接电源线。")]),t._v(" "),r("li",[t._v("在您的桌面系统的浏览器中，几分钟内您将能够在"),r("a",{attrs:{href:"http://homeassistant.local:8123/",target:"_blank",rel:"noopener noreferrer"}},[t._v("homeassistant.local:8123"),r("OutboundLink")],1),t._v("上访问您的新家庭助理。")])]),t._v(" "),r("ul",[r("li",[t._v("如果您运行的是较旧的 Windows 版本或具有更严格的网络配置，您可能需要通过"),r("a",{attrs:{href:"http://homeassistant:8123/",target:"_blank",rel:"noopener noreferrer"}},[t._v("homeassistant:8123"),r("OutboundLink")],1),t._v("或"),r("code",[t._v("http://X.X.X.X:8123")]),t._v("（将 XXXX 替换为您的 Raspberry Pi 的 IP 地址）访问 Home Assistant。")])])])}),[],!1,null,null,null);r.default=n.exports}}]);