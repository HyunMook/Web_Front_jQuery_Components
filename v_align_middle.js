/**
Add .v_align_box Class to the Block that wrapping text-box.
Add .v_align_text Class to the Block that wrapping text.
*/
function v_align_middle() {
    var $boxElem = $(".v_align_box"),
        $textElem = $boxElem.find(".v_align_text");

    var text_box_height = $textElem.height();

    $textElem.css({"marginTop": text_box_height / -2, "top": "50%"});
};
