function info(){}
Info = new info();
Info.addr="高雄市創新路68號";
Info.scho=["高雄科技大學 行銷與流通管理系","北港高中 資料處理科"];
Info.hist=["高雄扶青團 美宣長","高雄扶青團首敲典禮 司儀","行銷男排 隊長","Moocs LOGO設計競賽 第二名","Moocs LOGO設計競賽 最佳人氣獎","學生證生出來設計競賽 佳作"]
Info.work=["台灣中油股份有限公司","2017-2020",["加油員","晚班班長"]]
Info.work_career=["加油員","晚班班長"]

Pages=['商品頁面','商品瀏覽','首頁','關於我們','購物車']
Page_img=['img/Item.jpg','img/Products.jpg','img/Interface_index.jpg','img/About.jpg','img/Cart.jpg']
Page_link=['https://chapei.herokuapp.com/Product_item.php?item=%E9%BA%B5%E5%8C%851','https://chapei.herokuapp.com/Products.html','https://chapei.herokuapp.com/','https://chapei.herokuapp.com/about.html','https://chapei.herokuapp.com/Cart.html']

$.ajax({
    url:'https://script.google.com/macros/s/AKfycbwzZBATRrszjl1DWZT0Yl7vhhH_54ci3rVXRQGLoL3RQyNlbXbu/exec',
    success:(data)=>{
        console.log(data)
    }
})

function img_link(img,link){
    $('.card img').attr('src',img);
    $('#chapei').attr('href',link);
};

function multi(tar,array,el){
    for (i=0;i<array.length;i++){
            $(tar).append("<"+el+">"+array[i]+"</"+el+">");
    };
};

function godown(){
    var height=$(window).height()
    $('html,body').animate({
        scrollTop:height
    },1000,'swing'
    )
}

async function hidecap(){
    $('#HTML').hide()
    $('#CSS').hide()
    $('#IT').hide()
    $('#Sass').hide()
    $('#JQuery').hide()
    $('#Vue').hide()
    $('#JS').hide()
    $('#PS').hide()
    $('#AI').hide()
    $('#XD').hide()
    console.log('done')
}
async function showcap(){
    $('#HTML').show()
    $('#CSS').show()
    $('#Sass').show()
    $('#JQuery').show()
    $('#Vue').show()
    $('#JS').show()
    $('#PS').show()
    $('#AI').show()
    $('#XD').show()
    $('#HTML').css('animation','HTML 2s');
    $('#CSS').css('animation','CSS 2s');
    $('#Sass').css('animation','Sass 2s');
    $('#JQuery').css('animation','JQuery 2s');
    $('#Vue').css('animation','Vue 2s');
    $('#JS').css('animation','JS 2s');
    $('#PS').css('animation','PS 2s')
    $('#AI').css('animation','AI 2s')
    $('#XD').css('animation','XD 2s')
}

async function porti(MorD){
    if(MorD=='D'){
        console.log(MorD)
        $('.page').hover(function(){
            console.log('hover')
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
        })}else if(MorD=='M'){
        var count=0
        clearInterval(interval)
        var interval=setInterval(function myinterval(){
        count+=1
        if(count==5){count=0};
        console.log(count)
        $('.mark').removeClass('mark-act');
        $('h6').css('color','#AAA')
        switch (count){
            case 0:
                img_link(Page_img[0],Page_link[0]);
                $('.card-title').text('商品頁面');
                $('#pages .page:nth-child(1) .mark').addClass('mark-act')
                $('#pages .page:nth-child(1) .title').css('color','#DDD23B')
                break;
            case 1:
                img_link(Page_img[1],Page_link[1]);
                $('.card-title').text('商品瀏覽');
                $('#pages .page:nth-child(2) .mark').addClass('mark-act')
                $('#pages .page:nth-child(2) .title').css('color','#DDD23B')
                break;
            case 2:
                img_link(Page_img[2],Page_link[2]);
                $('.card-title').text('首頁');
                $('#pages .page:nth-child(3) .mark').addClass('mark-act')
                $('#pages .page:nth-child(3) .title').css('color','#DDD23B')
                break;
            case 3:
                img_link(Page_img[3],Page_link[3]);
                $('.card-title').text('關於我們');
                $('#pages .page:nth-child(4) .mark').addClass('mark-act')
                $('#pages .page:nth-child(4) .title').css('color','#DDD23B')
                break;
            case 4:
                img_link(Page_img[4],Page_link[4]);
                $('.card-title').text('購物車');
                $('#pages .page:nth-child(5) .mark').addClass('mark-act')
                $('#pages .page:nth-child(5) .title').css('color','#DDD23B')
                break;
        }

        if($(window).width()>768) clearInterval(interval)
    },2000);
    }
    
}

$(function(){
    if($(window).width()>768){
        var status=0
    }else{
        var status=1
    }
    setInterval(()=>{
        if ($(window).width()>768){

            if(status===0){
                $.get('Capability.txt',async function(data){
                $('#Capability_container').html(data)
                hidecap()
                })
                porti('D')
                status=1
            }
        }else{
            if(status===1){
                $.get('Capability_M.txt',async function(data){
                    $('#Capability_container').html(data)
                    hidecap()
                })
                porti('M')
                status=0
            }
        }
    },500)


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

})

let cap='hide'

    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 

        var ResH=$('#Resume_container').offset().top //各元素座標
        var PorH=$('#Portifolio_container').offset().top
        var CapH=$('#Capability_container').offset().top
        var MorH=$('#Moreinfo_container').offset().top
        console.log(cap)
        
        
        if (scroH>=0&scroH<ResH){
            console.log('歡迎！');
        }else if(scroH>=ResH&scroH<PorH) {
            console.log('履歷');
        }else if(scroH>PorH&scroH<CapH*0.95){
            console.log('作品');
        }else if(scroH>CapH*0.95&scroH<MorH){
            if(cap==='hide'){
                showcap()
                cap='show'
            }
            console.log('能力儀表板');
        }else{
            console.log('深入了解');
        }
    })

