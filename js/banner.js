
    window.addEventListener("load", function () {
        setTimeout(function () {
            var n = new XMLHttpRequest;
            n.open("GET", "https://179523.selcdn.ru/public/delivery-banner/lang.json", !0), n.onreadystatechange = function () {
                4 == n.readyState && function (n) {
                    var a = {};
                    200 != n.status ? alert(n.status + ": " + n.statusText) : a = n.responseText;
                    let e = JSON.parse(a);
                    $(".main-banner p").css("display", "none"), $("body").addClass("body-banner"), window.language ? t(window.language) : t("en");

                    function t(n) {
                        var a = document.createElement("div"), t = document.querySelector("body");
                        a.classList.add("main-banner");
                        let i = "", o = e.languages.length, r = 0;
                        for (let a = 0; a < o; a++) n == e.languages[a].lang && (i += "<p class='" + e.languages[a].lang + "'><b>" + e.languages[a].lang_text_b + " <span class='delete_mob'>" + e.languages[a].lang_text_del + "</span></b><span class='ban-small'>" + e.languages[a].lang_text + "</span></p>", r++);
                        0 == r && (i += "<p class='" + e.languages[4].lang + "'><b>" + e.languages[4].lang_text_b + " <span class='delete_mob'>" + e.languages[4].lang_text_del + "</span></b><span class='ban-small'>" + e.languages[4].lang_text + "</span></p>"), a.innerHTML = '<div class="fixed-el" style="width: 1px; height: 1px; opacity: 0; position: fixed; top: 0; left: 0;"></div><img src="https://179523.selcdn.ru/public/delivery-banner/banner-icon-1.png" alt="icon">' + i, t.appendChild(a)
                    }

                    i = document.createElement("style"), o = document.querySelector("head"), i.innerHTML = ".main-banner img{max-width:61px;max-height:49px;margin:0!important}.main-banner{box-sizing:border-box;position:fixed;top:0;left:0;width:100vw;display:flex;justify-content:center;align-items:center;padding:0 10px;background-color:#e30c0c;background-image:url(https://179523.selcdn.ru/public/delivery-banner/banner-bg.png);background-repeat:no-repeat;background-size:cover;background-position:center;z-index:97}.main-banner.banner-bottom{top:auto;bottom:0}.main-banner p{margin-top:0!important;margin-bottom:0!important;font-family:Roboto,sans-serif;color:#fff!important;margin-left:20px;text-align:center;padding:10px 0}.main-banner p b{color:#fff;display:block;font-size:19px;font-weight:700;margin-bottom:5px}.main-banner p .ban-small{color:#fff;display:block;font-size:17px;line-height:1.2;font-weight:400}@media screen and (max-width:1219px){.main-banner p .ban-small {font-size: 15px;}.main-banner p b {font-size: 17px;}.main-banner img{max-width:50px;max-height:40px}.main-banner p{max-width:920px}}@media screen and (max-width:1023px){.main-banner .delete_mob{display:none}.main-banner p{max-width:500px}.main-banner p b{font-size:16px}.main-banner p .ban-small{font-size:15px}}@media screen and (max-width:767px){.main-banner p{max-width:420px}.main-banner p b{font-size:15px}.main-banner p .ban-small{font-size:14px}}@media screen and (max-width:639px){.main-banner img{max-width:35px;max-height:30px}.main-banner p{margin-left:10px}}@media screen and (max-width:479px){.main-banner img{max-width:50px;max-height:100%}.main-banner p{max-width:250px;line-height:1.1}.main-banner p b{line-height:18px;font-size:13px;margin-bottom:2px}.main-banner p .ban-small{line-height:17px;font-size:12px}}@media screen and (max-width:370px){.main-banner img{max-width:35px}}.main-banner p span{color:#fff!important}.main-banner *{box-sizing:border-box}", o.appendChild(i);
                    var i, o;
                    let r = 0;

                    function p() {
                        let n = $(".main-banner").outerHeight(), a = n + "px!important", e = n + "px!important";
                        $("body.body-banner").attr("style", "margin-top: " + a + "; margin-bottom: " + e)
                    }

                    $(document).on("scroll", function () {
                        $(".fixed-el").offset().top > 100 && 0 === r ? ($(".main-banner").addClass("banner-bottom"), r = 1) : $(".fixed-el").offset().top <= 100 && ($(".main-banner").removeClass("banner-bottom"), r = 0)
                    }), $(document).ready(p), window.addEventListener("resize", p)
                }(n)
            }, n.send()
        }, 5000)
    });


