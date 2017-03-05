# ヒント６

* すでにメッセージが表示されている場合は追加で表示しないようにする
  * getElementsByClassName('クラス名')でメッセージを取得する
  * document.getElementsByClassName()とすると文書全体から検索し他の項目に対するメッセージも取得してしまうので、必須項目の親要素内で検索する
    * 親要素はtarget.parentNodeのようにして取得できるのでそれに対してgetElementByClassName()をする
  * メッセージの要素があるかどうかのif文を追加する
    * .lengthで要素数が取得できる
