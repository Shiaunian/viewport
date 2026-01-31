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
      "日常會話": "語言/英文/日常會話",
      "心情與狀態表達": "語言/英文/心情與狀態表達",
      "機場與搭機英語": "語言/英文/機場與搭機英語"      
    },
    "日文": {
      "五十音": "語言/日文/五十音",
      "日常會話": "語言/日文/日常會話"
    },
    "韓文": {
      "單字入門": "語言/韓文/單字入門",
      "日常會話": "語言/韓文/日常會話",
      "動物類": "語言/韓文/動物類"
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
    題("『狗』的英文是？", [
        { label:"請聆聽", audio:"./audio/en/animals/cat.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/cap.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/cut.mp3" },
        { label:"請聆聽", audio:"./audio/en/animals/car.mp3" },
      ], 1),
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

  // --- 英文：基礎文法 ---
  window.QUESTION_BANK["語言/英文/機場與搭機英語"] = [

    題("『我想訂一張機票。』的英文是？", [
      { label:"I want to change my flight time.", audio:"./audio/en/機場與搭機英語/I want to change my flight time.mp3" },
      { label:"I want to cancel my flight.", audio:"./audio/en/機場與搭機英語/I want to cancel my flight.mp3" },
      { label:"I want to book a flight.", audio:"./audio/en/機場與搭機英語/I want to book a flight.mp3" },
      { label:"I would like to confirm my reservation.", audio:"./audio/en/機場與搭機英語/I would like to confirm my reservation.mp3" },
    ], 2),

    題("『我想改機票時間。』的英文是？", [
      { label:"I want to change my flight time.", audio:"./audio/en/機場與搭機英語/I want to change my flight time.mp3" },
      { label:"I want to cancel my flight.", audio:"./audio/en/機場與搭機英語/I want to cancel my flight.mp3" },
      { label:"I would like to confirm my reservation.", audio:"./audio/en/機場與搭機英語/I would like to confirm my reservation.mp3" },
      { label:"I want to book a flight.", audio:"./audio/en/機場與搭機英語/I want to book a flight.mp3" },
    ], 0),

    題("『我想取消我的班機。』的英文是？", [
      { label:"I want to change my flight time.", audio:"./audio/en/機場與搭機英語/I want to change my flight time.mp3" },
      { label:"I want to cancel my flight.", audio:"./audio/en/機場與搭機英語/I want to cancel my flight.mp3" },
      { label:"I want to book a flight.", audio:"./audio/en/機場與搭機英語/I want to book a flight.mp3" },
      { label:"I would like to confirm my reservation.", audio:"./audio/en/機場與搭機英語/I would like to confirm my reservation.mp3" },
    ], 1),

    題("『我想確認我的訂位。』的英文是？", [
      { label:"I would like to confirm my reservation.", audio:"./audio/en/機場與搭機英語/I would like to confirm my reservation.mp3" },
      { label:"I want to book a flight.", audio:"./audio/en/機場與搭機英語/I want to book a flight.mp3" },
      { label:"I want to change my flight time.", audio:"./audio/en/機場與搭機英語/I want to change my flight time.mp3" },
      { label:"I want to cancel my flight.", audio:"./audio/en/機場與搭機英語/I want to cancel my flight.mp3" },
    ], 0),

    題("『我想辦理登機。』的英文是？", [
      { label:"Can I check in online?", audio:"./audio/en/機場與搭機英語/Can I check in online.mp3" },
      { label:"I want to check in.", audio:"./audio/en/機場與搭機英語/I want to check in.mp3" },
      { label:"Can I choose my seat?", audio:"./audio/en/機場與搭機英語/Can I choose my seat.mp3" },
      { label:"Could you give me an aisle seat?", audio:"./audio/en/機場與搭機英語/Could you give me an aisle seat.mp3" },
    ], 1),

    題("『我可以線上報到了嗎？』的英文是？", [
      { label:"Can I check in online?", audio:"./audio/en/機場與搭機英語/Can I check in online.mp3" },
      { label:"I want to check in.", audio:"./audio/en/機場與搭機英語/I want to check in.mp3" },
      { label:"Could you give me an aisle seat?", audio:"./audio/en/機場與搭機英語/Could you give me an aisle seat.mp3" },
      { label:"Can I choose my seat?", audio:"./audio/en/機場與搭機英語/Can I choose my seat.mp3" },
    ], 0),

    題("『我可以選座位嗎？』的英文是？", [
      { label:"Can I choose my seat?", audio:"./audio/en/機場與搭機英語/Can I choose my seat.mp3" },
      { label:"Could you give me an aisle seat?", audio:"./audio/en/機場與搭機英語/Could you give me an aisle seat.mp3" },
      { label:"I want to check in.", audio:"./audio/en/機場與搭機英語/I want to check in.mp3" },
      { label:"Can I check in online?", audio:"./audio/en/機場與搭機英語/Can I check in online.mp3" },
    ], 0),

    題("『可以幫我安排靠走道嗎？』的英文是？", [
      { label:"Can I choose my seat?", audio:"./audio/en/機場與搭機英語/Can I choose my seat.mp3" },
      { label:"Could you give me an aisle seat?", audio:"./audio/en/機場與搭機英語/Could you give me an aisle seat.mp3" },
      { label:"Can I check in online?", audio:"./audio/en/機場與搭機英語/Can I check in online.mp3" },
      { label:"I want to check in.", audio:"./audio/en/機場與搭機英語/I want to check in.mp3" },
    ], 1),

    題("『可以幫我安排靠窗嗎？』的英文是？", [
      { label:"Here is my passport.", audio:"./audio/en/機場與搭機英語/Here is my passport.mp3" },
      { label:"Here is my e-ticket.", audio:"./audio/en/機場與搭機英語/Here is my e-ticket.mp3" },
      { label:"Here is my boarding pass.", audio:"./audio/en/機場與搭機英語/Here is my boarding pass.mp3" },
      { label:"Could you give me a window seat?", audio:"./audio/en/機場與搭機英語/Could you give me a window seat.mp3" },
    ], 3),

    題("『我的護照在這裡。』的英文是？", [
      { label:"Here is my passport.", audio:"./audio/en/機場與搭機英語/Here is my passport.mp3" },
      { label:"Here is my boarding pass.", audio:"./audio/en/機場與搭機英語/Here is my boarding pass.mp3" },
      { label:"Here is my e-ticket.", audio:"./audio/en/機場與搭機英語/Here is my e-ticket.mp3" },
      { label:"Could you give me a window seat?", audio:"./audio/en/機場與搭機英語/Could you give me a window seat.mp3" },
    ], 0),

    題("『這是我的電子機票。』的英文是？", [
      { label:"Here is my boarding pass.", audio:"./audio/en/機場與搭機英語/Here is my boarding pass.mp3" },
      { label:"Here is my e-ticket.", audio:"./audio/en/機場與搭機英語/Here is my e-ticket.mp3" },
      { label:"Here is my passport.", audio:"./audio/en/機場與搭機英語/Here is my passport.mp3" },
      { label:"Could you give me a window seat?", audio:"./audio/en/機場與搭機英語/Could you give me a window seat.mp3" },
    ], 1),

    題("『這是我的登機證。』的英文是？", [
      { label:"Here is my boarding pass.", audio:"./audio/en/機場與搭機英語/Here is my boarding pass.mp3" },
      { label:"Here is my passport.", audio:"./audio/en/機場與搭機英語/Here is my passport.mp3" },
      { label:"Could you give me a window seat?", audio:"./audio/en/機場與搭機英語/Could you give me a window seat.mp3" },
      { label:"Here is my e-ticket.", audio:"./audio/en/機場與搭機英語/Here is my e-ticket.mp3" },
    ], 0),

    題("『我要托運行李。』的英文是？", [
      { label:"I have two bags to check.", audio:"./audio/en/機場與搭機英語/I have two bags to check.mp3" },
      { label:"I want to check this bag.", audio:"./audio/en/機場與搭機英語/I want to check this bag.mp3" },
      { label:"What is the baggage allowance?", audio:"./audio/en/機場與搭機英語/What is the baggage allowance.mp3" },
      { label:"This is my carry-on bag.", audio:"./audio/en/機場與搭機英語/This is my carry-on bag.mp3" },
    ], 1),

    題("『我有兩件行李要托運。』的英文是？", [
      { label:"I want to check this bag.", audio:"./audio/en/機場與搭機英語/I want to check this bag.mp3" },
      { label:"I have two bags to check.", audio:"./audio/en/機場與搭機英語/I have two bags to check.mp3" },
      { label:"This is my carry-on bag.", audio:"./audio/en/機場與搭機英語/This is my carry-on bag.mp3" },
      { label:"What is the baggage allowance?", audio:"./audio/en/機場與搭機英語/What is the baggage allowance.mp3" },
    ], 1),

    題("『這是隨身行李。』的英文是？", [
      { label:"What is the baggage allowance?", audio:"./audio/en/機場與搭機英語/What is the baggage allowance.mp3" },
      { label:"This is my carry-on bag.", audio:"./audio/en/機場與搭機英語/This is my carry-on bag.mp3" },
      { label:"I have two bags to check.", audio:"./audio/en/機場與搭機英語/I have two bags to check.mp3" },
      { label:"I want to check this bag.", audio:"./audio/en/機場與搭機英語/I want to check this bag.mp3" },
    ], 1),

    題("『行李限重是多少？』的英文是？", [
      { label:"What is the baggage allowance?", audio:"./audio/en/機場與搭機英語/What is the baggage allowance.mp3" },
      { label:"This is my carry-on bag.", audio:"./audio/en/機場與搭機英語/This is my carry-on bag.mp3" },
      { label:"I want to check this bag.", audio:"./audio/en/機場與搭機英語/I want to check this bag.mp3" },
      { label:"I have two bags to check.", audio:"./audio/en/機場與搭機英語/I have two bags to check.mp3" },
    ], 0),

    題("『行李超重了嗎？』的英文是？", [
      { label:"Do I need to pay extra?", audio:"./audio/en/機場與搭機英語/Do I need to pay extra.mp3" },
      { label:"Is my bag overweight?", audio:"./audio/en/機場與搭機英語/Is my bag overweight.mp3" },
      { label:"Will my luggage go through to my destination?", audio:"./audio/en/機場與搭機英語/Will my luggage go through to my destination.mp3" },
      { label:"My luggage is missing.", audio:"./audio/en/機場與搭機英語/My luggage is missing.mp3" },
    ], 1),

    題("『需要額外付費嗎？』的英文是？", [
      { label:"Is my bag overweight?", audio:"./audio/en/機場與搭機英語/Is my bag overweight.mp3" },
      { label:"Do I need to pay extra?", audio:"./audio/en/機場與搭機英語/Do I need to pay extra.mp3" },
      { label:"My luggage is missing.", audio:"./audio/en/機場與搭機英語/My luggage is missing.mp3" },
      { label:"Will my luggage go through to my destination?", audio:"./audio/en/機場與搭機英語/Will my luggage go through to my destination.mp3" },
    ], 1),

    題("『行李會直掛到目的地嗎？』的英文是？", [
      { label:"Will my luggage go through to my destination?", audio:"./audio/en/機場與搭機英語/Will my luggage go through to my destination.mp3" },
      { label:"My luggage is missing.", audio:"./audio/en/機場與搭機英語/My luggage is missing.mp3" },
      { label:"Do I need to pay extra?", audio:"./audio/en/機場與搭機英語/Do I need to pay extra.mp3" },
      { label:"Is my bag overweight?", audio:"./audio/en/機場與搭機英語/Is my bag overweight.mp3" },
    ], 0),

    題("『我的行李遺失了。』的英文是？", [
      { label:"Will my luggage go through to my destination?", audio:"./audio/en/機場與搭機英語/Will my luggage go through to my destination.mp3" },
      { label:"My luggage is missing.", audio:"./audio/en/機場與搭機英語/My luggage is missing.mp3" },
      { label:"Is my bag overweight?", audio:"./audio/en/機場與搭機英語/Is my bag overweight.mp3" },
      { label:"Do I need to pay extra?", audio:"./audio/en/機場與搭機英語/Do I need to pay extra.mp3" },
    ], 1),

    題("『我可以在哪裡領行李？』的英文是？", [
      { label:"Where is the baggage carousel?", audio:"./audio/en/機場與搭機英語/Where is the baggage carousel.mp3" },
      { label:"Where can I pick up my luggage?", audio:"./audio/en/機場與搭機英語/Where can I pick up my luggage.mp3" },
      { label:"Where is the security check?", audio:"./audio/en/機場與搭機英語/Where is the security check.mp3" },
      { label:"Do I need to take off my shoes?", audio:"./audio/en/機場與搭機英語/Do I need to take off my shoes.mp3" },
    ], 1),

    題("『行李轉盤在哪裡？』的英文是？", [
      { label:"Where is the baggage carousel?", audio:"./audio/en/機場與搭機英語/Where is the baggage carousel.mp3" },
      { label:"Where can I pick up my luggage?", audio:"./audio/en/機場與搭機英語/Where can I pick up my luggage.mp3" },
      { label:"Do I need to take off my shoes?", audio:"./audio/en/機場與搭機英語/Do I need to take off my shoes.mp3" },
      { label:"Where is the security check?", audio:"./audio/en/機場與搭機英語/Where is the security check.mp3" },
    ], 0),

    題("『安檢在哪裡？』的英文是？", [
      { label:"Where is the security check?", audio:"./audio/en/機場與搭機英語/Where is the security check.mp3" },
      { label:"Do I need to take off my shoes?", audio:"./audio/en/機場與搭機英語/Do I need to take off my shoes.mp3" },
      { label:"Where is the baggage carousel?", audio:"./audio/en/機場與搭機英語/Where is the baggage carousel.mp3" },
      { label:"Where can I pick up my luggage?", audio:"./audio/en/機場與搭機英語/Where can I pick up my luggage.mp3" },
    ], 0),

    題("『需要脫鞋嗎？』的英文是？", [
      { label:"Where is the security check?", audio:"./audio/en/機場與搭機英語/Where is the security check.mp3" },
      { label:"Do I need to take off my shoes?", audio:"./audio/en/機場與搭機英語/Do I need to take off my shoes.mp3" },
      { label:"Where can I pick up my luggage?", audio:"./audio/en/機場與搭機英語/Where can I pick up my luggage.mp3" },
      { label:"Where is the baggage carousel?", audio:"./audio/en/機場與搭機英語/Where is the baggage carousel.mp3" },
    ], 1),

    題("『筆電需要拿出來嗎？』的英文是？", [
      { label:"Can I bring liquids on the plane?", audio:"./audio/en/機場與搭機英語/Can I bring liquids on the plane.mp3" },
      { label:"Can I take this on board?", audio:"./audio/en/機場與搭機英語/Can I take this on board.mp3" },
      { label:"I need to declare this item.", audio:"./audio/en/機場與搭機英語/I need to declare this item.mp3" },
      { label:"Do I need to take out my laptop?", audio:"./audio/en/機場與搭機英語/Do I need to take out my laptop.mp3" },
    ], 3),

    題("『液體可以帶上飛機嗎？』的英文是？", [
      { label:"Can I bring liquids on the plane?", audio:"./audio/en/機場與搭機英語/Can I bring liquids on the plane.mp3" },
      { label:"Can I take this on board?", audio:"./audio/en/機場與搭機英語/Can I take this on board.mp3" },
      { label:"Do I need to take out my laptop?", audio:"./audio/en/機場與搭機英語/Do I need to take out my laptop.mp3" },
      { label:"I need to declare this item.", audio:"./audio/en/機場與搭機英語/I need to declare this item.mp3" },
    ], 0),

    題("『這個可以帶上飛機嗎？』的英文是？", [
      { label:"Can I bring liquids on the plane?", audio:"./audio/en/機場與搭機英語/Can I bring liquids on the plane.mp3" },
      { label:"Can I take this on board?", audio:"./audio/en/機場與搭機英語/Can I take this on board.mp3" },
      { label:"I need to declare this item.", audio:"./audio/en/機場與搭機英語/I need to declare this item.mp3" },
      { label:"Do I need to take out my laptop?", audio:"./audio/en/機場與搭機英語/Do I need to take out my laptop.mp3" },
    ], 1),

    題("『我要申報這個物品。』的英文是？", [
      { label:"I need to declare this item.", audio:"./audio/en/機場與搭機英語/I need to declare this item.mp3" },
      { label:"Can I take this on board?", audio:"./audio/en/機場與搭機英語/Can I take this on board.mp3" },
      { label:"Can I bring liquids on the plane?", audio:"./audio/en/機場與搭機英語/Can I bring liquids on the plane.mp3" },
      { label:"Do I need to take out my laptop?", audio:"./audio/en/機場與搭機英語/Do I need to take out my laptop.mp3" },
    ], 0),

    題("『登機門在哪裡？』的英文是？", [
      { label:"When does boarding start?", audio:"./audio/en/機場與搭機英語/When does boarding start.mp3" },
      { label:"Can we board now?", audio:"./audio/en/機場與搭機英語/Can we board now.mp3" },
      { label:"Where is the boarding gate?", audio:"./audio/en/機場與搭機英語/Where is the boarding gate.mp3" },
      { label:"What time does the flight take off?", audio:"./audio/en/機場與搭機英語/What time does the flight take off.mp3" },
    ], 2),

    題("『什麼時候開始登機？』的英文是？", [
      { label:"When does boarding start?", audio:"./audio/en/機場與搭機英語/When does boarding start.mp3" },
      { label:"Can we board now?", audio:"./audio/en/機場與搭機英語/Can we board now.mp3" },
      { label:"What time does the flight take off?", audio:"./audio/en/機場與搭機英語/What time does the flight take off.mp3" },
      { label:"Where is the boarding gate?", audio:"./audio/en/機場與搭機英語/Where is the boarding gate.mp3" },
    ], 0),

    題("『現在可以登機了嗎？』的英文是？", [
      { label:"When does boarding start?", audio:"./audio/en/機場與搭機英語/When does boarding start.mp3" },
      { label:"Can we board now?", audio:"./audio/en/機場與搭機英語/Can we board now.mp3" },
      { label:"Where is the boarding gate?", audio:"./audio/en/機場與搭機英語/Where is the boarding gate.mp3" },
      { label:"What time does the flight take off?", audio:"./audio/en/機場與搭機英語/What time does the flight take off.mp3" },
    ], 1),

    題("『飛機幾點起飛？』的英文是？", [
      { label:"When does boarding start?", audio:"./audio/en/機場與搭機英語/When does boarding start.mp3" },
      { label:"Can we board now?", audio:"./audio/en/機場與搭機英語/Can we board now.mp3" },
      { label:"What time does the flight take off?", audio:"./audio/en/機場與搭機英語/What time does the flight take off.mp3" },
      { label:"Where is the boarding gate?", audio:"./audio/en/機場與搭機英語/Where is the boarding gate.mp3" },
    ], 2),

    題("『飛機延誤了嗎？』的英文是？", [
      { label:"Is the flight canceled?", audio:"./audio/en/機場與搭機英語/Is the flight canceled.mp3" },
      { label:"Is the flight delayed?", audio:"./audio/en/機場與搭機英語/Is the flight delayed.mp3" },
      { label:"Is this a direct flight?", audio:"./audio/en/機場與搭機英語/Is this a direct flight.mp3" },
      { label:"Where do I transfer?", audio:"./audio/en/機場與搭機英語/Where do I transfer.mp3" },
    ], 1),

    題("『航班取消了嗎？』的英文是？", [
      { label:"Is the flight canceled?", audio:"./audio/en/機場與搭機英語/Is the flight canceled.mp3" },
      { label:"Is the flight delayed?", audio:"./audio/en/機場與搭機英語/Is the flight delayed.mp3" },
      { label:"Where do I transfer?", audio:"./audio/en/機場與搭機英語/Where do I transfer.mp3" },
      { label:"Is this a direct flight?", audio:"./audio/en/機場與搭機英語/Is this a direct flight.mp3" },
    ], 0),

    題("『這是直飛嗎？』的英文是？", [
      { label:"Where do I transfer?", audio:"./audio/en/機場與搭機英語/Where do I transfer.mp3" },
      { label:"Is this a direct flight?", audio:"./audio/en/機場與搭機英語/Is this a direct flight.mp3" },
      { label:"Is the flight delayed?", audio:"./audio/en/機場與搭機英語/Is the flight delayed.mp3" },
      { label:"Is the flight canceled?", audio:"./audio/en/機場與搭機英語/Is the flight canceled.mp3" },
    ], 1),

    題("『我要在哪裡轉機？』的英文是？", [
      { label:"Where do I transfer?", audio:"./audio/en/機場與搭機英語/Where do I transfer.mp3" },
      { label:"Is this a direct flight?", audio:"./audio/en/機場與搭機英語/Is this a direct flight.mp3" },
      { label:"Is the flight canceled?", audio:"./audio/en/機場與搭機英語/Is the flight canceled.mp3" },
      { label:"Is the flight delayed?", audio:"./audio/en/機場與搭機英語/Is the flight delayed.mp3" },
    ], 0),

    題("『轉機時間夠嗎？』的英文是？", [
      { label:"I missed my flight.", audio:"./audio/en/機場與搭機英語/I missed my flight.mp3" },
      { label:"Do I have enough time to transfer?", audio:"./audio/en/機場與搭機英語/Do I have enough time to transfer.mp3" },
      { label:"When is the next flight?", audio:"./audio/en/機場與搭機英語/When is the next flight.mp3" },
      { label:"Can you put me on the next flight?", audio:"./audio/en/機場與搭機英語/Can you put me on the next flight.mp3" },
    ], 1),

    題("『下一班飛機是幾點？』的英文是？", [
      { label:"When is the next flight?", audio:"./audio/en/機場與搭機英語/When is the next flight.mp3" },
      { label:"Can you put me on the next flight?", audio:"./audio/en/機場與搭機英語/Can you put me on the next flight.mp3" },
      { label:"Do I have enough time to transfer?", audio:"./audio/en/機場與搭機英語/Do I have enough time to transfer.mp3" },
      { label:"I missed my flight.", audio:"./audio/en/機場與搭機英語/I missed my flight.mp3" },
    ], 0),

    題("『可以幫我改到下一班嗎？』的英文是？", [
      { label:"When is the next flight?", audio:"./audio/en/機場與搭機英語/When is the next flight.mp3" },
      { label:"Can you put me on the next flight?", audio:"./audio/en/機場與搭機英語/Can you put me on the next flight.mp3" },
      { label:"I missed my flight.", audio:"./audio/en/機場與搭機英語/I missed my flight.mp3" },
      { label:"Do I have enough time to transfer?", audio:"./audio/en/機場與搭機英語/Do I have enough time to transfer.mp3" },
    ], 1),

    題("『我錯過班機了。』的英文是？", [
      { label:"I missed my flight.", audio:"./audio/en/機場與搭機英語/I missed my flight.mp3" },
      { label:"Do I have enough time to transfer?", audio:"./audio/en/機場與搭機英語/Do I have enough time to transfer.mp3" },
      { label:"When is the next flight?", audio:"./audio/en/機場與搭機英語/When is the next flight.mp3" },
      { label:"Can you put me on the next flight?", audio:"./audio/en/機場與搭機英語/Can you put me on the next flight.mp3" },
    ], 0),

    題("『這是我的座位嗎？』的英文是？", [
      { label:"Could you help me with my bag?", audio:"./audio/en/機場與搭機英語/Could you help me with my bag.mp3" },
      { label:"Is this my seat?", audio:"./audio/en/機場與搭機英語/Is this my seat.mp3" },
      { label:"Can I have a blanket?", audio:"./audio/en/機場與搭機英語/Can I have a blanket.mp3" },
      { label:"Can I have some water?", audio:"./audio/en/機場與搭機英語/Can I have some water.mp3" },
    ], 1),

    題("『可以幫我放行李嗎？』的英文是？", [
      { label:"Could you help me with my bag?", audio:"./audio/en/機場與搭機英語/Could you help me with my bag.mp3" },
      { label:"Is this my seat?", audio:"./audio/en/機場與搭機英語/Is this my seat.mp3" },
      { label:"Can I have some water?", audio:"./audio/en/機場與搭機英語/Can I have some water.mp3" },
      { label:"Can I have a blanket?", audio:"./audio/en/機場與搭機英語/Can I have a blanket.mp3" },
    ], 0),

    題("『可以給我一條毛毯嗎？』的英文是？", [
      { label:"Can I have a blanket?", audio:"./audio/en/機場與搭機英語/Can I have a blanket.mp3" },
      { label:"Can I have some water?", audio:"./audio/en/機場與搭機英語/Can I have some water.mp3" },
      { label:"Is this my seat?", audio:"./audio/en/機場與搭機英語/Is this my seat.mp3" },
      { label:"Could you help me with my bag?", audio:"./audio/en/機場與搭機英語/Could you help me with my bag.mp3" },
    ], 0),

    題("『可以給我一些水嗎？』的英文是？", [
      { label:"Can I have a blanket?", audio:"./audio/en/機場與搭機英語/Can I have a blanket.mp3" },
      { label:"Can I have some water?", audio:"./audio/en/機場與搭機英語/Can I have some water.mp3" },
      { label:"Is this my seat?", audio:"./audio/en/機場與搭機英語/Is this my seat.mp3" },
      { label:"Could you help me with my bag?", audio:"./audio/en/機場與搭機英語/Could you help me with my bag.mp3" },
    ], 1),

    題("『洗手間在哪裡？』的英文是？", [
      { label:"I don’t feel well.", audio:"./audio/en/機場與搭機英語/I don’t feel well.mp3" },
      { label:"Where is the restroom?", audio:"./audio/en/機場與搭機英語/Where is the restroom.mp3" },
      { label:"Can you speak more slowly?", audio:"./audio/en/機場與搭機英語/Can you speak more slowly.mp3" },
      { label:"I am not very good at English.", audio:"./audio/en/機場與搭機英語/I am not very good at English.mp3" },
    ], 1),

    題("『我感覺不太舒服。』的英文是？", [
      { label:"I don’t feel well.", audio:"./audio/en/機場與搭機英語/I don’t feel well.mp3" },
      { label:"Where is the restroom?", audio:"./audio/en/機場與搭機英語/Where is the restroom.mp3" },
      { label:"I am not very good at English.", audio:"./audio/en/機場與搭機英語/I am not very good at English.mp3" },
      { label:"Can you speak more slowly?", audio:"./audio/en/機場與搭機英語/Can you speak more slowly.mp3" },
    ], 0),

    題("『我不太會英文。』的英文是？", [
      { label:"I am not very good at English.", audio:"./audio/en/機場與搭機英語/I am not very good at English.mp3" },
      { label:"Can you speak more slowly?", audio:"./audio/en/機場與搭機英語/Can you speak more slowly.mp3" },
      { label:"Where is the restroom?", audio:"./audio/en/機場與搭機英語/Where is the restroom.mp3" },
      { label:"I don’t feel well.", audio:"./audio/en/機場與搭機英語/I don’t feel well.mp3" },
    ], 0),

    題("『可以說慢一點嗎？』的英文是？", [
      { label:"I am not very good at English.", audio:"./audio/en/機場與搭機英語/I am not very good at English.mp3" },
      { label:"Can you speak more slowly?", audio:"./audio/en/機場與搭機英語/Can you speak more slowly.mp3" },
      { label:"I don’t feel well.", audio:"./audio/en/機場與搭機英語/I don’t feel well.mp3" },
      { label:"Where is the restroom?", audio:"./audio/en/機場與搭機英語/Where is the restroom.mp3" },
    ], 1),

    題("『可以再說一次嗎？』的英文是？", [
      { label:"Can I pay by card here?", audio:"./audio/en/機場與搭機英語/Can I pay by card here.mp3" },
      { label:"Where is the ATM?", audio:"./audio/en/機場與搭機英語/Where is the ATM.mp3" },
      { label:"Where is the information desk?", audio:"./audio/en/機場與搭機英語/Where is the information desk.mp3" },
      { label:"Could you say that again?", audio:"./audio/en/機場與搭機英語/Could you say that again.mp3" },
    ], 3),

    題("『這裡可以刷卡嗎？』的英文是？", [
      { label:"Can I pay by card here?", audio:"./audio/en/機場與搭機英語/Can I pay by card here.mp3" },
      { label:"Where is the information desk?", audio:"./audio/en/機場與搭機英語/Where is the information desk.mp3" },
      { label:"Where is the ATM?", audio:"./audio/en/機場與搭機英語/Where is the ATM.mp3" },
      { label:"Could you say that again?", audio:"./audio/en/機場與搭機英語/Could you say that again.mp3" },
    ], 0),

    題("『請問哪裡有提款機？』的英文是？", [
      { label:"Can I pay by card here?", audio:"./audio/en/機場與搭機英語/Can I pay by card here.mp3" },
      { label:"Where is the ATM?", audio:"./audio/en/機場與搭機英語/Where is the ATM.mp3" },
      { label:"Could you say that again?", audio:"./audio/en/機場與搭機英語/Could you say that again.mp3" },
      { label:"Where is the information desk?", audio:"./audio/en/機場與搭機英語/Where is the information desk.mp3" },
    ], 1),

    題("『服務台在哪裡？』的英文是？", [
      { label:"Where is the information desk?", audio:"./audio/en/機場與搭機英語/Where is the information desk.mp3" },
      { label:"Where is the ATM?", audio:"./audio/en/機場與搭機英語/Where is the ATM.mp3" },
      { label:"Can I pay by card here?", audio:"./audio/en/機場與搭機英語/Can I pay by card here.mp3" },
      { label:"Could you say that again?", audio:"./audio/en/機場與搭機英語/Could you say that again.mp3" },
    ], 0)
  ];

  // --- 英文：心情與狀態表達 ---
  window.QUESTION_BANK["語言/英文/心情與狀態表達"] = [
    題("『我覺得很開心。』的英文是？", [
      { label:"I feel happy.", audio:"./audio/en/心情與狀態表達/I feel happy.mp3" },
      { label:"I feel relaxed.", audio:"./audio/en/心情與狀態表達/I feel relaxed.mp3" },
      { label:"I feel nervous.", audio:"./audio/en/心情與狀態表達/I feel nervous.mp3" },
      { label:"I feel anxious.", audio:"./audio/en/心情與狀態表達/I feel anxious.mp3" },
    ], 0),

    題("『我覺得很放鬆。』的英文是？", [
      { label:"I feel happy.", audio:"./audio/en/心情與狀態表達/I feel happy.mp3" },
      { label:"I feel relaxed.", audio:"./audio/en/心情與狀態表達/I feel relaxed.mp3" },
      { label:"I feel nervous.", audio:"./audio/en/心情與狀態表達/I feel nervous.mp3" },
      { label:"I feel anxious.", audio:"./audio/en/心情與狀態表達/I feel anxious.mp3" },
    ], 1),

    題("『我覺得很緊張。』的英文是？", [
      { label:"I feel happy.", audio:"./audio/en/心情與狀態表達/I feel happy.mp3" },
      { label:"I feel relaxed.", audio:"./audio/en/心情與狀態表達/I feel relaxed.mp3" },
      { label:"I feel nervous.", audio:"./audio/en/心情與狀態表達/I feel nervous.mp3" },
      { label:"I feel anxious.", audio:"./audio/en/心情與狀態表達/I feel anxious.mp3" },
    ], 2),

    題("『我覺得很焦慮。』的英文是？", [
      { label:"I feel happy.", audio:"./audio/en/心情與狀態表達/I feel happy.mp3" },
      { label:"I feel relaxed.", audio:"./audio/en/心情與狀態表達/I feel relaxed.mp3" },
      { label:"I feel nervous.", audio:"./audio/en/心情與狀態表達/I feel nervous.mp3" },
      { label:"I feel anxious.", audio:"./audio/en/心情與狀態表達/I feel anxious.mp3" },
    ], 3),

    題("『我覺得很累。』的英文是？", [
      { label:"I feel tired.", audio:"./audio/en/心情與狀態表達/I feel tired.mp3" },
      { label:"I feel at ease.", audio:"./audio/en/心情與狀態表達/I feel at ease.mp3" },
      { label:"I feel relieved.", audio:"./audio/en/心情與狀態表達/I feel relieved.mp3" },
      { label:"I feel blessed.", audio:"./audio/en/心情與狀態表達/I feel blessed.mp3" },
    ], 0),

    題("『我覺得很安心。』的英文是？", [
      { label:"I feel tired.", audio:"./audio/en/心情與狀態表達/I feel tired.mp3" },
      { label:"I feel at ease.", audio:"./audio/en/心情與狀態表達/I feel at ease.mp3" },
      { label:"I feel relieved.", audio:"./audio/en/心情與狀態表達/I feel relieved.mp3" },
      { label:"I feel blessed.", audio:"./audio/en/心情與狀態表達/I feel blessed.mp3" },
    ], 1),

    題("『我覺得很放心。』的英文是？", [
      { label:"I feel tired.", audio:"./audio/en/心情與狀態表達/I feel tired.mp3" },
      { label:"I feel at ease.", audio:"./audio/en/心情與狀態表達/I feel at ease.mp3" },
      { label:"I feel relieved.", audio:"./audio/en/心情與狀態表達/I feel relieved.mp3" },
      { label:"I feel blessed.", audio:"./audio/en/心情與狀態表達/I feel blessed.mp3" },
    ], 2),

    題("『我覺得很幸福。』的英文是？", [
      { label:"I feel tired.", audio:"./audio/en/心情與狀態表達/I feel tired.mp3" },
      { label:"I feel at ease.", audio:"./audio/en/心情與狀態表達/I feel at ease.mp3" },
      { label:"I feel relieved.", audio:"./audio/en/心情與狀態表達/I feel relieved.mp3" },
      { label:"I feel blessed.", audio:"./audio/en/心情與狀態表達/I feel blessed.mp3" },
    ], 3),

    題("『我覺得很滿足。』的英文是？", [
      { label:"I feel satisfied.", audio:"./audio/en/心情與狀態表達/I feel satisfied.mp3" },
      { label:"I feel disappointed.", audio:"./audio/en/心情與狀態表達/I feel disappointed.mp3" },
      { label:"I feel a bit sad.", audio:"./audio/en/心情與狀態表達/I feel a bit sad.mp3" },
      { label:"I feel angry.", audio:"./audio/en/心情與狀態表達/I feel angry.mp3" },
    ], 0),

    題("『我覺得很失落。』的英文是？", [
      { label:"I feel satisfied.", audio:"./audio/en/心情與狀態表達/I feel satisfied.mp3" },
      { label:"I feel disappointed.", audio:"./audio/en/心情與狀態表達/I feel disappointed.mp3" },
      { label:"I feel a bit sad.", audio:"./audio/en/心情與狀態表達/I feel a bit sad.mp3" },
      { label:"I feel angry.", audio:"./audio/en/心情與狀態表達/I feel angry.mp3" },
    ], 1),

    題("『我覺得有點難過。』的英文是？", [
      { label:"I feel satisfied.", audio:"./audio/en/心情與狀態表達/I feel satisfied.mp3" },
      { label:"I feel disappointed.", audio:"./audio/en/心情與狀態表達/I feel disappointed.mp3" },
      { label:"I feel a bit sad.", audio:"./audio/en/心情與狀態表達/I feel a bit sad.mp3" },
      { label:"I feel angry.", audio:"./audio/en/心情與狀態表達/I feel angry.mp3" },
    ], 2),

    題("『我覺得很生氣。』的英文是？", [
      { label:"I feel satisfied.", audio:"./audio/en/心情與狀態表達/I feel satisfied.mp3" },
      { label:"I feel disappointed.", audio:"./audio/en/心情與狀態表達/I feel disappointed.mp3" },
      { label:"I feel a bit sad.", audio:"./audio/en/心情與狀態表達/I feel a bit sad.mp3" },
      { label:"I feel angry.", audio:"./audio/en/心情與狀態表達/I feel angry.mp3" },
    ], 3),

    題("『我覺得很煩。』的英文是？", [
      { label:"I feel annoyed.", audio:"./audio/en/心情與狀態表達/I feel annoyed.mp3" },
      { label:"I feel stressed.", audio:"./audio/en/心情與狀態表達/I feel stressed.mp3" },
      { label:"I feel energetic.", audio:"./audio/en/心情與狀態表達/I feel energetic.mp3" },
      { label:"I feel calm.", audio:"./audio/en/心情與狀態表達/I feel calm.mp3" },
    ], 0),

    題("『我覺得很有壓力。』的英文是？", [
      { label:"I feel annoyed.", audio:"./audio/en/心情與狀態表達/I feel annoyed.mp3" },
      { label:"I feel stressed.", audio:"./audio/en/心情與狀態表達/I feel stressed.mp3" },
      { label:"I feel energetic.", audio:"./audio/en/心情與狀態表達/I feel energetic.mp3" },
      { label:"I feel calm.", audio:"./audio/en/心情與狀態表達/I feel calm.mp3" },
    ], 1),

    題("『我覺得很有精神。』的英文是？", [
      { label:"I feel annoyed.", audio:"./audio/en/心情與狀態表達/I feel annoyed.mp3" },
      { label:"I feel stressed.", audio:"./audio/en/心情與狀態表達/I feel stressed.mp3" },
      { label:"I feel energetic.", audio:"./audio/en/心情與狀態表達/I feel energetic.mp3" },
      { label:"I feel calm.", audio:"./audio/en/心情與狀態表達/I feel calm.mp3" },
    ], 2),

    題("『我覺得很平靜。』的英文是？", [
      { label:"I feel annoyed.", audio:"./audio/en/心情與狀態表達/I feel annoyed.mp3" },
      { label:"I feel stressed.", audio:"./audio/en/心情與狀態表達/I feel stressed.mp3" },
      { label:"I feel energetic.", audio:"./audio/en/心情與狀態表達/I feel energetic.mp3" },
      { label:"I feel calm.", audio:"./audio/en/心情與狀態表達/I feel calm.mp3" },
    ], 3),


    題("『我覺得很迷惘。』的英文是？", [
      { label:"I feel confused.", audio:"./audio/en/心情與狀態表達/I feel confused.mp3" },
      { label:"I feel lonely.", audio:"./audio/en/心情與狀態表達/I feel lonely.mp3" },
      { label:"I feel safe with you.", audio:"./audio/en/心情與狀態表達/I feel safe with you.mp3" },
      { label:"I feel accomplished.", audio:"./audio/en/心情與狀態表達/I feel accomplished.mp3" },
    ], 0),

    題("『我覺得很孤單。』的英文是？", [
      { label:"I feel confused.", audio:"./audio/en/心情與狀態表達/I feel confused.mp3" },
      { label:"I feel lonely.", audio:"./audio/en/心情與狀態表達/I feel lonely.mp3" },
      { label:"I feel safe with you.", audio:"./audio/en/心情與狀態表達/I feel safe with you.mp3" },
      { label:"I feel accomplished.", audio:"./audio/en/心情與狀態表達/I feel accomplished.mp3" },
    ], 1),

    題("『我覺得很安心跟你在一起。』的英文是？", [
      { label:"I feel confused.", audio:"./audio/en/心情與狀態表達/I feel confused.mp3" },
      { label:"I feel lonely.", audio:"./audio/en/心情與狀態表達/I feel lonely.mp3" },
      { label:"I feel safe with you.", audio:"./audio/en/心情與狀態表達/I feel safe with you.mp3" },
      { label:"I feel accomplished.", audio:"./audio/en/心情與狀態表達/I feel accomplished.mp3" },
    ], 2),

    題("『我覺得很有成就感。』的英文是？", [
      { label:"I feel confused.", audio:"./audio/en/心情與狀態表達/I feel confused.mp3" },
      { label:"I feel lonely.", audio:"./audio/en/心情與狀態表達/I feel lonely.mp3" },
      { label:"I feel safe with you.", audio:"./audio/en/心情與狀態表達/I feel safe with you.mp3" },
      { label:"I feel accomplished.", audio:"./audio/en/心情與狀態表達/I feel accomplished.mp3" },
    ], 3),

    題("『我覺得很空虛。』的英文是？", [
      { label:"I feel empty.", audio:"./audio/en/心情與狀態表達/I feel empty.mp3" },
      { label:"I feel excited.", audio:"./audio/en/心情與狀態表達/I feel excited.mp3" },
      { label:"I feel unsure.", audio:"./audio/en/心情與狀態表達/I feel unsure.mp3" },
      { label:"I feel proud.", audio:"./audio/en/心情與狀態表達/I feel proud.mp3" },
    ], 0),

    題("『我覺得很期待。』的英文是？", [
      { label:"I feel empty.", audio:"./audio/en/心情與狀態表達/I feel empty.mp3" },
      { label:"I feel excited.", audio:"./audio/en/心情與狀態表達/I feel excited.mp3" },
      { label:"I feel unsure.", audio:"./audio/en/心情與狀態表達/I feel unsure.mp3" },
      { label:"I feel proud.", audio:"./audio/en/心情與狀態表達/I feel proud.mp3" },
    ], 1),

    題("『我覺得很猶豫。』的英文是？", [
      { label:"I feel empty.", audio:"./audio/en/心情與狀態表達/I feel empty.mp3" },
      { label:"I feel excited.", audio:"./audio/en/心情與狀態表達/I feel excited.mp3" },
      { label:"I feel unsure.", audio:"./audio/en/心情與狀態表達/I feel unsure.mp3" },
      { label:"I feel proud.", audio:"./audio/en/心情與狀態表達/I feel proud.mp3" },
    ], 2),

    題("『我覺得很自豪。』的英文是？", [
      { label:"I feel empty.", audio:"./audio/en/心情與狀態表達/I feel empty.mp3" },
      { label:"I feel excited.", audio:"./audio/en/心情與狀態表達/I feel excited.mp3" },
      { label:"I feel unsure.", audio:"./audio/en/心情與狀態表達/I feel unsure.mp3" },
      { label:"I feel proud.", audio:"./audio/en/心情與狀態表達/I feel proud.mp3" },
    ], 3),

    題("『我覺得很心累。』的英文是？", [
      { label:"I feel emotionally drained.", audio:"./audio/en/心情與狀態表達/I feel emotionally drained.mp3" },
      { label:"I feel comfortable.", audio:"./audio/en/心情與狀態表達/I feel comfortable.mp3" },
      { label:"I feel supported.", audio:"./audio/en/心情與狀態表達/I feel supported.mp3" },
      { label:"I feel understood.", audio:"./audio/en/心情與狀態表達/I feel understood.mp3" },
    ], 0),

    題("『我覺得很自在。』的英文是？", [
      { label:"I feel emotionally drained.", audio:"./audio/en/心情與狀態表達/I feel emotionally drained.mp3" },
      { label:"I feel comfortable.", audio:"./audio/en/心情與狀態表達/I feel comfortable.mp3" },
      { label:"I feel supported.", audio:"./audio/en/心情與狀態表達/I feel supported.mp3" },
      { label:"I feel understood.", audio:"./audio/en/心情與狀態表達/I feel understood.mp3" },
    ], 1),

    題("『我覺得很被支持。』的英文是？", [
      { label:"I feel emotionally drained.", audio:"./audio/en/心情與狀態表達/I feel emotionally drained.mp3" },
      { label:"I feel comfortable.", audio:"./audio/en/心情與狀態表達/I feel comfortable.mp3" },
      { label:"I feel supported.", audio:"./audio/en/心情與狀態表達/I feel supported.mp3" },
      { label:"I feel understood.", audio:"./audio/en/心情與狀態表達/I feel understood.mp3" },
    ], 2),

    題("『我覺得很被理解。』的英文是？", [
      { label:"I feel emotionally drained.", audio:"./audio/en/心情與狀態表達/I feel emotionally drained.mp3" },
      { label:"I feel comfortable.", audio:"./audio/en/心情與狀態表達/I feel comfortable.mp3" },
      { label:"I feel supported.", audio:"./audio/en/心情與狀態表達/I feel supported.mp3" },
      { label:"I feel understood.", audio:"./audio/en/心情與狀態表達/I feel understood.mp3" },
    ], 3),


    題("『我覺得心情怪怪的。』的英文是？", [
      { label:"I feel off.", audio:"./audio/en/心情與狀態表達/I feel off.mp3" },
      { label:"I feel comfortable.", audio:"./audio/en/心情與狀態表達/I feel comfortable.mp3" },
      { label:"I feel supported.", audio:"./audio/en/心情與狀態表達/I feel supported.mp3" },
      { label:"I feel understood.", audio:"./audio/en/心情與狀態表達/I feel understood.mp3" },
    ], 0),

    題("『我覺得狀態不太好。』的英文是？", [
      { label:"I don’t feel great.", audio:"./audio/en/心情與狀態表達/I don’t feel great.mp3" },
      { label:"I feel comfortable.", audio:"./audio/en/心情與狀態表達/I feel comfortable.mp3" },
      { label:"I feel supported.", audio:"./audio/en/心情與狀態表達/I feel supported.mp3" },
      { label:"I feel understood.", audio:"./audio/en/心情與狀態表達/I feel understood.mp3" },
    ], 0)
  ];


  // --- 英文：日常會話 ---
  window.QUESTION_BANK["語言/英文/日常會話"] = [
    題("『你在做什麼？』的韓文是？", [
      { label:"뭐 하고 있어요?", audio:"./audio/韓文/日常會話/뭐 하고 있어요.mp3" },
      { label:"요즘 어떻게 지내요?", audio:"./audio/韓文/日常會話/요즘 어떻게 지내요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
    ], 0),

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

    /* =========================
      打招呼 / 基本（陳述句）
    ========================= */

    題("『你好』的韓文是？", [
      { label:"안녕하세요", audio:"./audio/韓文/日常會話/안녕하세요.mp3" },
      { label:"감사합니다", audio:"./audio/韓文/日常會話/감사합니다.mp3" },
      { label:"죄송합니다", audio:"./audio/韓文/日常會話/죄송합니다.mp3" },
      { label:"고마워요", audio:"./audio/韓文/日常會話/고마워요.mp3" },
    ], 0),

    題("『謝謝（正式）』的韓文是？", [
      { label:"감사합니다", audio:"./audio/韓文/日常會話/감사합니다.mp3" },
      { label:"고마워요", audio:"./audio/韓文/日常會話/고마워요.mp3" },
      { label:"미안해요", audio:"./audio/韓文/日常會話/미안해요.mp3" },
      { label:"천만에요", audio:"./audio/韓文/日常會話/천만에요.mp3" },
    ], 0),

    題("『謝謝（比較口語）』的韓文是？", [
      { label:"고마워요", audio:"./audio/韓文/日常會話/고마워요.mp3" },
      { label:"감사합니다", audio:"./audio/韓文/日常會話/감사합니다.mp3" },
      { label:"죄송합니다", audio:"./audio/韓文/日常會話/죄송합니다.mp3" },
      { label:"괜찮아요", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
    ], 0),

    題("『對不起（正式）』的韓文是？", [
      { label:"죄송합니다", audio:"./audio/韓文/日常會話/죄송합니다.mp3" },
      { label:"미안해요", audio:"./audio/韓文/日常會話/미안해요.mp3" },
      { label:"천만에요", audio:"./audio/韓文/日常會話/천만에요.mp3" },
      { label:"괜찮아요", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
    ], 0),

    題("『對不起（口語）』的韓文是？", [
      { label:"미안해요", audio:"./audio/韓文/日常會話/미안해요.mp3" },
      { label:"죄송합니다", audio:"./audio/韓文/日常會話/죄송합니다.mp3" },
      { label:"고마워요", audio:"./audio/韓文/日常會話/고마워요.mp3" },
      { label:"잘 지내요", audio:"./audio/韓文/日常會話/잘 지내요.mp3" },
    ], 0),

    題("『不客氣』的韓文是？", [
      { label:"천만에요", audio:"./audio/韓文/日常會話/천만에요.mp3" },
      { label:"괜찮아요", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
    ], 0),

    題("『沒關係』的韓文是？", [
      { label:"괜찮아요", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
      { label:"피곤해요", audio:"./audio/韓文/日常會話/피곤해요.mp3" },
      { label:"배고파요", audio:"./audio/韓文/日常會話/배고파요.mp3" },
    ], 0),

    題("『我過得很好』的韓文是？", [
      { label:"잘 지내요", audio:"./audio/韓文/日常會話/잘 지내요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"배불러요", audio:"./audio/韓文/日常會話/배불러요.mp3" },
      { label:"피곤해요", audio:"./audio/韓文/日常會話/피곤해요.mp3" },
    ], 0),

    題("『初次見面』的韓文是？", [
      { label:"처음 뵙겠습니다", audio:"./audio/韓文/日常會話/처음 뵙겠습니다.mp3" },
      { label:"만나서 반가워요", audio:"./audio/韓文/日常會話/만나서 반가워요.mp3" },
      { label:"안녕하세요", audio:"./audio/韓文/日常會話/안녕하세요.mp3" },
      { label:"좋은 하루 보내세요", audio:"./audio/韓文/日常會話/좋은 하루 보내세요.mp3" },
    ], 0),

    題("『很高興認識你』的韓文是？", [
      { label:"만나서 반가워요", audio:"./audio/韓文/日常會話/만나서 반가워요.mp3" },
      { label:"처음 뵙겠습니다", audio:"./audio/韓文/日常會話/처음 뵙겠습니다.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
    ], 0),

    /* =========================
      問句類（選項全部問句）
    ========================= */

    題("『你在做什麼？』的韓文是？", [
      { label:"뭐 하고 있어요?", audio:"./audio/韓文/日常會話/뭐 하고 있어요.mp3" },
      { label:"요즘 어떻게 지내요?", audio:"./audio/韓文/日常會話/요즘 어떻게 지내요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
    ], 0),

    題("『最近過得怎麼樣？』的韓文是？", [
      { label:"요즘 어떻게 지내요?", audio:"./audio/韓文/日常會話/요즘 어떻게 지내요.mp3" },
      { label:"뭐 하고 있어요?", audio:"./audio/韓文/日常會話/뭐 하고 있어요.mp3" },
      { label:"얼마예요?", audio:"./audio/韓文/日常會話/얼마예요.mp3" },
      { label:"괜찮아요?", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
    ], 0),

    題("『這裡是哪裡？』的韓文是？", [
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
      { label:"화장실 어디예요?", audio:"./audio/韓文/日常會話/화장실 어디예요.mp3" },
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
      { label:"진짜요?", audio:"./audio/韓文/日常會話/진짜요.mp3" },
    ], 0),

    題("『廁所在哪？』的韓文是？", [
      { label:"화장실 어디예요?", audio:"./audio/韓文/日常會話/화장실 어디예요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
      { label:"얼마예요?", audio:"./audio/韓文/日常會話/얼마예요.mp3" },
      { label:"괜찮아요?", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
    ], 0),

    題("『這裡怎麼去？』的韓文是？", [
      { label:"여기 어떻게 가요?", audio:"./audio/韓文/日常會話/여기 어떻게 가요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
      { label:"진짜요?", audio:"./audio/韓文/日常會話/진짜요.mp3" },
    ], 0),

    題("『很遠嗎？』的韓文是？", [
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
      { label:"괜찮아요?", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"얼마예요?", audio:"./audio/韓文/日常會話/얼마예요.mp3" },
      { label:"화장실 어디예요?", audio:"./audio/韓文/日常會話/화장실 어디예요.mp3" },
    ], 0),

    題("『真的嗎？』的韓文是？", [
      { label:"진짜요?", audio:"./audio/韓文/日常會話/진짜요.mp3" },
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
      { label:"얼마예요?", audio:"./audio/韓文/日常會話/얼마예요.mp3" },
    ], 0),

    題("『可以嗎？／沒問題嗎？』的韓文是？", [
      { label:"괜찮아요?", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"진짜요?", audio:"./audio/韓文/日常會話/진짜요.mp3" },
      { label:"멀어요?", audio:"./audio/韓文/日常會話/멀어요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
    ], 0),

    題("『多少錢？』的韓文是？", [
      { label:"얼마예요?", audio:"./audio/韓文/日常會話/얼마예요.mp3" },
      { label:"진짜요?", audio:"./audio/韓文/日常會話/진짜요.mp3" },
      { label:"괜찮아요?", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"화장실 어디예요?", audio:"./audio/韓文/日常會話/화장실 어디예요.mp3" },
    ], 0),

    題("『可以拍照嗎？』的韓文是？", [
      { label:"사진 찍어도 돼요?", audio:"./audio/韓文/日常會話/사진 찍어도 돼요.mp3" },
      { label:"괜찮아요?", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"진짜요?", audio:"./audio/韓文/日常會話/진짜요.mp3" },
      { label:"여기 어디예요?", audio:"./audio/韓文/日常會話/여기 어디예요.mp3" },
    ], 0),

    題("『幾位？』的韓文是？", [
      { label:"몇 분이세요?", audio:"./audio/韓文/日常會話/몇 분이세요.mp3" },
      { label:"이거 뭐예요?", audio:"./audio/韓文/日常會話/이거 뭐예요.mp3" },
      { label:"채식 메뉴 있어요?", audio:"./audio/韓文/日常會話/채식 메뉴 있어요.mp3" },
      { label:"추천 메뉴 있어요?", audio:"./audio/韓文/日常會話/추천 메뉴 있어요.mp3" },
    ], 0),

    題("『這個是什麼？』的韓文是？", [
      { label:"이거 뭐예요?", audio:"./audio/韓文/日常會話/이거 뭐예요.mp3" },
      { label:"추천 메뉴 있어요?", audio:"./audio/韓文/日常會話/추천 메뉴 있어요.mp3" },
      { label:"채식 메뉴 있어요?", audio:"./audio/韓文/日常會話/채식 메뉴 있어요.mp3" },
      { label:"몇 분이세요?", audio:"./audio/韓文/日常會話/몇 분이세요.mp3" },
    ], 0),

    題("『有推薦的嗎？』的韓文是？", [
      { label:"추천 메뉴 있어요?", audio:"./audio/韓文/日常會話/추천 메뉴 있어요.mp3" },
      { label:"채식 메뉴 있어요?", audio:"./audio/韓文/日常會話/채식 메뉴 있어요.mp3" },
      { label:"이거 뭐예요?", audio:"./audio/韓文/日常會話/이거 뭐예요.mp3" },
      { label:"사진 찍어도 돼요?", audio:"./audio/韓文/日常會話/사진 찍어도 돼요.mp3" },
    ], 0),

    題("『有素食嗎？』的韓文是？", [
      { label:"채식 메뉴 있어요?", audio:"./audio/韓文/日常會話/채식 메뉴 있어요.mp3" },
      { label:"추천 메뉴 있어요?", audio:"./audio/韓文/日常會話/추천 메뉴 있어요.mp3" },
      { label:"이거 뭐예요?", audio:"./audio/韓文/日常會話/이거 뭐예요.mp3" },
      { label:"몇 분이세요?", audio:"./audio/韓文/日常會話/몇 분이세요.mp3" },
    ], 0),

    /* =========================
      日常狀態 / 反應（陳述句）
    ========================= */

    題("『我餓了』的韓文是？", [
      { label:"배고파요", audio:"./audio/韓文/日常會話/배고파요.mp3" },
      { label:"배불러요", audio:"./audio/韓文/日常會話/배불러요.mp3" },
      { label:"피곤해요", audio:"./audio/韓文/日常會話/피곤해요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    題("『我吃飽了』的韓文是？", [
      { label:"배불러요", audio:"./audio/韓文/日常會話/배불러요.mp3" },
      { label:"배고파요", audio:"./audio/韓文/日常會話/배고파요.mp3" },
      { label:"피곤해요", audio:"./audio/韓文/日常會話/피곤해요.mp3" },
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
    ], 0),

    題("『好累』的韓文是？", [
      { label:"피곤해요", audio:"./audio/韓文/日常會話/피곤해요.mp3" },
      { label:"배고파요", audio:"./audio/韓文/日常會話/배고파요.mp3" },
      { label:"대박이에요", audio:"./audio/韓文/日常會話/대박이에요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    題("『今天天氣很好』的韓文是？", [
      { label:"오늘 날씨 좋아요", audio:"./audio/韓文/日常會話/오늘 날씨 좋아요.mp3" },
      { label:"오늘 너무 추워요", audio:"./audio/韓文/日常會話/오늘 너무 추워요.mp3" },
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
      { label:"좋은 하루 보내세요", audio:"./audio/韓文/日常會話/좋은 하루 보내세요.mp3" },
    ], 0),

    題("『今天很冷』的韓文是？", [
      { label:"오늘 너무 추워요", audio:"./audio/韓文/日常會話/오늘 너무 추워요.mp3" },
      { label:"오늘 날씨 좋아요", audio:"./audio/韓文/日常會話/오늘 날씨 좋아요.mp3" },
      { label:"피곤해요", audio:"./audio/韓文/日常會話/피곤해요.mp3" },
      { label:"배고파요", audio:"./audio/韓文/日常會話/배고파요.mp3" },
    ], 0),

    題("『太好了』的韓文是？", [
      { label:"잘됐다", audio:"./audio/韓文/日常會話/잘됐다.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"아쉽다", audio:"./audio/韓文/日常會話/아쉽다.mp3" },
      { label:"대박이에요", audio:"./audio/韓文/日常會話/대박이에요.mp3" },
    ], 0),

    題("『太厲害了』的韓文是？", [
      { label:"대박이에요", audio:"./audio/韓文/日常會話/대박이에요.mp3" },
      { label:"아쉽다", audio:"./audio/韓文/日常會話/아쉽다.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
    ], 0),

    題("『真可惜』的韓文是？", [
      { label:"아쉽다", audio:"./audio/韓文/日常會話/아쉽다.mp3" },
      { label:"대박이에요", audio:"./audio/韓文/日常會話/대박이에요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"잘됐다", audio:"./audio/韓文/日常會話/잘됐다.mp3" },
    ], 0),

    題("『好好笑』的韓文是？", [
      { label:"너무 웃겨요", audio:"./audio/韓文/日常會話/너무 웃겨요.mp3" },
      { label:"너무 귀여워요", audio:"./audio/韓文/日常會話/너무 귀여워요.mp3" },
      { label:"예뻐요", audio:"./audio/韓文/日常會話/예뻐요.mp3" },
      { label:"잘생겼어요", audio:"./audio/韓文/日常會話/잘생겼어요.mp3" },
    ], 0),

    題("『好可愛』的韓文是？", [
      { label:"너무 귀여워요", audio:"./audio/韓文/日常會話/너무 귀여워요.mp3" },
      { label:"너무 웃겨요", audio:"./audio/韓文/日常會話/너무 웃겨요.mp3" },
      { label:"예뻐요", audio:"./audio/韓文/日常會話/예뻐요.mp3" },
      { label:"잘생겼어요", audio:"./audio/韓文/日常會話/잘생겼어요.mp3" },
    ], 0),

    題("『好帥』的韓文是？", [
      { label:"잘생겼어요", audio:"./audio/韓文/日常會話/잘생겼어요.mp3" },
      { label:"예뻐요", audio:"./audio/韓文/日常會話/예뻐요.mp3" },
      { label:"너무 귀여워요", audio:"./audio/韓文/日常會話/너무 귀여워요.mp3" },
      { label:"너무 웃겨요", audio:"./audio/韓文/日常會話/너무 웃겨요.mp3" },
    ], 0),

    題("『好漂亮』的韓文是？", [
      { label:"예뻐요", audio:"./audio/韓文/日常會話/예뻐요.mp3" },
      { label:"잘생겼어요", audio:"./audio/韓文/日常會話/잘생겼어요.mp3" },
      { label:"너무 귀여워요", audio:"./audio/韓文/日常會話/너무 귀여워요.mp3" },
      { label:"너무 웃겨요", audio:"./audio/韓文/日常會話/너무 웃겨요.mp3" },
    ], 0),

    題("『我喜歡』的韓文是？", [
      { label:"좋아해요", audio:"./audio/韓文/日常會話/좋아해요.mp3" },
      { label:"안 좋아해요", audio:"./audio/韓文/日常會話/안 좋아해요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
    ], 0),

    題("『我不喜歡』的韓文是？", [
      { label:"안 좋아해요", audio:"./audio/韓文/日常會話/안 좋아해요.mp3" },
      { label:"좋아해요", audio:"./audio/韓文/日常會話/좋아해요.mp3" },
      { label:"모르겠어요", audio:"./audio/韓文/日常會話/모르겠어요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
    ], 0),

    題("『我懂了』的韓文是？", [
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
      { label:"모르겠어요", audio:"./audio/韓文/日常會話/모르겠어요.mp3" },
      { label:"잘 모르겠어요", audio:"./audio/韓文/日常會話/잘 모르겠어요.mp3" },
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
    ], 0),

    題("『不知道』的韓文是？", [
      { label:"모르겠어요", audio:"./audio/韓文/日常會話/모르겠어요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
      { label:"잘 모르겠어요", audio:"./audio/韓文/日常會話/잘 모르겠어요.mp3" },
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
    ], 0),

    題("『我聽不懂』的韓文是？", [
      { label:"잘 모르겠어요", audio:"./audio/韓文/日常會話/잘 모르겠어요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
      { label:"모르겠어요", audio:"./audio/韓文/日常會話/모르겠어요.mp3" },
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
    ], 0),

    /* =========================
      請求 / 指令（陳述句）
    ========================= */

    題("『請等一下』的韓文是？", [
      { label:"잠깐만요", audio:"./audio/韓文/日常會話/잠깐만요.mp3" },
      { label:"좀 도와주세요", audio:"./audio/韓文/日常會話/좀 도와주세요.mp3" },
      { label:"다시 말해 주세요", audio:"./audio/韓文/日常會話/다시 말해 주세요.mp3" },
      { label:"천천히 말해 주세요", audio:"./audio/韓文/日常會話/천천히 말해 주세요.mp3" },
    ], 0),

    題("『請幫我一下』的韓文是？", [
      { label:"좀 도와주세요", audio:"./audio/韓文/日常會話/좀 도와주세요.mp3" },
      { label:"잠깐만요", audio:"./audio/韓文/日常會話/잠깐만요.mp3" },
      { label:"다시 말해 주세요", audio:"./audio/韓文/日常會話/다시 말해 주세요.mp3" },
      { label:"천천히 말해 주세요", audio:"./audio/韓文/日常會話/천천히 말해 주세요.mp3" },
    ], 0),

    題("『再說一次』的韓文是？", [
      { label:"다시 말해 주세요", audio:"./audio/韓文/日常會話/다시 말해 주세요.mp3" },
      { label:"천천히 말해 주세요", audio:"./audio/韓文/日常會話/천천히 말해 주세요.mp3" },
      { label:"잠깐만요", audio:"./audio/韓文/日常會話/잠깐만요.mp3" },
      { label:"좀 도와주세요", audio:"./audio/韓文/日常會話/좀 도와주세요.mp3" },
    ], 0),

    題("『慢一點說』的韓文是？", [
      { label:"천천히 말해 주세요", audio:"./audio/韓文/日常會話/천천히 말해 주세요.mp3" },
      { label:"다시 말해 주세요", audio:"./audio/韓文/日常會話/다시 말해 주세요.mp3" },
      { label:"잠깐만요", audio:"./audio/韓文/日常會話/잠깐만요.mp3" },
      { label:"좀 도와주세요", audio:"./audio/韓文/日常會話/좀 도와주세요.mp3" },
    ], 0),

    題("『沒問題』的韓文是？", [
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
      { label:"괜찮아요", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    /* =========================
      外出 / 交通（陳述句）
    ========================= */

    題("『我迷路了』的韓文是？", [
      { label:"길을 잃었어요", audio:"./audio/韓文/日常會話/길을 잃었어요.mp3" },
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
      { label:"친구 찾고 있어요", audio:"./audio/韓文/日常會話/친구 찾고 있어요.mp3" },
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
    ], 0),

    題("『我要出門』的韓文是？", [
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
      { label:"지하철 탈 거예요", audio:"./audio/韓文/日常會話/지하철 탈 거예요.mp3" },
      { label:"친구 찾고 있어요", audio:"./audio/韓文/日常會話/친구 찾고 있어요.mp3" },
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
    ], 0),

    題("『我要搭地鐵』的韓文是？", [
      { label:"지하철 탈 거예요", audio:"./audio/韓文/日常會話/지하철 탈 거예요.mp3" },
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
      { label:"여기서 내릴게요", audio:"./audio/韓文/日常會話/여기서 내릴게요.mp3" },
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
    ], 0),

    題("『我在這裡下車』的韓文是？", [
      { label:"여기서 내릴게요", audio:"./audio/韓文/日常會話/여기서 내릴게요.mp3" },
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
      { label:"친구 찾고 있어요", audio:"./audio/韓文/日常會話/친구 찾고 있어요.mp3" },
      { label:"길을 잃었어요", audio:"./audio/韓文/日常會話/길을 잃었어요.mp3" },
    ], 0),

    題("『我在找朋友』的韓文是？", [
      { label:"친구 찾고 있어요", audio:"./audio/韓文/日常會話/친구 찾고 있어요.mp3" },
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
      { label:"길을 잃었어요", audio:"./audio/韓文/日常會話/길을 잃었어요.mp3" },
    ], 0),

    題("『我快到了』的韓文是？", [
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
      { label:"친구 찾고 있어요", audio:"./audio/韓文/日常會話/친구 찾고 있어요.mp3" },
      { label:"여기서 내릴게요", audio:"./audio/韓文/日常會話/여기서 내릴게요.mp3" },
      { label:"길을 잃었어요", audio:"./audio/韓文/日常會話/길을 잃었어요.mp3" },
    ], 0),

    題("『左邊』的韓文是？", [
      { label:"왼쪽", audio:"./audio/韓文/日常會話/왼쪽.mp3" },
      { label:"오른쪽", audio:"./audio/韓文/日常會話/오른쪽.mp3" },
      { label:"가까워요", audio:"./audio/韓文/日常會話/가까워요.mp3" },
      { label:"직진하세요", audio:"./audio/韓文/日常會話/직진하세요.mp3" },
    ], 0),

    題("『右邊』的韓文是？", [
      { label:"오른쪽", audio:"./audio/韓文/日常會話/오른쪽.mp3" },
      { label:"왼쪽", audio:"./audio/韓文/日常會話/왼쪽.mp3" },
      { label:"직진하세요", audio:"./audio/韓文/日常會話/직진하세요.mp3" },
      { label:"가까워요", audio:"./audio/韓文/日常會話/가까워요.mp3" },
    ], 0),

    題("『直走』的韓文是？", [
      { label:"직진하세요", audio:"./audio/韓文/日常會話/직진하세요.mp3" },
      { label:"가까워요", audio:"./audio/韓文/日常會話/가까워요.mp3" },
      { label:"왼쪽", audio:"./audio/韓文/日常會話/왼쪽.mp3" },
      { label:"오른쪽", audio:"./audio/韓文/日常會話/오른쪽.mp3" },
    ], 0),

    題("『很近』的韓文是？", [
      { label:"가까워요", audio:"./audio/韓文/日常會話/가까워요.mp3" },
      { label:"길을 잃었어요", audio:"./audio/韓文/日常會話/길을 잃었어요.mp3" },
      { label:"거의 다 왔어요", audio:"./audio/韓文/日常會話/거의 다 왔어요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    /* =========================
      工作 / 日常（陳述句）
    ========================= */

    題("『我在上班』的韓文是？", [
      { label:"일하고 있어요", audio:"./audio/韓文/日常會話/일하고 있어요.mp3" },
      { label:"수업 듣고 있어요", audio:"./audio/韓文/日常會話/수업 듣고 있어요.mp3" },
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
      { label:"친구 찾고 있어요", audio:"./audio/韓文/日常會話/친구 찾고 있어요.mp3" },
    ], 0),

    題("『我在上課』的韓文是？", [
      { label:"수업 듣고 있어요", audio:"./audio/韓文/日常會話/수업 듣고 있어요.mp3" },
      { label:"일하고 있어요", audio:"./audio/韓文/日常會話/일하고 있어요.mp3" },
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    /* =========================
      結尾 / 禮貌（陳述句）
    ========================= */

    題("『辛苦了』的韓文是？", [
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
      { label:"화이팅", audio:"./audio/韓文/日常會話/화이팅.mp3" },
      { label:"좋은 하루 보내세요", audio:"./audio/韓文/日常會話/좋은 하루 보내세요.mp3" },
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
    ], 0),

    題("『加油』的韓文是？", [
      { label:"화이팅", audio:"./audio/韓文/日常會話/화이팅.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
      { label:"정말 감사합니다", audio:"./audio/韓文/日常會話/정말 감사합니다.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    題("『真的謝謝你』的韓文是？", [
      { label:"정말 감사합니다", audio:"./audio/韓文/日常會話/정말 감사합니다.mp3" },
      { label:"감사합니다", audio:"./audio/韓文/日常會話/감사합니다.mp3" },
      { label:"고마워요", audio:"./audio/韓文/日常會話/고마워요.mp3" },
      { label:"천만에요", audio:"./audio/韓文/日常會話/천만에요.mp3" },
    ], 0),

    題("『今天很開心』的韓文是？", [
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
      { label:"좋은 하루 보내세요", audio:"./audio/韓文/日常會話/좋은 하루 보내세요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
      { label:"조심히 가세요", audio:"./audio/韓文/日常會話/조심히 가세요.mp3" },
    ], 0),

    題("『祝你有美好的一天』的韓文是？", [
      { label:"좋은 하루 보내세요", audio:"./audio/韓文/日常會話/좋은 하루 보내세요.mp3" },
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
      { label:"정말 감사합니다", audio:"./audio/韓文/日常會話/정말 감사합니다.mp3" },
    ], 0),

    題("『慢走』的韓文是？", [
      { label:"조심히 가세요", audio:"./audio/韓文/日常會話/조심히 가세요.mp3" },
      { label:"안녕히 가세요", audio:"./audio/韓文/日常會話/안녕히 가세요.mp3" },
      { label:"안녕히 계세요", audio:"./audio/韓文/日常會話/안녕히 계세요.mp3" },
      { label:"다음에 봐요", audio:"./audio/韓文/日常會話/다음에 봐요.mp3" },
    ], 0),

    題("『再見（離開的人說）』的韓文是？", [
      { label:"안녕히 계세요", audio:"./audio/韓文/日常會話/안녕히 계세요.mp3" },
      { label:"안녕히 가세요", audio:"./audio/韓文/日常會話/안녕히 가세요.mp3" },
      { label:"조심히 가세요", audio:"./audio/韓文/日常會話/조심히 가세요.mp3" },
      { label:"좋은 하루 보내세요", audio:"./audio/韓文/日常會話/좋은 하루 보내세요.mp3" },
    ], 0),

    題("『再見（留下的人說）』的韓文是？", [
      { label:"안녕히 가세요", audio:"./audio/韓文/日常會話/안녕히 가세요.mp3" },
      { label:"안녕히 계세요", audio:"./audio/韓文/日常會話/안녕히 계세요.mp3" },
      { label:"조심히 가세요", audio:"./audio/韓文/日常會話/조심히 가세요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
    ], 0),

    題("『明天見』的韓文是？", [
      { label:"내일 봐요", audio:"./audio/韓文/日常會話/내일 봐요.mp3" },
      { label:"다음에 봐요", audio:"./audio/韓文/日常會話/다음에 봐요.mp3" },
      { label:"안녕히 주무세요", audio:"./audio/韓文/日常會話/안녕히 주무세요.mp3" },
      { label:"조심히 가세요", audio:"./audio/韓文/日常會話/조심히 가세요.mp3" },
    ], 0),

    題("『下次見』的韓文是？", [
      { label:"다음에 봐요", audio:"./audio/韓文/日常會話/다음에 봐요.mp3" },
      { label:"내일 봐요", audio:"./audio/韓文/日常會話/내일 봐요.mp3" },
      { label:"안녕히 주무세요", audio:"./audio/韓文/日常會話/안녕히 주무세요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
    ], 0),

    題("『祝你好運』的韓文是？", [
      { label:"행운을 빌어요", audio:"./audio/韓文/日常會話/행운을 빌어요.mp3" },
      { label:"화이팅", audio:"./audio/韓文/日常會話/화이팅.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"잘됐다", audio:"./audio/韓文/日常會話/잘됐다.mp3" },
    ], 0),

    題("『晚安』的韓文是？", [
      { label:"안녕히 주무세요", audio:"./audio/韓文/日常會話/안녕히 주무세요.mp3" },
      { label:"내일 봐요", audio:"./audio/韓文/日常會話/내일 봐요.mp3" },
      { label:"다음에 봐요", audio:"./audio/韓文/日常會話/다음에 봐요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
    ], 0),

    /* =========================
      補題（維持規則：陳述句）
      讓總數 ≥ 50
    ========================= */

    題("『좋아요（좋아요）』的韓文是？（意義：好／喜歡）", [
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"잘됐다", audio:"./audio/韓文/日常會話/잘됐다.mp3" },
      { label:"아쉽다", audio:"./audio/韓文/日常會話/아쉽다.mp3" },
      { label:"대박이에요", audio:"./audio/韓文/日常會話/대박이에요.mp3" },
    ], 0),

    題("『我不太懂（我不確定）』最接近的韓文是？", [
      { label:"잘 모르겠어요", audio:"./audio/韓文/日常會話/잘 모르겠어요.mp3" },
      { label:"모르겠어요", audio:"./audio/韓文/日常會話/모르겠어요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
    ], 0),

    題("『我覺得沒問題』最接近的韓文是？", [
      { label:"문제없어요", audio:"./audio/韓文/日常會話/문제없어요.mp3" },
      { label:"괜찮아요", audio:"./audio/韓文/日常會話/괜찮아요.mp3" },
      { label:"알겠어요", audio:"./audio/韓文/日常會話/알겠어요.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
    ], 0),

    題("『我覺得超讚（爆炸厲害）』的韓文是？", [
      { label:"대박이에요", audio:"./audio/韓文/日常會話/대박이에요.mp3" },
      { label:"잘됐다", audio:"./audio/韓文/日常會話/잘됐다.mp3" },
      { label:"좋아요", audio:"./audio/韓文/日常會話/좋아요.mp3" },
      { label:"아쉽다", audio:"./audio/韓文/日常會話/아쉽다.mp3" },
    ], 0),

    題("『我準備要出門了』的韓文是？", [
      { label:"나갈 거예요", audio:"./audio/韓文/日常會話/나갈 거예요.mp3" },
      { label:"지하철 탈 거예요", audio:"./audio/韓文/日常會話/지하철 탈 거예요.mp3" },
      { label:"오늘 즐거웠어요", audio:"./audio/韓文/日常會話/오늘 즐거웠어요.mp3" },
      { label:"수고했어요", audio:"./audio/韓文/日常會話/수고했어요.mp3" },
    ], 0),

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
