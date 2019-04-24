# H5拖拽

### **文件说明**
* `1.html`              将物体拖动到目标区域
* `2.html`              兼容火狐
* `3 datatransfer.html` 设置拖动时鼠标状态，和图片
* `4 files.html`        将物体拖动到目标区域,显示到下方
* [拖拽上传图片并保存到后台(Flask)](https://segmentfault.com/a/1190000018959654?_ea=10170446) 详细讲解


- [x] `draggable` 设置为true, 元素就可以拖拽了

### **拖放事件**
* 拖拽元素事件: 事件对象为被拖拽元素
  * dragstart
  * drag
  * dragend
* 目标元素事件: 事件对象为目标元素
  * dragenter
  * dragover   enter和leave之间连续触发
  * dragleave
  * drop  **`要想触发drop,必须在dragover中阻止默认事件`**

### **解决FF下不能拖拽**
    必须设置dataTransfer对象的setData方法才可以拖拽除图片外的其他标签

* dataTransfer 对象
  * setData(): 设置数据key和value(必须是字符串)
  * getData():获取数据，根据key值，获取对应的value
  * effectAllowed: 设置光标样式(none,copy,copyLink,copyMove,link,linkMove,move,all,uninitialized) **`只在页面内拖动元素时生效`**
  * setDragImage: 三个参数(指定的元素, X坐标, Y坐标)
  * files
    * 获取外部的拖拽文件, 返回一个filesList列表
    * filesList下有个type属性, 返回文件的类型

* FileReader(读取文件信息): `new FileReader()`
  * readAsDataURL: 参数为要读取的文件对象，将文件读取为DataUrl
  * onload 
    * 当读取文件成功触发此事件
    * this.result, 来获取读取的文件数据, 如果是图片,将返回base64格式的图片数据
  * 一般用来: 拖拽删除、拖拽购物车、上传图片预览功能


