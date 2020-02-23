function info(){}
Info = new info();
Info.addr="高雄市創新路68號";
Info.scho=["高雄科技大學 行銷與流通管理系","北港高中 資料處理科"];
Info.hist=["高雄扶青團 美宣長","高雄扶青團首敲典禮 司儀","行銷男排 隊長","Moocs LOGO設計競賽 第二名","Moocs LOGO設計競賽 最佳人氣獎","學生證生出來設計競賽 佳作"]
Info.work=["台灣中油股份有限公司","2017-2020",["加油員","晚班班長"]]
Info.work_career=["加油員","晚班班長"]

Pages=['商品頁面','商品瀏覽','首頁','關於我們','購物車']

function multi(tar,array,el){
    for (i=0;i<array.length;i++){
            $(tar).append("<"+el+">"+array[i]+"</"+el+">");
    };
};

$(function(){
    $('#addr').append(Info.addr);
    multi('#scho',Info.scho,'h4');
    multi('#hist',Info.hist,'h4');
    multi('#work',Info.work,'h4');

    multi('#pages',Pages,'h6');
    $('#pages h6').before("<div class='mark'></div>");

    $('.mark').click(function(){
        $(this).toggleClass('mark-act')
    });
})
