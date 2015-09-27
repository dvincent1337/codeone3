<?php
/**
 * Routes - all standard routes are defined here.
 *
 * @author David Carr - dave@daveismyname.com
 * @version 2.2
 * @date updated Sept 19, 2015
 */

/** Create alias for Router. */
use Core\Router;
use Helpers\Hooks;

/** Define routes. */
Router::any('', 'Controllers\Navigation@index');
Router::any('editor', 'Controllers\Editor@index');
Router::any('/editor/(:all)', 'Controllers\Editor@edit');

Router::get('/getArticleByCategories/(:all)', 'Controllers\Navigation@getArticlesByCategory');
Router::get('subpage', 'Controllers\Welcome@subPage');


/** Module routes. */
$hooks = Hooks::get();
$hooks->run('routes');

/** If no route found. */
Router::error('Core\Error@index');

/** Turn on old style routing. */
Router::$fallback = false;

/** Execute matched routes. */
Router::dispatch();
