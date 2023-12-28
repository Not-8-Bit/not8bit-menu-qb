let buttonParams = [];

const openMenu = (data = null) => {
    let html = "";
    data.forEach((item, index) => {
        if(!item.hidden) {
            let header = item.header;
            let messages = item.messages || item.text || [];
            let isMenuHeader = item.isMenuHeader;
            let isDisabled = item.disabled;
            let icon = item.icon;
            html += getButtonRender(header, messages, index, isMenuHeader, isDisabled, icon);
            if (item.params) buttonParams[index] = item.params;
        }
    });
    $("#buttons").html(html);
    $('.button').click(function() {
        const target = $(this)
        if (!target.hasClass('title') && !target.hasClass('disabled')) {
            postData(target.attr('id'));
        }
    });
};

const getButtonRender = (header, messages = [], id, isMenuHeader, isDisabled, icon) => {
    let messageHtml = "";
    messages.forEach((message) => {
        messageHtml += `<div class="text">${message}</div>`;
    });
    return `
        <div class="${isMenuHeader ? "title" : "button"} ${isDisabled ? "disabled" : ""}" id="${id}">
            <div class="column">
            <div class="header"> ${header}</div>
            ${messageHtml}
            </div>
            <div class="icon"> <img src=${icon} width=40px onerror="this.onerror=null; this.remove();"> <i class="${icon}" onerror="this.onerror=null; this.remove();"></i> </div>
        </div>`
    ;
};

const closeMenu = () => {
    $("#buttons").html(" ");
    buttonParams = [];
};

const postData = (id) => {
    $.post(`https://${GetParentResourceName()}/clickedButton`, JSON.stringify(parseInt(id) + 1));
    return closeMenu();
};

const cancelMenu = () => {
    $.post(`https://${GetParentResourceName()}/closeMenu`);
    return closeMenu();
};

window.addEventListener("message", ({ data }) => {
    const { action, data: buttons } = data;
    switch (action) {
        case "OPEN_MENU":
        case "SHOW_HEADER":
            return openMenu(buttons);
        case "CLOSE_MENU":
            return closeMenu();
        default:
            return;
    }
});

document.onkeyup = (event) => {
    if (event.key === "Escape") cancelMenu();
};