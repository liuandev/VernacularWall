const wordsArr = [
    {name:"不行",left : -1, top : -1, vertical : false,  size : "250%"},
    {name:"毛巾",left : "43%", top : "33%", vertical : true,   size : "250%"},
    {name:"拖拉机",left : "70%", top : "22%", vertical : true,   size : "250%"},
    {name:"夹菜",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"妖怪",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"毛毛虫",left : "50%", top : "50%", vertical : false,   size : "250%"},
    {name:"硬币",left : -1, top : -1, vertical : false,   size : "200%"},
    {name:"钞票",left : "28%", top : "46%", vertical : false,   size : "250%"},
    {name:"脸蛋",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"脚跟",left : "39%", top : "15%", vertical : true,   size : "250%"},
    {name:"玉米",left : "11%", top : "5%", vertical : false,   size : "250%"},
    {name:"鸡蛋饼",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"脖子",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"没空",left : -1, top : -1, vertical : true,   size : "250%"},
    {name:"墙角",left : "82%", top : "23%", vertical : false,   size : "250%"},
    {name:"拖鞋",left : "50%", top : "35%", vertical : false,   size : "250%"},
    {name:"自行车",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"月亮",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"倒酒",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"凳子",left : "45%", top : "13%", vertical : false,   size : "200%"},
    {name:"铁锹",left : "57%", top : "25%", vertical : false,   size : "200%"},
    {name:"讨厌",left : "21%", top : "14%", vertical : true,   size : "250%"},
    {name:"捣蛋",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"肥皂",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"指甲",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"拳头",left : "30%", top : "6%", vertical : false,   size : "250%"},
    {name:"老太太",left : "49%", top : "19%", vertical : true,   size : "250%"},
    {name:"挠痒",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"很热",left : "71%", top : "3%", vertical : false,   size : "350%"},
    {name:"葵花籽",left : "67%", top : "52%", vertical : true,   size : "200%"},
    {name:"撒谎",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"口袋",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"内裤",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"油条",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"到哪儿",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"丢人",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"漂亮",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"土豆",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"番茄",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"金龟子",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"黄鳝",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"扫把",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"赶快",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"看热闹",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"喝多了",left : -1, top : -1, vertical : false,   size : "250%"},
    {name:"打架",left : -1, top : -1, vertical : false,   size : "250%"},
];
// const wordsArr = [
//     {name:"蚯蚓",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"不行",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"泥块儿",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"毛巾",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"拖拉机",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"夹菜",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"妖怪",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"毛毛虫",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"硬币",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"钞票",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"脸蛋",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"脚跟",left : -1, top : -1, vertical : true,   size : "250%"},
//     {name:"玉米",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"鸡蛋饼",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"脖子",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"没空",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"惊讶",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"游泳",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"手腕",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"得罪人",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"捉迷藏",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"砖头",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"小蝌蚪",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"下田",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"墙角",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"拖鞋",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"自行车",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"月亮",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"倒酒",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"手绢",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"凳子",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"铁锹",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"失败",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"讨厌",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"胡扯",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"聪明",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"捣蛋",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"山芋",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"爸爸",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"肥皂",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"小腿",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"指甲",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"拳头",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"老太太",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"挠痒",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"很热",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"尖叫",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"逗你玩",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"葵花籽",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"潜水",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"撒谎",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"口袋",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"内裤",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"油条",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"到哪儿",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"反常",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"乌鸦",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"天刚亮",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"丢人",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"行",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"知了",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"吃饭",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"真行",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"太阳",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"将来",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"看热闹",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"厨房",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"坏了",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"吝啬",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"野蛮",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"漂亮",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"土豆",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"蟾蜍",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"郁闷",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"番茄",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"快来",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"金龟子",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"黄鳝",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"钥匙",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"笔",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"扫把",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"麦子",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"赶快",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"野蛮",left : -1, top : -1, vertical : false,   size : "250%"},
//     {name:"逞能",left : -1, top : -1, vertical : false,   size : "250%"}
// ];
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/37.漂亮.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/39.西红柿.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/36.丢人.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/12.鸡蛋饼.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/33.裤头子.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/24.肥皂.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/7.硬币.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/45.喝多了.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/11.玉米.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/21.铁锹.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/34.油条.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/35.在哪儿.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/2.毛巾.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/18.月亮.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/9.脸蛋.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/10.脚跟.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/30.葵花籽.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/41.黄鳝.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/28.挠痒.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/38.土豆.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/3.拖拉机.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/4.夹菜.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/8.钞票.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/22.讨厌人.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/43.赶快.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/42.扫把.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/46.打架.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/15.墙角.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/40.金龟子.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/1.不行.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/5.妖怪.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/16.拖鞋.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/13.脖子.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/20.凳子.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/25.指甲.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/32.口袋.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/31.撒谎.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/44.看热闹.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/14.没空.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/19.倒酒.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/27.老太太.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/23.调皮.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/6.毛毛虫.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/26.拳头.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/17.自行车.mp3
// file:///C:/Users/cai/Desktop/XIANGYIN/audio/female/29，很热.mp3
