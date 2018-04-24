$(document).ready(function () {
    $('#submit-form').click(function () {
        var a = $('#a').val()
        var b = $('#b').val()
        var c = $('#c').val()
        // 1到100整数
        if (a >= 1 && a <= 100 &&
            b >= 1 && b <= 100 &&
            c >= 1 && c <= 100 &&
            Math.floor(a) == a &&
            Math.floor(b) == b &&
            Math.floor(c) == c) {
            // jquery提交表单
            $("#tri-info").submit();
        } else {
            alert('输入有误，请重新输入');
            $('#a').val('')
            $('#b').val('')
            $('#c').val('')
            $('#a').focus()
            return false;
        }
    })

    $('#rand-tri').click(function () {
        var a = Math.ceil(Math.random() * 100);
        var b = Math.ceil(Math.random() * 100);
        var c = Math.ceil(Math.random() * 100);
        $('#a').val(a)
        $('#b').val(b)
        $('#c').val(c)
    })

    if (document.getElementById('triangle-canvas')) {
        // 建立相对平滑三角形
        var a = parseInt($('#tri-a').text());
        var b = parseInt($('#tri-b').text());
        var c = parseInt($('#tri-c').text());
        var coefficient = Math.pow((a + b + c) / 150, 0.9);
        var a_ct = a / coefficient;
        var b_ct = b / coefficient;
        var c_ct = c / coefficient;

        var bg = document.getElementById('triangle-canvas');
        var ctx = bg.getContext('2d');
        ctx.beginPath();
        // 绘制三角形
        var x = (a_ct * a_ct + c_ct * c_ct - b_ct * b_ct) / (2 * a_ct);
        var y = Math.sqrt(c_ct * c_ct - x * x);
        ctx.moveTo(50, 50);
        ctx.lineTo(a_ct + 50, 50);
        ctx.lineTo(x + 50, y + 50);
        ctx.closePath();
        ctx.strokeStyle = '#000000'; //以纯黑色描边
        ctx.stroke(); //闭合形状并且以描边方式绘制出来

        // 绘制边长
        var a_x = a_ct / 2 + 50;
        var a_y = 30;
        var b_x = x / 2 + 100;
        var b_y = y / 2 + 50;
        var c_x = (a_ct + x) / 2;
        var c_y = y / 2 + 50;

        ctx.fillStyle = '#000'; //以纯黑色描边
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(a, a_x, a_y);
        ctx.fillText(b, b_x, b_y);
        ctx.fillText(c, c_x, c_y);

    }
});