<!-- page_number: true -->

# JavaScript
* JavaScriptとは
* 動作環境を整える
* JavaScriptの基本構文

---

## JavaScriptとは
* JavaScriptとは
  * クライアントサイドのプログラミング言語
  * ブラウザ上で動作する
  * 動的型付け言語
* 特徴
  * クライアントサイドでロジックが書ける
  * htmlを操作することができる

---

## 動作環境を整える
* ブラウザのコンソールで動作確認
* デバッグの方法

---

### ブラウザのコンソールで動作確認
* ブラウザの開発者ツールのコンソールでJavaScriptを実行することができる
  1. IEを開く
  1. F12を押下し開発者ツールを開く
  1. コンソールを選択する
  1. ここでJavaScriptを実行できる
* キャプチャ

---

### デバッグの方法
* JavaでいうSystem.out.println();
* console.log
  * ブラウザのコンソール上に表示される
  * 複雑なオブジェクトを見る時に便利
  * 例： console.log('test');
* alert
  * 画面上にアラートが表示される
  * アラートを閉じるまで処理が止まるので便利
  * 例：alert('test');

---

* ブレイクポイントを入れる
  * debugger
    * 処理を中断させ変数の値等をブラウザの開発者ツールで確認できる
      ```javascript
      (function() {
        var a = 1;
        debugger;
        a = 5;
        debugger;
      }());
      ```

---

## JavaScriptの基本構文

* 変数
* 型
* 演算子
* 真偽値
* if文
* for文
* 関数
* 配列
* オブジェクト

---

### 変数
* 変数の宣言
  * varをつける
  * varがないとグローバル変数になってしまうので注意
  * Javaとは違い全てvarで宣言する
    ```javascript
    var name = 'test';
    var count = 1;
    var isAdmin = true;
    ```

---

### 型
* Javaのように明示的に型の指定はしないが型は存在する
  * 文字列
  * 数値
  * 真偽値
  * オブジェクト
  * 配列
  * null
    * 何もないという情報が代入されている
  * undefined
    * 入れ物だけで何も代入されていない

---

  ```javascript
  var s = '文字列';
  console.log(s); // 文字列

  var i = 100;
  console.log(i); // 100

  var b = true;
  console.log(b); // true

  var o = { a: 1, b: 2 };
  console.log(o); // { a: 1, b: 2 }

  var a = ['x', 'y', 'z'];
  console.log(a); // ["x", "y", "z"]

  var n = null;
  console.log(n); // null

  var u;
  console.log(u); // undefined
  ```

---

### 演算子
* ほとんどJavaと同じ
* 四則演算
  * \+ - * / %
* 代入演算
  * += -=
    ```javascript
    var x = 3;
    x += 2; // x = x + 2; と同じ
    console.log(x); // 5
    ```
* 単項演算子
  * ++ --
    ```javascript
    var x = 3;
    x++; // x = x + 1; と同じ
    console.log(x); // 4
    ```
* 論理演算
  * && ||

---

* 比較演算
  * < > <= >=
  * == ===
* \==(等価演算子)と===(厳密等価演算子)の違い
  * ==は勝手に型変換して処理してしまう
  * 基本的に===を使うようにすると予期せぬ動きを防げる
    ```javascript
    console.log(1 == '1'); // true
    console.log(1 === '1'); // false
    ```
  * 否定の場合は !== を使う
    ```javascript
    console.log(1 != '1'); // false
    console.log(1 !== '1'); // true
    ```

---

### (真偽値)
* javascriptでは全ての値が真偽値(true/false)となる
* falseになるもの
  * 文字列
    * 空文字の場合
  * 数値
    * 0かNANの場合
  * null
  * undefined

---

```javascript
var s1 = "文字列";
var s2 = "";

if(s1) {
  console.log(s1 + 'はtrue');
} else {
  console.log(s1 + 'はfalse');
}
// 文字列はtrue

if(s2) {
  console.log(s2 + 'はtrue');
} else {
  console.log(s2 + 'はfalse');
}
// はfalse
```

---

### if文
* Javaと同じ
* if文
  ```javascript
  var isAdmin = true;
  if(isAdmin) {
    alert('admin!');
  } else {
    alert('not admin');
  }
  ```
* 三項演算子
  * 処理が1行で終わるif-else文は三項演算子で表現できる
  ```javascript
  var isAdmin = true;
  isAdmin ? alert('admin!') : alert('not admin');
  // (条件式) ? (trueの時の処理) : (falseの時の処理);
  ```

---

### for文
* Javaと同じ
  ```javascript
  for(i = 0; i < 3; i++) {
    console.log(i);
  }
  // 0
  // 1
  // 2
  ```

---

### 関数
* Javaでいうメソッドのようなもの
* 関数宣言と関数式の2種類の定義のしかたがある
* 関数宣言
    ```javascript
    function add(a, b) {
      return a + b;
    }

    var result = add(1, 2);
    console.log(result); // 3
    ```
* 関数式
    ```javascript
    var add = function(a, b) {
      return a + b;
    }

    var result = add(1, 2);
    console.log(result); // 3
    ```

---

### 配列
* 配列の定義・操作
  ```javascript
  var array1 = ['a', 'b', 'c'];
  console.log(array1[0]); // a

  array1.push('d');
  console.log(array1); // ["a", "b", "c", "d"]
  ```
* ループ処理
  ```javascript
  var array2 = ['a', 'b', 'c'];
  array2.forEach(function(x) {
    console.log(x);
  });
  // a
  // b
  // c
  ```

---

### オブジェクト
* オブジェクトの定義・操作
  ```javascript
  var user = { name: 'test', age: 25 };

  console.log(user.name);    // test
  console.log(user['name']); // test

  user.dept1 = 'itp';
  console.log(user); // {name: "test", age: 25, dept1: "itp"}

  user['dept2'] = '技術企画';
  console.log(user); // {name: "test", age: 25, dept1: "itp", dept2: "技術企画"}

  ```

---
