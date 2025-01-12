var ua = window.navigator.userAgent.toLowerCase(),
is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua) || (/edge/gi).test(ua);
if (is_ie == true) alert( 'Извините, но на Internet Explorer не работает. Нужен нормальный браузер' );
