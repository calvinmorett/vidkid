{"nodeMap":{"nodeMap":{"n1":{"n0":1,"n2":1,"n3":1,"n4":1}},"portMap":{"n1.value":{"n0.move":true,"n2.move":true,"n3.move":true,"n4.move":true}},"inputsMap":{"n0.move":{"n1.value":true},"n2.move":{"n1.value":true},"n3.move":{"n1.value":true},"n4.move":{"n1.value":true}},"values":{"n1":{"value":54},"n0":{"selector":"#box","move":"54"},"n2":{"selector":"#box2","move":"54"},"n3":{"selector":"#box3","move":"54"},"n4":{"selector":"#box4","move":"54"}},"nextId":5,"nodeOrder":["n0","n2","n3","n4","n1"],"byId":{"n1":{"id":"n1","rev":0,"text":"class ValueNumber extends N {\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t  {\n\t\t\t\t  name: 'value',\n\t\t\t\t  observe: true,\n\t\t\t\t  defaultValue: 0,\n\t\t\t\t  restrict: Number\n\t\t\t  }\n\t\t  ]\n\t  }\n\n\t  static get outputs() {\n\t\treturn ['value']\n\t  }\n\n\t  onAttrChanged(name, oldValue, newValue) {\n\t\tthis.send('value', newValue);\n\t  }\n}","templateHTML":null,"templateCSS":null,"transforms":{}},"n0":{"id":"n0","rev":9,"text":"class MoveEl extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'move',\n\t\t\t    observe: true,\n\t\t\t    control: N.button()\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    switch(name) {\n\t        case 'move':\n\t            let el = this.getEl();\n                if(!el) return;\n                \n                let x = Math.random() * 80;\n                let y = Math.random() * 80;\n                \n                el.style.left = x + '%'\n\t            el.style.top = y + '%'\n\t            el.style.transform = 'scale(' + Math.random() * 2 + ')'\n                \n                break;\n\t    }\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}},"n2":{"id":"n2","rev":0,"text":"class MoveEl extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'move',\n\t\t\t    observe: true,\n\t\t\t    control: N.button()\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    switch(name) {\n\t        case 'move':\n\t            let el = this.getEl();\n                if(!el) return;\n                \n                let x = Math.random() * 80;\n                let y = Math.random() * 80;\n                \n                el.style.left = x + '%'\n\t            el.style.top = y + '%'\n\t            el.style.transform = 'scale(' + Math.random() * 2 + ')'\n                \n                break;\n\t    }\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}},"n3":{"id":"n3","rev":0,"text":"class MoveEl extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'move',\n\t\t\t    observe: true,\n\t\t\t    control: N.button()\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    switch(name) {\n\t        case 'move':\n\t            let el = this.getEl();\n                if(!el) return;\n                \n                let x = Math.random() * 80;\n                let y = Math.random() * 80;\n                \n                el.style.left = x + '%'\n\t            el.style.top = y + '%'\n\t            el.style.transform = 'scale(' + Math.random() * 2 + ')'\n                \n                break;\n\t    }\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}},"n4":{"id":"n4","rev":0,"text":"class MoveEl extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'move',\n\t\t\t    observe: true,\n\t\t\t    control: N.button()\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    switch(name) {\n\t        case 'move':\n\t            let el = this.getEl();\n                if(!el) return;\n                \n                let x = Math.random() * 80;\n                let y = Math.random() * 80;\n                \n                el.style.left = x + '%'\n\t            el.style.top = y + '%'\n\t            el.style.transform = 'scale(' + Math.random() * 2 + ')'\n                \n                break;\n\t    }\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}}},"chainPool":{"nodeIdToChainId":{},"nextChainId":0,"pool":{}}},"editingNodeId":null,"editingPage":false,"selectedConnection":null,"connecting":null,"pageHTML":"<body>\n    <div id=\"box\" class=\"box\"></div>\n    <div id=\"box2\" class=\"box\"></div>\n    <div id=\"box3\" class=\"box\"></div>\n    <div id=\"box4\" class=\"box\"></div>\n</body>","pageCSS":"body {\n\tbackground: black;\n\tpadding: 0;\n\tmargin: 0;\n\tcolor: white;\n\ttransition: transform 1s;\n}\n\n.box {\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\twidth: 400px;\n\theight: 400px;\n\tborder-radius: 400px;\n\tbackground: red;\n\ttransition: top 0.2s, left 0.2s, transform 0.2s;\n\topacity:.9;\n\tbackground-blend-mode: multiply;\n}\n\n#box {\n\tbackground: white;\n}\n\n#box2 {\n\tbackground: magenta;\n}\n\n#box3 {\n\tbackground: cyan;\n}\n\n#box4 {\n\tbackground: yellow;\n}","nodeUIMap":{"n0":{"pos":[403,29],"control":{"selector":true}},"n1":{"pos":[59,47],"control":{"value":true}},"n2":{"pos":[405,141],"control":{"selector":true}},"n3":{"pos":[404,252],"control":{"selector":true}},"n4":{"pos":[404,372],"control":{"selector":true}}},"fullscreen":false}