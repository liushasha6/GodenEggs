(function() {
    let customerEle = document.getElementById('hammer');
    let mainEggs = document.getElementById('main');

    //阻止H5自带的拖拽事件：兼容问题
    customerEle.ondragstart = function(ev) {
        ev.preventDefault();
    };
    customerEle.ondragend = function(ev) {
        ev.preventDefault();
    };

    customerEle.style.left = 0;
    customerEle.style.top = 0;

    mainEggs.onmousemove = function(ev) {
        customerEle.style.left = ev.clientX - (customerEle.clientWidth / 2) + 'px';
        customerEle.style.top = ev.clientY - (customerEle.clientHeight / 2) + 'px';
    }
}())

/**点击 */
function GoHammer() {
    let PrizeArray = [
        { Id: 0, Text: '恭喜抽到了一等奖！', Prize: '代金券100元' },
        { Id: 1, Text: '恭喜抽到了二等奖！', Prize: '代金券50元' },
        { Id: 2, Text: '恭喜抽到了三等奖！', Prize: '代金券40元' },
    ]
    document.querySelector('.main_content_eggs').style.display = 'none';
    document.getElementById('hammer').style.display = 'none';
    document.getElementById('GetPrize').style.display = 'block';
    let GetPrize = document.getElementById('Prize_img');
    GetPrize.style.left = "0px";
    GetPrize.style.top = "0px";

    GetPrize.style.top = parseInt(GetPrize.style.top) + 10 + 'px';
    let y = parseInt(Math.random() * 3)

    PrizeArray.forEach(function(item) {
        if (item.Id == y) {
            index = item;
        }
    });
    document.getElementById('GetPrizeLevel').innerHTML = index.Text;
    document.getElementById('GetPrizeGolden').innerHTML = index.Prize;
}

/**点击关闭奖品 */
function GoClose() {
    document.getElementById('GetPrize').style.display = 'none';
    document.getElementById('hammer').style.display = 'block';
    document.querySelector('.main_content_eggs').style.display = 'block';
}
