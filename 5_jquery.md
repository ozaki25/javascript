<!-- page_number: true -->

# jQuery
* jQueryとは
* jQueryを書く準備
* DOM要素
* セレクタ
* 属性の操作
* Manipulation
* Events
* Effects
* Ajax
* thisについて

---

## jQueryとは
* JavaScriptのライブラリ
* JavaScriptで書くと面倒な処理を簡単に使えるようにしてくれるもの

---

## jQueryを書く準備
* ファイルを読み込む
* JavaScriptファイルの雛形
* JavaScriptのHelloWorld
* jQueryのサンプル

---

### ファイルを読み込む
* JavaScriptファイル読み込む記述をhtmlに追加する
  * jsフォルダにjquery.jsという名前でjQueryを、main.jsという名前で独自JavaScriptファイルを配置している
  * main.jsにjQueryを使ったコードを書いていく
  * main.jsはjQueryに依存するためjQueryより後に読み込む必要がある
```html
<html>
  <head>
    <script type="text/javascript" src="./js/jquery.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
  </head>
  <body>
  ...
  </body>
</html>
```

---

### JavaScriptファイルの雛形
* main.jsに以下の内容を書く
* $にjQueryオブジェクトが詰まってる
* $(function() {   }); の中に処理を書いていく
  * 囲われている中はhtmlを全て読み込んでから処理が動く

```javascript
$(function() {
　・・・
});
```

---

### JavaScriptのHelloWorld
* 以下の内容のファイルを用意してhtmlをブラウザで開く
```html
<!DOCTYOE html>
<html>
  <head>
    <title>javascript研修</title>
    <meta charset="utf-8" />
    <script type="text/javascript" src="./js/jquery.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```
```javascript
$(function() {
  alert('Hellow World');
});

```
---

### jQueryのサンプル
* 直感的なコードなので実物を見た方が分かりやすい
* idが`sample`の要素を`click`するとクリック！というアラートが表示される
* html
  ```html
  <button id="sample">ボタン</button>
  ```
* js
  ```javascript
  $('#sample').click(function(){
      alert('クリック！')
  });
  ```

---

## DOM
* DOMとは
  * Document Object Model
  * htmlタグをJavaScriptで扱えるようにするしくみ
* DOM要素
  * JavaScriptで扱える状態になったhtmlタグのこと

---

## セレクタ
* html内のどのタグに対して操作するのか特定するしくみ
  * htmlタグをjQueryのDOM要素として扱うことができるようになる
  * htmlタグやid,class等の属性を使って特定することができる

---

```html
<p id="sample1" class="sample2" name="sample3">サンプル</p>

```
* 要素で指定する
```$('p')```
* idで指定する
```$('#sample1')```
* classで指定する
```$('.sample2')```
* その他の属性で指定する
```$('[name="sample3"]')```
* 組み合わせて指定する
```$('p.sample2')```
* これ以外にもいろいろな指定のしかたがる
---

## Attributes
* DOM要素から属性を取得・設定する
* html
  ```html
  <input type="text" id="sample1" class="sample2" name="sample3" />
  ```
* js
  ```javascript
  var id = $('input').attr('id');
  ```

---