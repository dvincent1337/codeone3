<?php
/**
 * Editor controller
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
class Editor extends Controller
{

    /**
     * Call the parent construct
     */
    public function __construct()
    {
        parent::__construct();
        $this->article = new \Models\Article();
        $this->info = [
            'edit' => false,
            'article_id'=>0
        ];

    }

    /**
     * Define Index page title and load template files
     */
    public function index()
    {
        $data['title'] = "Editor";
        $data['welcome_message'] = "Editor";
        $data['categories'] = $this->article->getAllCategories();
        $data['sections'] = $this->article->getAllSections();


        if (\Helpers\Request::isPost()) {

            if ($this->info['edit']) {
                $model_data = [
                    'article_id'    => $this->info['article_id'],
                    'author_id'     => \Helpers\Session::getTestUserId(),
                    'category_id'   => $_POST['category'],
                    'section_id'    => $_POST['section'],
                    'title'         => $_POST['title'],
                    'text'          => $_POST['editor1']
                ];
                $this->article->updateArticle($model_data);
            } else {
                $model_data = [
                    'author_id'     => \Helpers\Session::getTestUserId(),
                    'category_id'   => $_POST['category'],
                    'section_id'    => $_POST['section'],
                    'title'         => $_POST['title'],
                    'text'          => $_POST['editor1']
                ];
                $new_id = $this->article->createArticle($model_data);
                \Helpers\Url::redirect('/editor/'.$new_id,false);
            }

        }
        if ($this->info['article_id'] > 0) {
            $data['article'] = $this->article->getArticle($this->info['article_id'] )[0];
        }

        View::renderTemplate('header', $data);
        View::render('editor/editor', $data);
        View::renderTemplate('footer', $data);
    }
    public function edit($article_id) {
        $this->info['edit'] =  true;
        $this->info['article_id'] = $article_id;
        $this->index();
    }


    /**
     * Define Subpage page title and load template files
     */
    public function subPage()
    {
        $data['title'] = "Editor";
        $data['welcome_message'] = "Editor";

        View::renderTemplate('header', $data);
        View::render('welcome/subpage', $data);
        View::renderTemplate('footer', $data);
    }
}
