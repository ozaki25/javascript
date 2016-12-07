<!-- page_number: true -->

# jQuery
* jQueryとは
* jQueryを書く準備
* DOM
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
* 汎用的に使われる処理を事前に用意してくれている
* 特にhtmlの要素の追加や変更を簡潔に書くことができて便利

---

## jQueryを書く準備
* 用意してあるファイルの確認
* ファイルを読み込む
* jQueryを書く時の雛形
* JavaScriptのHelloWorld
* jQueryのサンプル

---

### 用意してあるファイルの確認

```
jquery/index.html
jquery/js/jquery.js
jquery/js/app.js
```
* app.jsとindex.htmlを編集していきます

---

### ファイルを読み込む
* index.htmlのheadにJavaScriptファイルを読み込む記述を追加する
* app.jsの中でjQueryを使用する(app.jsはjQueryに依存する)のでapp.jsはjQueryより後に読み込む
```html
<script type="text/javascript" src="./js/jquery.js"></script>
<script type="text/javascript" src="./js/app.js"></script>
```

---

### jQueryを書く時の雛形
* jQueryのメソッドを呼ぶ時は$を使う
  * $という変数にjQueryオブジェクトが詰まってる
* $(function() { ・・・ }); の中に処理を書いていく
  * こうすることでhtmlを全て読み込んでから処理が動く

```javascript
$(function() {
　・・・
});
```

---

### JavaScriptのHelloWorld
* index.htmlをブラウザで開くとalertが表示されます
```html
<!DOCTYOE html>
<html>
  <head>
    <title>javascript研修</title>
    <meta charset="utf-8" />
    <script type="text/javascript" src="./js/jquery.js"></script>
    <script type="text/javascript" src="./js/app.js"></script>
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
* これ以外にもいろいろな指定のしかたがある
---

### セレクタを使ってみる
* 



---

## 属性の操作
* 属性を取得したり設定することができる

---

### attr
* あらゆる属性を取得・設定できる
* 使い方
  * 属性を取得する
  `$('セレクタ').attr('属性名');`
  * 属性を設定する
  `$('セレクタ').attr('属性名', '値');`  
* 使用例
  ```html
  <input type="text" id="attr_sample" class="attr" />
  ```
  ```javascript
  var id1 = $('.attr').attr('id');
  console.log(id1); // attr_sample

  $('.attr').attr('id', 'attr_sample2');
  var id2 = $('.attr').attr('id');
  console.log(id2); // attr_sample2
  ```

---

### val
* value属性を取得・設定できる
* 使い方
  * value属性を取得する
  `$('セレクタ').val();`
  * 属性を設定する
  `$('セレクタ').val('値');`  
* 使用例
  ```html
  <input type="text" id="val_sample" value="default value" />
  ```
  ```javascript
  var val1 = $('#val_sample').val();
  console.log(val1); // default value

  $('#val_sample').val('change');
  var val2 = $('#val_sample').val();
  console.log(val2); // change
  ```

---

---
