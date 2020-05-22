(function() {

    var __hs_cta_json = {"css":"a#cta_button_7522739_9b2ea5f5-8aba-453a-a826-0ac9f85e1911 {\n    -webkit-font-smoothing: antialiased;\ncursor: pointer;\n-moz-user-select: none;\n-webkit-user-select: none;\n-o-user-select: none;\nuser-select: none;\ndisplay: inline-block;\nfont-weight: normal;\ntext-align: center;\ntext-decoration: none;\n-moz-transition: all .4s ease;\n-webkit-transition: all .4s ease;\n-o-transition: all .4s ease;\nbackground: rgb(255,122,89);\nborder-radius: 6px;\nborder-width: 0px;\ncolor: rgb(255,255,255);\nfont-family: sans-serif;\nheight: auto;\ntransition: all .4s ease;\npadding: 6px 18px;\ntext-shadow: none;\nwidth: auto;\nfont-size: 24px;\nline-height: 1.5em;\n\n     border-radius: 3PX !important;\n  display: inline-block !important;\n  padding: 12px 20px !important;\n  font-weight: bold !important;\n  font-size: 16px !important;\n  text-transform: uppercase !important;\n  letter-spacing: 1.5PX !important;\n  text-decoration: none !important; \n  line-height: 1 !important;\n  }\n\na#cta_button_7522739_9b2ea5f5-8aba-453a-a826-0ac9f85e1911:hover {\nbackground: rgb(255,134,97);\ncolor: rgb(255,255,255);\n}\n\na#cta_button_7522739_9b2ea5f5-8aba-453a-a826-0ac9f85e1911:active, #cta_button_7522739_9b2ea5f5-8aba-453a-a826-0ac9f85e1911:active:hover {\nbackground: rgb(204,97,71);\ncolor: rgb(244,244,244);\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_7522739_9b2ea5f5-8aba-453a-a826-0ac9f85e1911\" class=\"cta_button\" href=\"https://www.forfirm.com/cs/c/?cta_guid=9b2ea5f5-8aba-453a-a826-0ac9f85e1911&placement_guid=7a1a2063-b916-4f7f-b62a-d18ad51515d9&portal_id=7522739&canon=https%3A%2F%2Fwww.forfirm.com%2F&redirect_url=APefjpGMYbltxLqN59BUVQoeXonetomCuLHi7KKekD7NpAmUvEJMZdu_1sBCb8hlOcYqdqwJKlRjuWihPDgvkyZ-GjnC8aDkfkYVCttTmq58ETAeJZmLNl_rQorN7idgE96I6AtfO--R&click=974b21bd-9aef-435b-b21c-8c809ac8045d&hsutk=c7a00000119e1dc5115a01722c3da102&signature=AAH58kF-q9_s0xi-i_sY2wVTSLGOWA-1jA\"  cta_dest_link=\"https://www.forfirm.com/about-us\"><img id=\"hs-cta-img-7a1a2063-b916-4f7f-b62a-d18ad51515d9\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"About US\" src=\"https://cdn2.hubspot.net/hubshot/20/05/11/cbd7c094-be8c-4dce-908b-00ec01ea8fc7.png\" srcset=\"https://cdn2.hubspot.net/hubshot/20/05/11/21e3f754-9480-41bb-91ea-78ab63d19c4f.png 4x, https://cdn2.hubspot.net/hubshot/20/05/11/fc5bb6ee-a93e-45b8-b051-8ca02a6dd5ce.png 3x, https://cdn2.hubspot.net/hubshot/20/05/11/6d67baa6-d7fe-473c-9b9e-bbad8e263315.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-7a1a2063-b916-4f7f-b62a-d18ad51515d9","raw_html":"<a id=\"cta_button_7522739_9b2ea5f5-8aba-453a-a826-0ac9f85e1911\" class=\"cta_button \" href=\"https://www.forfirm.com/cs/c/?cta_guid=9b2ea5f5-8aba-453a-a826-0ac9f85e1911&placement_guid=7a1a2063-b916-4f7f-b62a-d18ad51515d9&portal_id=7522739&canon=https%3A%2F%2Fwww.forfirm.com%2F&redirect_url=APefjpGMYbltxLqN59BUVQoeXonetomCuLHi7KKekD7NpAmUvEJMZdu_1sBCb8hlOcYqdqwJKlRjuWihPDgvkyZ-GjnC8aDkfkYVCttTmq58ETAeJZmLNl_rQorN7idgE96I6AtfO--R&click=974b21bd-9aef-435b-b21c-8c809ac8045d&hsutk=c7a00000119e1dc5115a01722c3da102&signature=AAH58kF-q9_s0xi-i_sY2wVTSLGOWA-1jA\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.forfirm.com/about-us\" title=\"About US\">About US</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }
            
            html = __hs_cta_json.raw_html;

        }
         

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('7a1a2063-b916-4f7f-b62a-d18ad51515d9');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', '7a1a2063-b916-4f7f-b62a-d18ad51515d9', '9b2ea5f5-8aba-453a-a826-0ac9f85e1911']);
    

}());
