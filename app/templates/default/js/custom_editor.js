/**
 * Created by david on 9/26/2015.
 */

var custom_editor = {
    divSel      : '#preview',

    getInstance    : function(){return CKEDITOR.instances.editor1},
    updatePreview: function(){
        $(this.divSel).html(this.getInstance().getData());
    }
};
$(document).ready(function(){
    //Modify the ckeditor to build the editor page.
    custom_editor.getInstance().on('change', function(){
        custom_editor.updatePreview();
        interactive_doc.updateElements();
    });
    CKEDITOR.config.extraPlugins = 'fnlabel';
    CKEDITOR.config.toolbarCanCollapse = true;
    // Default setting.
    CKEDITOR.config.toolbarGroups = [
        { name: 'document',    groups: [ 'mode'] },
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'insert' },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
        //'/',
        { name: 'styles' },
        { name: 'colors' },
        { name: 'tools' },
        //{ name: 'others' },
        '/',
        { name: 'dynamic'},
        { name: 'forms' }
    ];
    // ALLOW <label></label>
    CKEDITOR.config.protectedSource.push(/<label[^>]*><\/label>/g);
    CKEDITOR.config.extraAllowedContent = 'label(*)';
    CKEDITOR.config.allowedContent =true;
    $('div.interactive_doc').on('change', function(){
        interactive_doc.updateElements();
    });
    custom_editor.updatePreview();
    interactive_doc.updateElements();
});