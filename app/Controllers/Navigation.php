<?php
/**
 * Navigation controller
 *
 * @author David Carr - dave@daveismyname.com
 * @version 2.2
 * @date June 27, 2014
 * @date updated Sept 19, 2015
 */

namespace Controllers;

use Core\View;
use Core\Controller;

/**
 * Sample controller showing a construct and 2 methods and their typical usage.
 */
class Navigation extends Controller
{

    /**
     * Call the parent construct
     */
    public function __construct()
    {
        parent::__construct();
        $this->article = new \Models\Article();
    }

    /**
     * Define Index page title and load template files
     */
    public function index()
    {
        $data['title'] = "Search";
        $data['header_include'] = 'navigation_header.php';

        View::renderTemplate('header', $data);
        View::render('navigation/navigation', $data);
        View::renderTemplate('footer', $data);
    }

    public function getArticlesByCategory($category_id){
        $data = $this->article->getArticlesByCategory($category_id);
        echo json_encode($data);
    }

}
