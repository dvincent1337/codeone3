CKEDITOR.dialog.add( 'fnlabelDialog', function( editor ) {
    return {
        title: 'Formula Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Enter Settings',
                elements: [{
                    type: "hbox",
                    widths: ["50%", "50%"],
                    children: [{
                        type: 'text',
                        id: 'name',
                        label: 'Name',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Name field cannot be empty." )
                    },
                    {
                        type: 'text',
                        id: 'equation',
                        label: 'Equation',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Equation field cannot be empty." )
                    }]
                }]
            },
            {
                id: 'tab-adv',
                label: 'Advanced Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'id',
                        label: 'Id'
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;


            var tmp = editor.document.createElement( 'label' );
            tmp.setAttribute( 'id', 'fn_label_'+dialog.getValueOf( 'tab-basic', 'name' ) );
            tmp.setAttribute('class','interactive_fn');
            tmp.setAttribute('data', dialog.getValueOf( 'tab-basic', 'equation' ));
            tmp.setText( 'fn('+dialog.getValueOf( 'tab-basic', 'equation' )+')');

            var id = dialog.getValueOf( 'tab-adv', 'id' );
            if ( id )
                tmp.setAttribute( 'id', id );

            editor.insertElement( tmp );
        }
    };
});