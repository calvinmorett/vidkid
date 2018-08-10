{"nodeMap":{"nodeMap":{"n2":{"n3":1,"n4":1}},"portMap":{"n2.x":{"n3.x":true},"n2.y":{"n4.y":true}},"inputsMap":{"n3.x":{"n2.x":true},"n4.y":{"n2.y":true}},"values":{"n2":{"x":1115,"y":25},"n3":{"x":"1115"},"n4":{"y":"25"}},"nextId":5,"nodeOrder":["n2","n3","n4"],"byId":{"n2":{"id":"n2","rev":0,"text":"class Mouse extends N {\n\tstatic get type() { return N.HARDWARE }\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"x\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"y\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"x\", \"y\", \"x%\", \"y%\"];\n\t}\n\n\tonMouseMove(event) {\n\t\tthis.setAttribute(\"x\", event.clientX);\n\t\tthis.setAttribute(\"y\", event.clientY);\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase \"x\":\n\t\t\t\tthis.send(\"x\", newValue);\n\t\t\t\tthis.send(\"x%\", newValue / window.innerWidth);\n\t\t\t\tbreak;\n\n\t\t\tcase \"y\":\n\t\t\t\tthis.send(\"y\", newValue);\n\t\t\t\tthis.send(\"y%\", newValue / window.innerHeight);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tconnectedCallback() {\n\t\tthis.boundOnMouseMove = this.onMouseMove.bind(this);\n\t\tdocument.addEventListener(\"mousemove\", this.boundOnMouseMove);\n\t}\n\n\tdisconnectedCallback() {\n\t\tdocument.removeEventListener(\"mousemove\", this.boundOnMouseMove);\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}},"n3":{"id":"n3","rev":3,"text":"class X extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'x',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 'x',\n\t\t\t\trestrict: String\n\t\t\t}\n\t\t]\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t  this.screen.getElementById('x').innerText = newValue\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}},"n4":{"id":"n4","rev":3,"text":"class Y extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'y',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 'y',\n\t\t\t\trestrict: String\n\t\t\t}\n\t\t]\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t  this.screen.getElementById('y').innerText = newValue\n\t}\n}","templateHTML":null,"templateCSS":null,"transforms":{}}},"chainPool":{"nodeIdToChainId":{},"nextChainId":0,"pool":{}}},"editingNodeId":null,"editingPage":false,"selectedConnection":null,"connecting":null,"pageHTML":"<body>\n    <div>\n        <span id=\"x\"></span>&times;<span id=\"y\"></span>\n    </div>\n</body>","pageCSS":"body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 14pt;\n\tfont-family: Helvetica, sans-serif;\n\tfont-weight: bold;\n\tcolor: white;\n\tbackground: black;\n\tfont-size: 18vw;\n}\n\ndiv {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}","nodeUIMap":{"n0":{"pos":[480,202]},"n1":{"pos":[52,42]},"n2":{"pos":[54,53]},"n3":{"pos":[375,39]},"n4":{"pos":[378,104]}},"fullscreen":false}