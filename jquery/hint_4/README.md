# ヒント４

* 入力域の下にメッセージを表示する
* メッセージにはclass属性にerror-messageを設定する
  * メッセージの作成
    * $('<div>')のようにして要素を作成する
    * .text('テキスト')のようにしてテキストを追加する
    * .addClass('クラス名')のようにしてクラス属性を追加する
  * メッセージを追加する
    * 入力域の下に追加するためには、入力域の親要素を取得してその最後尾に追加する
    * 親要素は.parent()で取得できる
    * append('追加する要素')で追加できる