<?php
/**
 * Sample layout
 */

use Helpers\Assets;
use Helpers\Url;
use Helpers\Hooks;

//initialise hooks
$hooks = Hooks::get();
?>
<!DOCTYPE html>
<html lang="<?php echo LANGUAGE_CODE; ?>">
<head>

	<!-- Site meta -->
	<meta charset="utf-8">
	<?php
	//hook for plugging in meta tags
	$hooks->run('meta');
	?>
	<title><?php echo $data['title'].' - '.SITETITLE; //SITETITLE defined in app/Core/Config.php ?></title>

	<!-- CSS -->
	<?php
	Assets::css(array(
		'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
		Url::templatePath() . 'css/style.css',
	));

	//hook for plugging in css
	$hooks->run('css');
	?>
    <!--custom-->
    <script src="/app/templates/default/js/jquery-2.1.4.min.js"></script>
    <script src="/app/templates/default/libs/ckeditor/ckeditor.js"></script>
    <script src="/app/templates/default/js/equation_parser.js"></script>
    <script src="/app/templates/default/js/interactive_document.js"></script>

    <?php if (isset($data['header_include'])) require_once(APP_DIR . 'views\navigation\navigation_header.php');?>
</head>
<body>
<?php
//hook for running code after body tag
$hooks->run('afterBody');
?>

<div class="container">
