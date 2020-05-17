( function ( $, doc ) {
    $.init( {
        statusBarBackground: '#333',
        swipeBack: false,
    } );
    $.ready( function () {

        var browser = {
            versions: function () {
                var u = navigator.userAgent,
                    app = navigator.appVersion;
                return { 
                    trident: u.indexOf( 'Trident' ) > -1, 
                    presto: u.indexOf( 'Presto' ) > -1, 
                    webKit: u.indexOf( 'AppleWebKit' ) > -1, 
                    gecko: u.indexOf( 'Gecko' ) > -1 && u.indexOf( 'KHTML' ) == -1, 
                    mobile: !!u.match( /AppleWebKit.*Mobile.*/ ) || !!u.match( /AppleWebKit/ ), 
                    ios: !!u.match( /\(i[^;]+;( U;)? CPU.+Mac OS X/ ), 
                    android: u.indexOf( 'Android' ) > -1 || u.indexOf( 'Linux' ) > -1, 
                    iPhone: u.indexOf( 'iPhone' ) > -1 || u.indexOf( 'Mac' ) > -1, 
                    iPad: u.indexOf( 'iPad' ) > -1, 
                    webApp: u.indexOf( 'Safari' ) == -1 
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
        var ios = browser.versions.ios || browser.versions.iPhone || browser.versions.iPad;
        document.querySelector( '#button1' ).setAttribute( 'style', 'display:block' );
		document.querySelector( '#button2' ).setAttribute( 'style', 'display:block');
        if ( /micromessenger/.test( navigator.userAgent.toLowerCase() ) ) {
            document.getElementById( 'weixin' ).setAttribute( 'style', 'display:block;' );
        }
    } );
}( mui, document ));