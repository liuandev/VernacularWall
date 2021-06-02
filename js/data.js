// const wordsArr = [
//     {name:"蚯蚓",x : -1, y : -1, vertical : false, size : 0},
//     {name:"不行",x : -1, y : -1, vertical : false, size : 0},
//     {name:"泥块儿",x : -1, y : -1, vertical : false, size : 0},
//     {name:"毛巾",x : -1, y : -1, vertical : false, size : 0},
//     {name:"拖拉机",x : -1, y : -1, vertical : false, size : 0},
//     {name:"夹菜",x : -1, y : -1, vertical : false, size : 0},
//     {name:"妖怪",x : -1, y : -1, vertical : false, size : 0},
//     {name:"毛毛虫",x : -1, y : -1, vertical : false, size : 0},
//     {name:"硬币",x : -1, y : -1, vertical : false, size : 0},
//     {name:"钞票",x : -1, y : -1, vertical : false, size : 0},
//     {name:"脸蛋",x : -1, y : -1, vertical : false, size : 0},
//     {name:"脚跟",x : -1, y : -1, vertical : true, size : 0},
//     {name:"玉米",x : -1, y : -1, vertical : false, size : 0},
//     {name:"鸡蛋饼",x : -1, y : -1, vertical : false, size : 0},
//     {name:"脖子",x : -1, y : -1, vertical : false, size : 0},
//     {name:"没空",x : -1, y : -1, vertical : false, size : 0},
//     {name:"惊讶",x : -1, y : -1, vertical : false, size : 0},
//     {name:"游泳",x : -1, y : -1, vertical : false, size : 0},
//     {name:"手腕",x : -1, y : -1, vertical : false, size : 0},
//     {name:"得罪人",x : -1, y : -1, vertical : false, size : 0},
//     {name:"捉迷藏",x : -1, y : -1, vertical : false, size : 0},
//     {name:"砖头",x : -1, y : -1, vertical : false, size : 0},
//     {name:"小蝌蚪",x : -1, y : -1, vertical : false, size : 0},
//     {name:"下田",x : -1, y : -1, vertical : false, size : 0},
//     {name:"墙角",x : -1, y : -1, vertical : false, size : 0},
//     {name:"拖鞋",x : -1, y : -1, vertical : false, size : 0},
//     {name:"自行车",x : -1, y : -1, vertical : false, size : 0},
//     {name:"月亮",x : -1, y : -1, vertical : false, size : 0},
//     {name:"倒酒",x : -1, y : -1, vertical : false, size : 0},
//     {name:"手绢",x : -1, y : -1, vertical : false, size : 0},
//     {name:"凳子",x : -1, y : -1, vertical : false, size : 0},
//     {name:"铁锹",x : -1, y : -1, vertical : false, size : 0},
//     {name:"失败",x : -1, y : -1, vertical : false, size : 0},
//     {name:"讨厌",x : -1, y : -1, vertical : false, size : 0},
//     {name:"胡扯",x : -1, y : -1, vertical : false, size : 0},
//     {name:"聪明",x : -1, y : -1, vertical : false, size : 0},
//     {name:"捣蛋",x : -1, y : -1, vertical : false, size : 0},
//     {name:"山芋",x : -1, y : -1, vertical : false, size : 0},
//     {name:"爸爸",x : -1, y : -1, vertical : false, size : 0},
//     {name:"肥皂",x : -1, y : -1, vertical : false, size : 0},
//     {name:"小腿",x : -1, y : -1, vertical : false, size : 0},
//     {name:"指甲",x : -1, y : -1, vertical : false, size : 0},
//     {name:"拳头",x : -1, y : -1, vertical : false, size : 0},
//     {name:"老太太",x : -1, y : -1, vertical : false, size : 0},
//     {name:"挠痒",x : -1, y : -1, vertical : false, size : 0},
//     {name:"很热",x : -1, y : -1, vertical : false, size : 0},
//     {name:"尖叫",x : -1, y : -1, vertical : false, size : 0},
//     {name:"逗你玩",x : -1, y : -1, vertical : false, size : 0},
//     {name:"葵花籽",x : -1, y : -1, vertical : false, size : 0},
//     {name:"潜水",x : -1, y : -1, vertical : false, size : 0},
//     {name:"撒谎",x : -1, y : -1, vertical : false, size : 0},
//     {name:"口袋",x : -1, y : -1, vertical : false, size : 0},
//     {name:"内裤",x : -1, y : -1, vertical : false, size : 0},
//     {name:"油条",x : -1, y : -1, vertical : false, size : 0},
//     {name:"到哪儿",x : -1, y : -1, vertical : false, size : 0},
//     {name:"反常",x : -1, y : -1, vertical : false, size : 0},
//     {name:"乌鸦",x : -1, y : -1, vertical : false, size : 0},
//     {name:"天刚亮",x : -1, y : -1, vertical : false, size : 0},
//     {name:"丢人",x : -1, y : -1, vertical : false, size : 0},
//     {name:"行",x : -1, y : -1, vertical : false, size : 0},
//     {name:"知了",x : -1, y : -1, vertical : false, size : 0},
//     {name:"吃饭",x : -1, y : -1, vertical : false, size : 0},
//     {name:"真行",x : -1, y : -1, vertical : false, size : 0},
//     {name:"太阳",x : -1, y : -1, vertical : false, size : 0},
//     {name:"将来",x : -1, y : -1, vertical : false, size : 0},
//     {name:"看热闹",x : -1, y : -1, vertical : false, size : 0},
//     {name:"厨房",x : -1, y : -1, vertical : false, size : 0},
//     {name:"坏了",x : -1, y : -1, vertical : false, size : 0},
//     {name:"吝啬",x : -1, y : -1, vertical : false, size : 0},
//     {name:"野蛮",x : -1, y : -1, vertical : false, size : 0},
//     {name:"漂亮",x : -1, y : -1, vertical : false, size : 0},
//     {name:"土豆",x : -1, y : -1, vertical : false, size : 0},
//     {name:"蟾蜍",x : -1, y : -1, vertical : false, size : 0},
//     {name:"郁闷",x : -1, y : -1, vertical : false, size : 0},
//     {name:"番茄",x : -1, y : -1, vertical : false, size : 0},
//     {name:"快来",x : -1, y : -1, vertical : false, size : 0},
//     {name:"金龟子",x : -1, y : -1, vertical : false, size : 0},
//     {name:"黄鳝",x : -1, y : -1, vertical : false, size : 0},
//     {name:"钥匙",x : -1, y : -1, vertical : false, size : 0},
//     {name:"笔",x : -1, y : -1, vertical : false, size : 0},
//     {name:"扫把",x : -1, y : -1, vertical : false, size : 0},
//     {name:"麦子",x : -1, y : -1, vertical : false, size : 0},
//     {name:"赶快",x : -1, y : -1, vertical : false, size : 0},
//     {name:"野蛮",x : -1, y : -1, vertical : false, size : 0},
//     {name:"逞能",x : -1, y : -1, vertical : false, size : 0}
// ];

const wordsArr = [
    {name:"不行",x : -1, y : -1, vertical : false, size : 0},
    {name:"毛巾",x : -1, y : -1, vertical : false, size : 0},
    {name:"拖拉机",x : -1, y : -1, vertical : false, size : 0},
    {name:"夹菜",x : -1, y : -1, vertical : false, size : 0},
    {name:"妖怪",x : -1, y : -1, vertical : false, size : 0},
    {name:"毛毛虫",x : -1, y : -1, vertical : false, size : 0},
    {name:"硬币",x : -1, y : -1, vertical : false, size : 0},
    {name:"钞票",x : -1, y : -1, vertical : false, size : 0},
    {name:"脸蛋",x : -1, y : -1, vertical : false, size : 0},
    {name:"脚跟",x : -1, y : -1, vertical : false, size : 0},
    {name:"玉米",x : -1, y : -1, vertical : false, size : 0},
    {name:"鸡蛋饼",x : -1, y : -1, vertical : false, size : 0},
    {name:"脖子",x : -1, y : -1, vertical : false, size : 0},
    {name:"没空",x : -1, y : -1, vertical : false, size : 0},
    {name:"墙角",x : -1, y : -1, vertical : false, size : 0},
    {name:"拖鞋",x : -1, y : -1, vertical : false, size : 0},
    {name:"自行车",x : -1, y : -1, vertical : false, size : 0},
    {name:"月亮",x : -1, y : -1, vertical : false, size : 0},
    {name:"倒酒",x : -1, y : -1, vertical : false, size : 0},
    {name:"凳子",x : -1, y : -1, vertical : false, size : 0},
    {name:"铁锹",x : -1, y : -1, vertical : false, size : 0},
    {name:"讨厌",x : -1, y : -1, vertical : false, size : 0},
    {name:"捣蛋",x : -1, y : -1, vertical : false, size : 0},
    {name:"肥皂",x : -1, y : -1, vertical : false, size : 0},
    {name:"指甲",x : -1, y : -1, vertical : false, size : 0},
    {name:"拳头",x : -1, y : -1, vertical : false, size : 0},
    {name:"老太太",x : -1, y : -1, vertical : false, size : 0},
    {name:"挠痒",x : -1, y : -1, vertical : false, size : 0},
    {name:"很热",x : -1, y : -1, vertical : false, size : 0},
    {name:"葵花籽",x : -1, y : -1, vertical : false, size : 0},
    {name:"撒谎",x : -1, y : -1, vertical : false, size : 0},
    {name:"口袋",x : -1, y : -1, vertical : false, size : 0},
    {name:"内裤",x : -1, y : -1, vertical : false, size : 0},
    {name:"油条",x : -1, y : -1, vertical : false, size : 0},
    {name:"到哪儿",x : -1, y : -1, vertical : false, size : 0},
    {name:"丢人",x : -1, y : -1, vertical : false, size : 0},
    {name:"漂亮",x : -1, y : -1, vertical : false, size : 0},
    {name:"土豆",x : -1, y : -1, vertical : false, size : 0},
    {name:"番茄",x : -1, y : -1, vertical : false, size : 0},
    {name:"金龟子",x : -1, y : -1, vertical : false, size : 0},
    {name:"黄鳝",x : -1, y : -1, vertical : false, size : 0},
    {name:"扫把",x : -1, y : -1, vertical : false, size : 0},
    {name:"赶快",x : -1, y : -1, vertical : false, size : 0},
    {name:"看热闹",x : -1, y : -1, vertical : false, size : 0},
    {name:"喝多了",x : -1, y : -1, vertical : false, size : 0},
    {name:"打架",x : -1, y : -1, vertical : false, size : 0},
];

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
