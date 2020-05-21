Action()
{

	web_set_sockets_option("SSL_VERSION", "AUTO");

	web_add_auto_header("DNT", 
		"1");

	web_add_auto_header("Upgrade-Insecure-Requests", 
		"1");

	web_url("www.giulioscuro.it", 
		"URL=http://www.giulioscuro.it/", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t1.inf", 
		"Mode=HTML", 
		EXTRARES, 
		"Url=http://giulioscuro.it/wp-includes/js/wp-emoji-release.min.js?ver=5.4.1", "Referer=http://giulioscuro.it/", ENDITEM, 
		"Url=http://giulioscuro.it/wp-content/themes/radiate/js/skip-link-focus-fix.js?ver=20130115", "Referer=http://giulioscuro.it/", ENDITEM, 
		"Url=http://giulioscuro.it/wp-includes/js/wp-embed.min.js?ver=5.4.1", "Referer=http://giulioscuro.it/", ENDITEM, 
		"Url=http://giulioscuro.it/wp-content/themes/radiate/images/header/header-image-one.jpg", "Referer=http://giulioscuro.it/", ENDITEM, 
		"Url=http://giulioscuro.it/wp-content/themes/radiate/js/navigation.js?ver=20120206", "Referer=http://giulioscuro.it/", ENDITEM, 
		"Url=http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2", "Referer=http://fonts.googleapis.com/", ENDITEM, 
		"Url=http://giulioscuro.it/wp-content/themes/radiate/js/custom.js?ver=5.4.1", "Referer=http://giulioscuro.it/", ENDITEM, 
		"Url=http://fonts.gstatic.com/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l521wRZWMf6.woff2", "Referer=http://fonts.googleapis.com/", ENDITEM, 
		"Url=http://fonts.gstatic.com/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-fCZM.woff2", "Referer=http://fonts.googleapis.com/", ENDITEM, 
		"Url=http://giulioscuro.it/wp-admin/images/w-logo-blue.png", "Referer=", ENDITEM, 
		LAST);

	web_link("Aprile 2020", 
		"Text=Aprile 2020", 
		"Snapshot=t2.inf", 
		LAST);

	return 0;
}