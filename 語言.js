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
        { label:"請聆聽", audio:"./audio/en/animals/cat.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/cap.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/cut.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/car.mp3" },
      ], 0),
    題("『鳥』的英文是？", [
        { label:"請聆聽", audio:"./audio/en/animals/born.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/bird.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/board.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/beard.mp3" },
      ], 1),
    題("『魚』的英文是？", [
        { label:"請聆聽", audio:"./audio/en/animals/dish.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/finish.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/fish.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/fist.mp3" },
      ], 2),

    題("『老虎』的英文是？", [
        { label:"請聆聽", audio:"./audio/en/animals/tiger.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/tighter.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/trigger.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/tinker.mp3" },
      ], 0),

    題("『獅子』的英文是？", [
        { label:"請聆聽", audio:"./audio/en/animals/listen.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/lion.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/linen.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/lions.mp3" },
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
  
  window.QUESTION_BANK["語言/韓文/動物類"] = [
    題("『貓』的韓文是？", [
      { label:"고양이", audio:"./audio/韓文/動物類/고양이.mp3" },
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
    ], 0),

    題("『狗』的韓文是？", [
      { label:"새", audio:"./audio/韓文/動物類/새.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
    ], 3),

    題("『鳥』的韓文是？", [
      { label:"물고기", audio:"./audio/韓文/動物類/물고기.mp3" },
      { label:"새", audio:"./audio/韓文/動物類/새.mp3" },
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
      { label:"토끼", audio:"./audio/韓文/動物類/토끼.mp3" },
    ], 1),

    題("『魚』的韓文是？", [
      { label:"물고기", audio:"./audio/韓文/動物類/물고기.mp3" },
      { label:"새", audio:"./audio/韓文/動物類/새.mp3" },
      { label:"토끼", audio:"./audio/韓文/動物類/토끼.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
    ], 0),

    題("『老虎』的韓文是？", [
      { label:"사자", audio:"./audio/韓文/動物類/사자.mp3" },
      { label:"호랑이", audio:"./audio/韓文/動物類/호랑이.mp3" },
      { label:"늑대", audio:"./audio/韓文/動物類/늑대.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
    ], 1),

    題("『獅子』的韓文是？", [
      { label:"사자", audio:"./audio/韓文/動物類/사자.mp3" },
      { label:"호랑이", audio:"./audio/韓文/動物類/호랑이.mp3" },
      { label:"여우", audio:"./audio/韓文/動物類/여우.mp3" },
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
    ], 0),

    題("『大象』的韓文是？", [
      { label:"기린", audio:"./audio/韓文/動物類/기린.mp3" },
      { label:"코끼리", audio:"./audio/韓文/動物類/코끼리.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"염소", audio:"./audio/韓文/動物類/염소.mp3" },
    ], 1),

    題("『長頸鹿』的韓文是？", [
      { label:"기린", audio:"./audio/韓文/動物類/기린.mp3" },
      { label:"코끼리", audio:"./audio/韓文/動物類/코끼리.mp3" },
      { label:"사슴", audio:"./audio/韓文/動物類/사슴.mp3" },
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
    ], 0),

    題("『熊』的韓文是？", [
      { label:"호랑이", audio:"./audio/韓文/動物類/호랑이.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"늑대", audio:"./audio/韓文/動物類/늑대.mp3" },
      { label:"여우", audio:"./audio/韓文/動物類/여우.mp3" },
    ], 1),

    題("『狼』的韓文是？", [
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
      { label:"늑대", audio:"./audio/韓文/動物類/늑대.mp3" },
      { label:"여우", audio:"./audio/韓文/動物類/여우.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
    ], 1),

    題("『狐狸』的韓文是？", [
      { label:"여우", audio:"./audio/韓文/動物類/여우.mp3" },
      { label:"늑대", audio:"./audio/韓文/動物類/늑대.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"사슴", audio:"./audio/韓文/動物類/사슴.mp3" },
    ], 0),

    題("『鹿』的韓文是？", [
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
      { label:"염소", audio:"./audio/韓文/動物類/염소.mp3" },
      { label:"사슴", audio:"./audio/韓文/動物類/사슴.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
    ], 2),

    題("『兔子』的韓文是？", [
      { label:"토끼", audio:"./audio/韓文/動物類/토끼.mp3" },
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
      { label:"고양이", audio:"./audio/韓文/動物類/고양이.mp3" },
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
    ], 0),

    題("『老鼠』的韓文是？", [
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
      { label:"토끼", audio:"./audio/韓文/動物類/토끼.mp3" },
      { label:"여우", audio:"./audio/韓文/動物類/여우.mp3" },
    ], 1),

    題("『馬』的韓文是？", [
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
      { label:"양", audio:"./audio/韓文/動物類/양.mp3" },
      { label:"염소", audio:"./audio/韓文/動物類/염소.mp3" },
    ], 0),

    題("『牛』的韓文是？", [
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"양", audio:"./audio/韓文/動物類/양.mp3" },
    ], 1),

    題("『羊』的韓文是？", [
      { label:"염소", audio:"./audio/韓文/動物類/염소.mp3" },
      { label:"양", audio:"./audio/韓文/動物類/양.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
    ], 1),

    題("『豬』的韓文是？", [
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
      { label:"돼지", audio:"./audio/韓文/動物類/돼지.mp3" },
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
    ], 1),

    題("『山羊』的韓文是？", [
      { label:"사슴", audio:"./audio/韓文/動物類/사슴.mp3" },
      { label:"양", audio:"./audio/韓文/動物類/양.mp3" },
      { label:"염소", audio:"./audio/韓文/動物類/염소.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
    ], 2),

    題("『雞』的韓文是？", [
      { label:"토끼", audio:"./audio/韓文/動物類/토끼.mp3" },
      { label:"닭", audio:"./audio/韓文/動物類/닭.mp3" },
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
      { label:"사슴", audio:"./audio/韓文/動物類/사슴.mp3" },
    ], 1),

    題("『鴨子』的韓文是？", [
      { label:"닭", audio:"./audio/韓文/動物類/닭.mp3" },
      { label:"오리", audio:"./audio/韓文/動物類/오리.mp3" },
      { label:"새", audio:"./audio/韓文/動物類/새.mp3" },
      { label:"물고기", audio:"./audio/韓文/動物類/물고기.mp3" },
    ], 1),

    題("『青蛙』的韓文是？", [
      { label:"뱀", audio:"./audio/韓文/動物類/뱀.mp3" },
      { label:"개구리", audio:"./audio/韓文/動物類/개구리.mp3" },
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
      { label:"토끼", audio:"./audio/韓文/動物類/토끼.mp3" },
    ], 1),

    題("『蛇』的韓文是？", [
      { label:"늑대", audio:"./audio/韓文/動物類/늑대.mp3" },
      { label:"뱀", audio:"./audio/韓文/動物類/뱀.mp3" },
      { label:"여우", audio:"./audio/韓文/動物類/여우.mp3" },
      { label:"쥐", audio:"./audio/韓文/動物類/쥐.mp3" },
    ], 1),

    題("『烏龜』的韓文是？", [
      { label:"거북이", audio:"./audio/韓文/動物類/거북이.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"돼지", audio:"./audio/韓文/動物類/돼지.mp3" },
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
    ], 0),

    題("『猴子』的韓文是？", [
      { label:"원숭이", audio:"./audio/韓文/動物類/원숭이.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"사자", audio:"./audio/韓文/動物類/사자.mp3" },
      { label:"개", audio:"./audio/韓文/動物類/개.mp3" },
    ], 0),

    題("『猩猩』的韓文是？", [
      { label:"고릴라", audio:"./audio/韓文/動物類/고릴라.mp3" },
      { label:"원숭이", audio:"./audio/韓文/動物類/원숭이.mp3" },
      { label:"곰", audio:"./audio/韓文/動物類/곰.mp3" },
      { label:"돼지", audio:"./audio/韓文/動物類/돼지.mp3" },
    ], 0),

    題("『斑馬』的韓文是？", [
      { label:"말", audio:"./audio/韓文/動物類/말.mp3" },
      { label:"얼룩말", audio:"./audio/韓文/動物類/얼룩말.mp3" },
      { label:"소", audio:"./audio/韓文/動物類/소.mp3" },
      { label:"사슴", audio:"./audio/韓文/動物類/사슴.mp3" },
    ], 1),

    題("『海豚』的韓文是？", [
      { label:"물고기", audio:"./audio/韓文/動物類/물고기.mp3" },
      { label:"돌고래", audio:"./audio/韓文/動物類/돌고래.mp3" },
      { label:"고래", audio:"./audio/韓文/動物類/고래.mp3" },
      { label:"상어", audio:"./audio/韓文/動物類/상어.mp3" },
    ], 1),

    題("『鯊魚』的韓文是？", [
      { label:"돌고래", audio:"./audio/韓文/動物類/돌고래.mp3" },
      { label:"상어", audio:"./audio/韓文/動物類/상어.mp3" },
      { label:"고래", audio:"./audio/韓文/動物類/고래.mp3" },
      { label:"물고기", audio:"./audio/韓文/動物類/물고기.mp3" },
    ], 1),

    題("『鯨魚』的韓文是？", [
      { label:"돌고래", audio:"./audio/韓文/動物類/돌고래.mp3" },
      { label:"상어", audio:"./audio/韓文/動物類/상어.mp3" },
      { label:"고래", audio:"./audio/韓文/動物類/고래.mp3" },
      { label:"물고기", audio:"./audio/韓文/動物類/물고기.mp3" },
    ], 2),
  ];


})();
