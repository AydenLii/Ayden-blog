(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{327:function(a,s,t){"use strict";t.r(s);var n=t(6),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"什么是面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向对象"}},[a._v("#")]),a._v(" 什么是面向对象")]),a._v(" "),s("h2",{attrs:{id:"面向对象与面向过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象与面向过程"}},[a._v("#")]),a._v(" 面向对象与面向过程")]),a._v(" "),s("p",[a._v("相信很多Java开发者，在最初接触Java的时候就听说过，Java是一种面向对象的开发语言，那么什么是面向对象呢？")]),a._v(" "),s("p",[a._v("首先，所谓面向对象，其实是指软件工程中的一类编程风格，很多人称呼他们为开发范式、编程泛型（Programming Paradigm）。面向对象是众多开发范式中的一种。除了面向对象以外，还有面向过程、指令式编程、函数式编程等。")]),a._v(" "),s("p",[a._v("虽然这几年函数式编程越来越被人们所熟知，但是，在所有的开发范式中，我们接触最多的主要还是面向过程和面向对象两种。")]),a._v(" "),s("p",[a._v("那么，在本书的第一章的第一篇，我们来简单介绍下，什么是面向过程和面向对象。")]),a._v(" "),s("h3",{attrs:{id:"什么是面向过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向过程"}},[a._v("#")]),a._v(" 什么是面向过程？")]),a._v(" "),s("p",[a._v("面向过程(Procedure Oriented)是一种以过程为中心的编程思想，是一种自顶而下的编程模式。最典型的面向过程的编程语言就是C语言。")]),a._v(" "),s("p",[a._v("简单来说，面向过程的开发范式中，程序员需要把问题分解成一个一个步骤，每个步骤用函数实现，依次调用即可。")]),a._v(" "),s("p",[a._v("就是说，在进行面向过程编程的时候，不需要考虑那么多，上来先定义一个函数，然后使用各种诸如if-else、for-each等方式进行代码执行。最典型的用法就是实现一个简单的算法，比如实现冒泡排序。")]),a._v(" "),s("p",[a._v("面向过程进行的软件开发，其代码都是流程化的，很明确的可以看出第一步做什么、第二步做什么。这种方式的代码执行起来效率很高。")]),a._v(" "),s("p",[a._v("但是，面向过程同时存在着代码重用性低，扩展能力差，后期维护难度比较大等问题。")]),a._v(" "),s("h3",{attrs:{id:"什么是面向对象-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向对象-2"}},[a._v("#")]),a._v(" 什么是面向对象？")]),a._v(" "),s("p",[a._v("面向对象（Object Oriented）的雏形，最早在出现在1960年的Simula语言中，当时的程序设计领域正面临着一种危机：在软硬件环境逐渐复杂的情况下，软件如何得到良好的维护？")]),a._v(" "),s("p",[a._v("面向对象程序设计在某种程度上通过强调可重复性解决了这一问题。目前较为流行的面向对象语言主要有Java、C#、C++、Python、Ruby、PHP等。")]),a._v(" "),s("p",[a._v("简单来说，面向对象的开发范式中，程序员将问题分解成一个一个步骤，对每个步骤进行相应的抽象，形成对象，通过不同对象之间的调用，组合解决问题。")]),a._v(" "),s("p",[a._v("就是说，在进行面向对象进行编程的时候，要把属性、行为等封装成对象，然后基于这些对象及对象的能力进行业务逻辑的实现。比如:想要造一辆车，上来要先把车的各种属性定义出来，然后抽象成一个Car类。")]),a._v(" "),s("p",[a._v("面向对象的编程方法之所以更加受欢迎，是因为他更加符合人类的思维方式。这种方式编写出来的代码扩展性、可维护性都很高。")]),a._v(" "),s("p",[a._v("与其实面向对象是一种开发范式，倒不如说面向对象是一种对现实世界的理解和抽象的方法。通过对现实世界的理解和抽象，在运用封装、继承、多态等方法，通过抽象出对象的方式进行软件开发。")]),a._v(" "),s("p",[a._v("什么是封装、继承、多态？具体如何运营面向对象的方式编写代码呢？接下来我们介绍下面向对象具有三大基本特征和五大基本原则。")]),a._v(" "),s("h1",{attrs:{id:"面向对象的三大基本特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的三大基本特征"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://hollischuang.gitee.io/tobetopjavaer/#/basics/object-oriented/characteristics?id=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%89%E5%A4%A7%E5%9F%BA%E6%9C%AC%E7%89%B9%E5%BE%81",target:"_blank",rel:"noopener noreferrer"}},[a._v("面向对象的三大基本特征"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("我们说面向对象的开发范式，其实是对现实世界的理解和抽象的方法，那么，具体如何将现实世界抽象成代码呢？这就需要运用到面向对象的三大特性，分别是封装性、继承性和多态性。")]),a._v(" "),s("h3",{attrs:{id:"封装-encapsulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装-encapsulation"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://hollischuang.gitee.io/tobetopjavaer/#/basics/object-oriented/characteristics?id=%E5%B0%81%E8%A3%85encapsulation",target:"_blank",rel:"noopener noreferrer"}},[a._v("封装(Encapsulation)"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("所谓封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。")]),a._v(" "),s("p",[a._v("简单的说，一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。在一个对象内部，某些代码或某些数据可以是私有的，不能被外界访问。通过这种方式，对象对内部数据提供了不同级别的保护，以防止程序中无关的部分意外的改变或错误的使用了对象的私有部分。")]),a._v(" "),s("h4",{attrs:{id:"封装举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装举例"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://hollischuang.gitee.io/tobetopjavaer/#/basics/object-oriented/characteristics?id=%E5%B0%81%E8%A3%85%E4%B8%BE%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[a._v("封装举例"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("如我们想要定义一个矩形，先定义一个Rectangle类，并其中通过封装的手段放入一些必备数据。")]),a._v(" "),s("div",{staticClass:"language-markup line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[a._v("/**\n* 矩形\n*/\nclass Rectangle {\n\n     /**\n      * 设置矩形的长度和宽度\n      */\n     public Rectangle(int length, int width) {\n         this.length = length;\n         this.width = width;\n     }\n    \n     /**\n      * 长度\n      */\n     private int length;\n    \n     /**\n      * 宽度\n      */\n     private int width;\n    \n     /**\n      * 获得矩形面积\n      *\n      * @return\n      */\n     public int area() {\n         return this.length * this.width;\n     }\n}复制ErrorOK!\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br")])]),s("p",[a._v('我们通过封装的方式，给"矩形"定义了"长度"和"宽度"，这就完成了对现实世界中的"矩形"的抽象的第一步。')]),a._v(" "),s("h3",{attrs:{id:"继承-inheritance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承-inheritance"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://hollischuang.gitee.io/tobetopjavaer/#/basics/object-oriented/characteristics?id=%E7%BB%A7%E6%89%BFinheritance",target:"_blank",rel:"noopener noreferrer"}},[a._v("继承(Inheritance)"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。")]),a._v(" "),s("p",[a._v("通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。继承的过程，就是从一般到特殊的过程。")]),a._v(" "),s("h4",{attrs:{id:"继承举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承举例"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://hollischuang.gitee.io/tobetopjavaer/#/basics/object-oriented/characteristics?id=%E7%BB%A7%E6%89%BF%E4%B8%BE%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[a._v("继承举例"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("我们想要定义一个正方形，因为已经有了矩形，所以我们可以直接继承Rectangle类，因为正方形是长方形的一种特例。")]),a._v(" "),s("div",{staticClass:"language-markup line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[a._v("/**\n * 正方形，继承自矩形\n */\nclass Square extends Rectangle {\n\n    /**\n     * 设置正方形边长\n     *\n     * @param length\n     */\n    public Square(int length) {\n        super(length, length);\n    }\n}复制ErrorOK!\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("p",[a._v('现实世界中，"正方形"是"矩形"的特例，或者说正方形是通过矩形派生出来的，这种派生关系，在面向对象中可以用继承来表达。')]),a._v(" "),s("h3",{attrs:{id:"多态-polymorphism"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多态-polymorphism"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://hollischuang.gitee.io/tobetopjavaer/#/basics/object-oriented/characteristics?id=%E5%A4%9A%E6%80%81polymorphism",target:"_blank",rel:"noopener noreferrer"}},[a._v("多态(Polymorphism)"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("所谓多态就是指一个类实例的相同方法在不同情形有不同表现形式。多态机制使具有不同内部结构的对象可以共享相同的外部接口。")]),a._v(" "),s("p",[a._v("这意味着，虽然针对不同对象的具体操作不同，但通过一个公共的类，它们（那些操作）可以通过相同的方式予以调用。")]),a._v(" "),s("p",[a._v("最常见的多态就是将子类传入父类参数中，运行时调用父类方法时通过传入的子类决定具体的内部结构或行为。")]),a._v(" "),s("p",[a._v("关于多态的例子，我们第二章中深入开展介绍。")]),a._v(" "),s("p",[a._v("在介绍了面向对象的封装、继承、多态的三个基本特征之后，我们基本掌握了对现实世界抽象的基本方法。")]),a._v(" "),s("p",[a._v('莎士比亚说："一千个读者眼里有一千个哈姆雷特"，说到对现实世界的抽象，虽然方法相同，但是运用同样的方法，最终得到的结果可能千差万别，那么如何评价这个抽象的结果的好坏呢？')]),a._v(" "),s("p",[a._v("这就要提到面喜爱那个对象的五大基本原则了，有了五大原则，我们参考他们来评价一个抽象的好坏。")])])}),[],!1,null,null,null);s.default=e.exports}}]);