<!-- page_number: true -->

# jQuery
* jQueryとは
* jQueryのコードを書く

---

## jQueryとは
* JavaScriptのライブラリ
* JavaScriptで書くと面倒な処理を簡単に使えるようにしてくれるもの

---

## jQueryのコードを書く
* 事前準備
* jQueryのサンプル
* jQueryいろいろ

---

### 事前準備
* jQueryを読み込む
* jsを読み込む
* jsの雛形

---

#### jQueryを読み込む
* htmlにjQueryを配置しているパスを書いてで読み込ませる
```html
<html>
  <head>
    <script type="text/javascript" src="./js/jquery.js" />
  </head>
  <body>
  ...
  </body>
</html>
```

---

#### jsを読み込む
* javascriptのファイルを作成しjQueryと同様に読み込ませる
  * ここではjsフォルダにmain.jsを作成
  * 読み込む記述はjQueryの読み込みより後ろに書く！

```html
<html>
  <head>
    <script type="text/javascript" src="./js/jquery.js" />
    <script type="text/javascript" src="./js/main.js" />
  </head>
  <body>
  ...
  </body>
</html>
```

---

#### jsの雛形
* main.jsに以下の内容を書く
* $にjQueryオブジェクトが詰まってる
* $(function() { }); の中に処理を書いていく
  * 囲われている中はhtmlを全て読み込んでから処理が動く

```javascript
$(function() {
　・・・
});
```

---

### jQueryのサンプル
* 直感的なコードなので実物を見た方が分かりやすい
* classが`sample`の`button`を`click`するとクリック！というアラートが表示される
* html
  ```html
  <button class="sample">ボタン</button>
  ```
* js
  ```javascript
  $('button.sample').click(function(){
      alert('クリック！')
  });
  ```

---

### jQueryいろいろ
* Selectors
* Attributes
* Manipulation
* Events
* Effects
* Ajax
* thisについて

---

#### Selectors
* htmlのどの部分に対して操作するのか指定する
  * htmlタグをjQueryのDOM要素として扱うことができるようになる

---

* 要素で指定する
```<p>要素で指定する</p>```
```$('p')```
* idで指定する
```<p id="sample1">idで指定する</p>```
```$('#sample1')```
* classで指定する
```<p class="sample2">idで指定する</p>```
```$('.sample2')```
* その他の属性で指定する
```<p name="sample3">nameで指定する</p>```
```$('[name="sample3"]')```
* 組み合わせて指定する
```<p class="sample4">要素とclassで指定する</p>```
```$('p.sample2')```

---

#### Attributes
* DOM
  * htmlのタグをJavaScriptで扱えるようにしたもの

---

* DOM要素から属性を取得する
* html
  ```html
  <input type="text" id="sample1" class="sample2" name="sample3" />
  ```
* js
  ```javascript
  var id = $('input').attr('id');
  ```

