<!-- page_number: true -->

# JavaScript
* JavaScriptとは
* JavaScriptでできること
* JavaScriptを書いてみる

---

## JavaScriptとは
* クライアント言語
* 動的型付け言語
  * 型推論

---

## JavaScriptでできること
* クライアントサイドでロジックが書ける
* htmlを操作することができる

---

## JavaScriptを書いてみる
* ブラウザで動作確認
* デバッグの方法
* 演算子
* 変数
* 型推論
* 関数
* 配列・オブジェクト
* if
* forEach
* function

---

### ブラウザで動作確認
* ブラウザの開発者ツールのコンソールでJavaScriptを実行することができる
  1. IEを開く
  1. F12を押下し開発者ツールを開く
  1. コンソールを選択する
  1. ここでJavaScriptを実行できる
* キャプチャ

---

### デバッグの方法
* 変数の中身を確認する
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

## 演算子
* ほとんどJavaと同じ
* 四則演算
  * \+ - * / %
* 比較演算
  * < > <= >= == !== === !==
* 代入演算
  * += -=
* 論理演算
  * && ||

---

* == と ===の違い
  * ==は勝手に型変換して処理してしまうので注意
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

### 変数
* 変数を宣言する時はvarを使う
  * varをつけないとグローバル変数になってしまうので注意
  * Javaとは違い全てvarで宣言する
    ```javascript
    var name = 'test';
    var count = 1;
    var isAdmin = true;
    ```

---

## 型推論
* Javaのように明示的に型の指定はしないが型は存在する
  * typeof演算子で確認できる
    ```javascript
	var moji = '文字列';
    console.log(typeof string); // string

    var int = 1;
    console.log(typeof int); // number

    var bool = true;
    console.log(typeof bool); // boolean

    var obj = { a: 1 };
    console.log(typeof obj); // object

    var func = function() {  };
    console.log(typeof func); // function

    // 未定義の変数
    console.log(typeof test); // undefind
    ```

---

### 関数
* Javaでいうメソッドのようなもの
  * 引数をとることができる(a, b)
  * 値を返すことができる(return)
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

* (関数宣言と関数式の違い)
  * 関数宣言
    ```javascript
    add(1, 2); // エラーにならない

    function add(a, b) {
      return a + b;
    }
    ```
  * 関数式
    ```javascript
    add(1, 2); // エラーになる

    var add = function(a, b) {
      return a + b;
    }
    ```

---

### 配列
* 扱い方
  ```javascript
  var users = ['a', 'b', 'c'];
  console.log(users[0]); // a

  users.push('d');
  console.log(users); // ["a", "b", "c", "d"]
  ```
* ループ処理
  ```javascript
  var users = ['a', 'b', 'c'];
  users.forEach(function(user) {
    console.log(user);
  });
  // a
  // b
  // c
  ```


---

### オブジェクト
* 扱い方
  ```javascript
  var user = { name: 'test', age: 25 };
  console.log(user.name); // test
  console.log(user['name']); // test

  user.dept1 = 'itp';
  console.log(user); // {name: "test", age: 25, dept1: "itp"}

  user['dept2'] = '技術企画';
  console.log(user); // {name: "test", age: 25, dept1: "itp", dept2: "技術企画"}

  ```

---

### if文
  ```javascript
  var isAdmin = true;
  if(isAdmin) {
    alert('admin!');
  } else {
    alert('not admin');
  }
  ```

---

### for文
  ```javascript
  for(i = 0; i < 3; i++) {
    console.log(i);
  }
  // 0
  // 1
  // 2
  ```

---
