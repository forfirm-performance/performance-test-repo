Action()
{

	web_set_sockets_option("SSL_VERSION", "AUTO");

	web_add_auto_header("UA-CPU", 
		"AMD64");

	web_url("favicon.ico", 
		"URL=https://www.google.com/favicon.ico", 
		"Resource=1", 
		"RecContentType=image/x-icon", 
		"Referer=", 
		"Snapshot=t7.inf", 
		LAST);


	//lr_think_time(13);
	
	lr_start_transaction("1_transaction");


	web_url("logo_small-1.png", 
		"URL=https://www.forfirm.com/hubfs/logo_small-1.png", 
		"Resource=1", 
		"RecContentType=image/png", 
		"Referer=", 
		"Snapshot=t8.inf", 
		LAST);
	
	lr_think_time(10);
	
	lr_end_transaction("1_transaction", LR_AUTO);	

	return 0;
}