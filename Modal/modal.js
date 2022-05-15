/**
 * Author:01
 * QQ:24130801
 * Date:2022/05/15
 */
window.onload = function () {
    const url = window.location.href;
    if (window.outerWidth<400) {
        var div = document.createElement("div");
        div.setAttribute("id", "fuck");
        div.style.cssText =
            "position: fixed; left: 0; top: 0; width: 100%; height: 100%; box-sizing: border-box; padding: 18px; line-height: 2em; background-color: rgba(19,44,51,.9); z-index: 99999; display: flex; justify-content: center; align-items: center;";
        div.innerHTML =
            "" +
            '<div style="color: #c94e50; background: rgba(255,254,249) ;padding:25px;border-radius:4px;">' +
            "<h1 style= 'text-align:center;font-size:18px;'><strong>注意</strong></h1>" +
            "<p style= 'text-align:center;margin-top:20px'>使用手机客户端可能会导致视频失效</p>" +
            "<p style='text-align: center; margin-top:50px;margin-bottom:6px;' ><button style=\" width: 150px; border-radius:4px; background-color: #c94e50; color: rgba(255,254,249); border: none; height: 3em;\" onclick=\"document.body.removeChild(document.getElementById('fuck'));\">劳资晓得了</button></p>" +
            '<p style="text-align: center; color:#bdc0ba;font-size:14px">视频推荐电脑端使用</p>' +
            "</div>";
        document.body.append(div);
    } else {
        var div = document.createElement("div");
        div.setAttribute("id", "shit");
        div.innerHTML =
            ' <div class="container" id="colse">' +
            '<div class="popup-inner">' +
            '<div class="popup__photo">' +
            '<img src="https://pan.ylmty.cc/d/local%F0%9F%94%92/img/bg1.jpg" alt="图片丢失了">' +
            // 这里src放左侧的图片直链，h1和p标签内的文字内容可以修改
            // 注意文本的断句
            '</div>' +
            '<div class="popup__text">' +
            '<h1>文本文本</h1>' +
            '<p>文本文本文本文本文本文本' +
            '文本文本文本文本文本文本' +
            '文本文本文本文本' +
            '文本文本文本文本' +
            '<br>' +
            '文本文本' +
            '文本文本' +
            '文本文本文本文本' +
            '文本文本文本文本文本文本' +
            '文本文本文本文本' +
            '</p>' +
            '</div>' +
            '<p id="text">测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本</p>'+
            '<a id="btn"></a>' +
            '</div>' +
            '</div>';
        document.body.append(div);
        var btn = document.getElementById('btn');
        var container = document.getElementById('colse');
        btn.onclick = function () {
            container.style.display = "none"
        }
    }

}

