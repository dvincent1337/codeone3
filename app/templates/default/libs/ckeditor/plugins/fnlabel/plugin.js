CKEDITOR.plugins.add( 'fnlabel', {
    icons: 'fnlabel',
    init: function( editor ) {
        editor.ui.addButton( 'fnlabel', {
            label: 'Label defined by function',
            command: 'fnlabel',
            toolbar: 'dynamic'
        });
        editor.addCommand( 'fnlabel', new CKEDITOR.dialogCommand( 'fnlabelDialog' ) );
        CKEDITOR.dialog.add( 'fnlabelDialog', this.path + 'dialogs/fnlabel.js' );
    }
});
