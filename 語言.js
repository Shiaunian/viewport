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
    題("『貓』的英文是？", [
        { label:"cat", audio:"./audio/en/animals/cat.mp3" },
        { label:"cap", audio:"./audio/en/animals/cap.mp3" },
        { label:"cut", audio:"./audio/en/animals/cut.mp3" },
        { label:"car", audio:"./audio/en/animals/car.mp3" },
      ], 0),
    題("『狗』的英文是？", [
        { label:"dig", audio:"./audio/en/animals/cat.mp3" },
        { label:"dog", audio:"./audio/en/animals/cap.mp3" },
        { label:"dot", audio:"./audio/en/animals/cut.mp3" },
        { label:"dug", audio:"./audio/en/animals/car.mp3" },
      ], 1),
    題("『鳥』的英文是？", [
        { label:"born", audio:"./audio/en/animals/born.mp3" },
        { label:"bird", audio:"./audio/en/animals/bird.mp3" },
        { label:"board", audio:"./audio/en/animals/board.mp3" },
        { label:"beard", audio:"./audio/en/animals/beard.mp3" },
      ], 1),
    題("『魚』的英文是？", [
        { label:"dish", audio:"./audio/en/animals/dish.mp3" },
        { label:"finish", audio:"./audio/en/animals/finish.mp3" },
        { label:"fish", audio:"./audio/en/animals/fish.mp3" },
        { label:"fist", audio:"./audio/en/animals/fist.mp3" },
      ], 2),

    題("『老虎』的英文是？", [
        { label:"tiger", audio:"./audio/en/animals/tiger.mp3" },
        { label:"tighter", audio:"./audio/en/animals/tighter.mp3" },
        { label:"trigger", audio:"./audio/en/animals/trigger.mp3" },
        { label:"tinker", audio:"./audio/en/animals/tinker.mp3" },
      ], 0),

    題("『獅子』的英文是？", [
        { label:"listen", audio:"./audio/en/animals/listen.mp3" },
        { label:"lion", audio:"./audio/en/animals/lion.mp3" },
        { label:"linen", audio:"./audio/en/animals/linen.mp3" },
        { label:"lions", audio:"./audio/en/animals/lions.mp3" },
      ], 1),
    題("『大象』的英文是？", ["elegant", "element", "elephant", "elevator"], 2),
    題("『長頸鹿』的英文是？", ["giraffe", "graph", "guitar", "girlfriend"], 0),
    題("『熊』的英文是？", ["bear", "beer", "beard", "bare"], 0),
    題("『狼』的英文是？", ["wall", "wolf", "wool", "well"], 1),
    題("『狐狸』的英文是？", ["fox", "box", "fix", "fax"], 0),
    題("『鹿』的英文是？", ["deer", "dear", "door", "dare"], 0),
    題("『兔子』的英文是？", ["rabbit", "habit", "robot", "ribbon"], 0),
    題("『老鼠』的英文是？", ["mouth", "mouse", "mousse", "moose"], 1),
    題("『馬』的英文是？", ["hose", "horse", "house", "horde"], 1),
    題("『牛』的英文是？", ["cow", "crow", "crown", "clown"], 0),
    題("『羊』的英文是？", ["ship", "sheep", "shape", "shop"], 1),
    題("『山羊』的英文是？", ["goat", "goal", "gold", "goes"], 0),
    題("『豬』的英文是？", ["pig", "big", "pin", "pit"], 0),
    題("『雞』的英文是？", ["chick", "check", "chicken", "kitchen"], 2),
    題("『鴨子』的英文是？", ["duck", "dock", "deck", "dusk"], 0),
    題("『青蛙』的英文是？", ["frog", "flag", "frag", "free"], 0),
    題("『蛇』的英文是？", ["shake", "snack", "snake", "stake"], 2),
    題("『烏龜』的英文是？", ["turtle", "tunnel", "turnip", "tuple"], 0),
    題("『猴子』的英文是？", ["money", "monkey", "donkey", "honey"], 1),
    題("『猩猩』的英文是？", ["gorilla", "guerrilla", "gorgeous", "gloria"], 0),
    題("『斑馬』的英文是？", ["zebra", "zebras", "zero", "zither"], 0),
    題("『海豚』的英文是？", ["dolphin", "dollar", "domain", "darling"], 0),
    題("『鯊魚』的英文是？", ["shark", "share", "sharp", "shard"], 0),
    題("『鯨魚』的英文是？", ["while", "whale", "wheel", "whole"], 1),
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
