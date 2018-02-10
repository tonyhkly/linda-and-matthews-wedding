function initCalenderSettings() {
    addeventatc.settings({
        license: "00000000000000000000",
        mouse: false,
        css: true,
        outlook: { show: false, text: "Outlook" },
        google: { show: true, text: "Google <em>(online)</em>" },
        yahoo: { show: false, text: "Yahoo <em>(online)</em>" },
        outlookcom: { show: false, text: "Outlook.com <em>(online)</em>" },
        appleical: { show: true, text: "Apple Calendar" },
        facebook: { show: false, text: "Facebook Event" },
        dropdown: { order: "google,appleical,facebook,outlookcom" }
    });
}
