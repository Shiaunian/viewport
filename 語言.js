/* 語言.js（完整可用版）
 * 目標：
 * 1) 一支 JS 裝下「語言」主分類底下：英文/日文/韓文 的各種次分類題庫
 * 2) 題庫內容掛在 window.QUESTION_BANK[bankKey]
 * 3) 分類樹掛在 window.分類樹，供 exam.html 的三層選單使用
 */

(function () {
  "use strict";

  window.QUESTION_BANK = window.QUESTION_BANK || {};
  window.分類樹 = window.分類樹 || {};

  // ==========
  // 分類樹：主分類「語言」（主->子->次=bankKey）
  // ==========
  window.分類樹["語言"] = {
    "英文": {
      "動物類單字": "語言/英文/動物類單字",
      "基礎文法": "語言/英文/基礎文法",
      "日常會話": "語言/英文/日常會話"
    },
    "日文": {
      "五十音": "語言/日文/五十音",
      "日常會話": "語言/日文/日常會話"
    },
    "韓文": {
      "單字入門": "語言/韓文/單字入門",
      "日常會話": "語言/韓文/日常會話"
    }
  };

  function 題(text, options, answer, image, audio) {
    const obj = { text, options, answer };
    if (image) obj.image = image;
    if (audio) obj.audio = audio;
    return obj;
  }

  // --- 英文：動物類單字 ---
  window.QUESTION_BANK["語言/英文/動物類單字"] = [
    題("『貓』的英文是？", ["cat", "dog", "bird", "fish"], 0),
    題("『狗』的英文是？", ["duck", "dog", "frog", "cow"], 1),
    題("tiger 是什麼？", ["老虎", "獅子", "豹", "狼"], 0),
    題("zebra 是什麼？", ["斑馬", "河馬", "水牛", "馴鹿"], 0),
    題("『熊』的英文是？", ["bear", "beer", "dear", "boar"], 0),
    題("『狐狸』的英文是？", ["fox", "box", "fix", "fax"], 0)
  ];

  // --- 英文：基礎文法 ---
  window.QUESTION_BANK["語言/英文/基礎文法"] = [
    題("I ___ a student.", ["am", "is", "are", "be"], 0),
    題("She ___ coffee every day.", ["drink", "drinks", "drank", "drinking"], 1),
    題("They ___ to school yesterday.", ["go", "goes", "went", "gone"], 2),
    題("We ___ happy now.", ["is", "am", "are", "be"], 2)
  ];

  // --- 英文：日常會話 ---
  window.QUESTION_BANK["語言/英文/日常會話"] = [
    題("「你好吗？」最常見英文是？", ["How are you?", "Who are you?", "Where are you?", "What are you?"], 0),
    題("「沒關係」英文是？", ["No problem.", "No money.", "No homework.", "No tomorrow."], 0),
    題("「不好意思/打擾一下」常用英文是？", ["Excuse me.", "Execute me.", "Exciting me.", "Exclusive me."], 0)
  ];

  // --- 日文：五十音 ---
  window.QUESTION_BANK["語言/日文/五十音"] = [
    題("「あ」的羅馬拼音是？", ["a", "i", "u", "e"], 0),
    題("「き」的羅馬拼音是？", ["ka", "ki", "ku", "ke"], 1),
    題("「そ」的羅馬拼音是？", ["sa", "so", "se", "su"], 1),
    題("「ん」最接近的發音是？", ["n", "m", "r", "t"], 0)
  ];

  // --- 日文：日常會話 ---
  window.QUESTION_BANK["語言/日文/日常會話"] = [
    題("「早安」日文最常用的是？", ["こんばんは", "おはよう", "ありがとう", "すみません"], 1),
    題("「謝謝」是？", ["ありがとう", "ごめん", "さようなら", "いただきます"], 0),
    題("「對不起」常見說法是？", ["すごい", "ごめんなさい", "おいしい", "たのしい"], 1)
  ];

  // --- 韓文：單字入門 ---
  window.QUESTION_BANK["語言/韓文/單字入門"] = [
    題("「안녕하세요」大概意思是？", ["再見", "你好", "謝謝", "沒關係"], 1),
    題("「감사합니다」是？", ["對不起", "謝謝", "你好", "請"], 1),
    題("「죄송합니다」是？", ["謝謝", "對不起", "你好", "便宜"], 1)
  ];

  // --- 韓文：日常會話 ---
  window.QUESTION_BANK["語言/韓文/日常會話"] = [
    題("「괜찮아요」意思是？", ["沒關係", "很貴", "很好吃", "快點"], 0),
    題("「얼마예요?」意思是？", ["在哪裡？", "多少錢？", "要不要？", "可以嗎？"], 1),
    題("「맛있어요」意思是？", ["很好吃", "很漂亮", "很累", "很冷"], 0)
  ];
})();
