function info(){}
Info = new info();
Info.addr="高雄市創新路68號";
Info.scho=["高雄科技大學 行銷與流通管理系","北港高中 資料處理科"];
Info.hist=["高雄扶青團 美宣長","高雄扶青團首敲典禮 司儀","行銷男排 隊長","Moocs LOGO設計競賽 第二名","Moocs LOGO設計競賽 最佳人氣獎","學生證生出來設計競賽 佳作"]
Info.work=["台灣中油股份有限公司","2017-2020",["加油員","晚班班長"]]
Info.work_career=["加油員","晚班班長"]

Pages=['商品頁面','商品瀏覽','首頁','關於我們','購物車']
Page_img=['img/Item.jpg','img/Products.jpg','img/Interface_index.jpg','img/About.jpg','img/Cart.jpg']
Page_link=['https://0525033.github.io/chapei/Product_item.html','https://0525033.github.io/chapei/Products.html','https://0525033.github.io/chapei/','https://0525033.github.io/chapei/about.html','https://0525033.github.io/chapei/Cart.html']

function img_link(img,link){
    $('.card img').attr('src',img);
    $('#chapei').attr('href',link);
}

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

    multi('#pages',Pages,"h6 class='title'");
    $('h6').wrap("<a class='page' href='#' target='_blank'></a>");
    $('#pages h6').before("<div class='mark'></div>");
    
    $('.page:nth-child(3) .mark').addClass('mark-act');

    $('.page:nth-child(1)').attr('href',Page_link[0]);
    $('.page:nth-child(2)').attr('href',Page_link[1]);
    $('.page:nth-child(3)').attr('href',Page_link[2]);
    $('.page:nth-child(4)').attr('href',Page_link[3]);
    $('.page:nth-child(5)').attr('href',Page_link[4]);

    $('.page').hover(function(){
        $('.mark').removeClass('mark-act');
        $('h6').css('color','#AAA')
        $('.mark',this).toggleClass('mark-act',1000,'easeOutSine');
        $('h6',this).css('color','#DDD23B');
        switch ($('h6',this).text()){
            case '商品頁面':
                img_link(Page_img[0],Page_link[0]);
                $('.card-title').text($('h6',this).text());
                break;
            case '商品瀏覽':
                img_link(Page_img[1],Page_link[1]);
                $('.card-title').text($('h6',this).text());
                break;
            case '首頁':
                img_link(Page_img[2],Page_link[2]);
                $('.card-title').text($('h6',this).text());
                break;
            case '關於我們':
                img_link(Page_img[3],Page_link[3]);
                $('.card-title').text($('h6',this).text());
                break;
            case '購物車':
                img_link(Page_img[4],Page_link[4]);
                $('.card-title').text($('h6',this).text());
                break;
        }
    });
})
