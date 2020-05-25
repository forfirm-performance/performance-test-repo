Action()
{

	web_set_sockets_option("SSL_VERSION", "AUTO");

	web_add_cookie("NID=199=X7i1bUlTH4J7bym4NbM59V8KD-ecL8lRdNvUTRUw5fX4eVyraCCSQlSgnyOmmTnkpxxp-f-7jbiQq0a_Nmm0gsBrtLZIqoSH0MPLFVrEqA5EHCQgVaKgsNdL8wj5U11g_GM1xZyKS6lC-xYsQjQiQ-jKuUMoC5Fjaj2PQHgTFQY; DOMAIN=www.google.com");

	web_add_auto_header("UA-CPU", 
		"AMD64");

	web_url("favicon.ico", 
		"URL=https://www.google.com/favicon.ico", 
		"Resource=1", 
		"RecContentType=image/x-icon", 
		"Referer=", 
		"Snapshot=t7.inf", 
		LAST);

	web_add_cookie("__cfduid=d2f0a83883af5b2de05fef0b07c182f271590381408; DOMAIN=www.forfirm.com");

	lr_think_time(13);

	web_url("logo_small-1.png", 
		"URL=https://www.forfirm.com/hubfs/logo_small-1.png", 
		"Resource=1", 
		"RecContentType=image/png", 
		"Referer=", 
		"Snapshot=t8.inf", 
		LAST);

	return 0;
}