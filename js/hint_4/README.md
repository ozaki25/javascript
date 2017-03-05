# ヒント４

* 入力域の下にメッセージを表示する
* メッセージにはclass属性にerror-messageを設定する
  * メッセージの作成
    * createElement()とcreateTextNode()を使ってメッセージを作成する
    * setAttribute()でclass属性にerror-messageを追加する
  * メッセージを追加する
    * 入力域の下に追加するためには、入力域の親要素を取得してその最後尾に追加する
    * 親要素はtarget.parentNodeのようにして取得できる
    * appendChild()で追加する
