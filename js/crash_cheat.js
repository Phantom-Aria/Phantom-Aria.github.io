<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://raw.githubusercontent.com/Phantom-Aria/image/main/bitbug_favicon1.ico");
        document.title = '╭(°A°`)╮等你回来唷~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://raw.githubusercontent.com/Phantom-Aria/image/main/bitbug_favicon.ico");
        document.title = '(ฅ>ω<*ฅ)你回来啦~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
            $('[rel="icon"]').attr('href', "https://raw.githubusercontent.com/Phantom-Aria/image/main/bitbug_favicon.ico");
        }, 2000);
    }
});
