$(function() {
    // 滚动条
    resetui();
    
    // 将用户发送的内容渲染到页面中
    $('#btnSend').on('click',function() {
        // alert('click');
        var text = $('#ipt').val().trim();
        if(text.length <= 0) {
            // alert('null!');
            return $('#ipt').val('');
        } else {
            $('#talk_list').append('<li class="right_word"><img src="./img/person02.png" alt=""><span>'+text+'</span></li>');
            $('#ipt').val('');
            resetui();
            // 发起请求
            getMessage(text);
        }
    })

    // 获取机器人的信息
    function getMessage(text) {
        // alert('lllll');
        $.ajax({
            method : 'GET',
            url : 'http://www.liulongbin.top:3006/api/robot',
            data :{
                spoken:text
            },
            success:function(res) {
                // console.log(res);
                if(res.message==='success') {
                    var msg = res.data.info.text;
                    $('#talk_list').append('<li class="left_word"><img src="./img/person01.png" alt=""><span>'+msg+'</span></li>');
                    resetui();
                    getVoice(msg);
                }
            }
        })
    }

    function getVoice(text) {
        $.ajax({
            method : 'GET',
            url : 'http://www.liulongbin.top:3006/api/synthesize',
            data :{
                text:text
            },
            success:function(res) {
                if(res.status === 200) {
                    // console.log('success');
                    // 播放语音，将语音地址动态付给src
                    $('#voice').attr('src',res.voiceUrl);
                }
            }
        })
    }

    $('#ipt').on('keyup',function(event) {
        // console.log('ccc');
        if(event.keyCode === 13) {
            $('#btnSend').click();
        }
    })
})