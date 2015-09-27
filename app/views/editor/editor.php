<form method="post">
    <div class="page-header">
        <h1>Post: <input type="text" name='title' class="input"
                         value="<?php if (isset($data['article'])) echo $data['article']->title?>">
            <button class="input btn btn-primary" type="submit"
                    style="height: 51px !important;margin-top: -9px;">Save</button>
            <select name="category">
                <?php foreach ($data['categories'] as $category) { ?>
                    <option value="<?php echo $category['category_id']; ?>"><?php echo $category['category_name']; ?></option>
                <?php }?>
            </select>
            <select name="section">
                <?php foreach ($data['sections'] as $sections) { ?>
                    <option value="<?php echo $sections['section_id']; ?>"><?php echo $sections['section_name'];?></option>
                <?php } ?>
            </select>
        </h1>

    </div>
    <div class="col-md-6">
        <textarea name="editor1" id="editor1" rows="10" cols="80">
            <?php if (isset($data['article'])) echo $data['article']->text; ?>
        </textarea>
    </div>
</form>
    <div class="col-md-6">
        <div id="preview" class="interactive_doc"><h4>Start typing...</h4></div>
    </div>

<?php if (isset($data['article'])) { ?>
    <script>
        $(document).ready(function(){
            $('select[name=category]').val(<?php echo $data['article']->category_id?>);
            $('select[name=section]').val(<?php echo $data['article']->section_id?>);
        });
    </script>
<?php }?>
<script>
    CKEDITOR.replace('editor1');

</script>
<script src="/app/templates/default/js/custom_editor.js"></script>


